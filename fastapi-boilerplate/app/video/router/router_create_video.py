import tempfile
from fastapi import Depends, UploadFile, Response
from typing import List
from pydantic import BaseModel
from ..service import Service, get_service
from . import router
from moviepy.editor import *


class GenerateVideoRequest(BaseModel):
    prompt: str


@router.post("/{user_id}/video")
def upload_video(
        user_id: str,
        request: GenerateVideoRequest,
        svc: Service = Depends(get_service),
):
    # user = svc.repository.get_shanyrak(user_id)

    # if user is None:
    #     return Response(status_code=404)

    text = svc.text_service.generate_text(request.prompt)
    image_text = svc.text_service.generate_image_text(text)
    audios = svc.audio_service.text_to_speach(text)
    images = svc.image_service.text_to_image(image_text)
    video = svc.video_service.generate_video(audios, images)
    url = ""

    with tempfile.NamedTemporaryFile(suffix='.mp4', delete=True) as temp_file:
        video.write_videofile(temp_file.name, fps=10)
        url = svc.s3_service.upload_file(temp_file, user_id, temp_file.name)

    svc.repository.add_video(user_id, url)

    return Response(status_code=200)