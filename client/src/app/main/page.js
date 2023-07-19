const Page = () => (
    <div>
        <div className='nav flex justify-between px-20 pt-5  pb-8 border-b-2 border-b-sky-950 h-[10vh]'>
      <div className='text-5xl'>
        <h1>Beine</h1>
      </div>
      <div className='flex justify-between items-end' >
      <p className='text-2xl mr-8'>
          My videos
        </p>
        <p className='text-2xl mr-8'>
          Learn more
        </p>
        <button className='text-2xl h-10 w-32 rounded-2xl border-2 border-sky-800 shadow-lg shadow-sky-700/50'>
          Sign out
        </button>
      </div>
    </div>
    <div className="h-[80vh] flex justify-center items-center gap-52">
        <div className="w-1/5  h-1/3 border-2 border-sky-800 rounded-2xl flex flex-col justify-center gap-6 items-center">
            <input className="bg-transparent border-2 border-sky-800 rounded-2xl w-2/3 h-1/4 p-3" placeholder="Write your topic here">
            </input>
            <button className="bg-transparent border-2 border-sky-800 rounded-2xl w-1/3 h-1/4">
                Submit
            </button>
        </div>
        <div className="w-[640px]  h-[480px] border-2 border-sky-800 rounded-2xl relative">
            <img src = "\accets\tv-static.gif" className="w-full h-full rounded-2xl opacity-30"></img>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span class="text-white text-3xl font-semibold bg-black py-2 px-5 rounded-2xl opacity-80">Your future video will be here.</span>
            </div>
        </div>
    </div>
    <div className="px-20 pt-8  pb-5 border-t-2 border-t-sky-900 h-[10vh]">

    </div>
    </div>
);

export default Page;