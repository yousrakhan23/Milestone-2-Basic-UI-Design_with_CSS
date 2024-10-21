import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4' >
     
      <div className='flex items-start flex-col gap-4 w-[700px] mt-6 px-2 m-11 mx-auto text-black bg-blue-900 bg-opacity-100 rounded-full'>
        <section className='text-black relative'>
          <div className='container  px-9 py-12 mx-auto w-full mb-4'>
            <div className='flex flex-col text-center w-full mt-1'>
              <p className=' text-sm font-bold mb-2 text-white justify-center text-center transition-transform duration-500 hover:translate-y-5 hover:text-green-700 cursor-pointer'></p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label htmlFor='name' className='leading-7 text-sm text-opacity-95 font-extrabold'>Name:</label>
                    <input type='text' id='name' name='title' className='w-full bg-slate-300 rounded-full border border-y-black focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-green-900 text-black py-1 px-3 leading-snug transition-colors duration-200 ease-out' />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label htmlFor='email' className='leading-7 text-sm text-opacity-95 font-extrabold'>Email:</label>
                    <input type='text' id='name' name='title' className='w-full bg-slate-300 rounded-full border border-y-black focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-green-900 text-black py-1 px-3 leading-snug transition-colors duration-200 ease-out' />

                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label htmlFor='message' className='leading-7 text-sm text-opacity-95 font-extrabold'>Comment:</label>
                    <textarea id='message' name='message' className='w-full bg-slate-300 rounded-full border border-y-black focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-green-900 text-black py-1 px-3 leading-snug transition-colors duration-200 ease-out' defaultValue={""} />
                  </div>
                </div>
                <div className='p-2 w-full flex justify-center'>
                  <button className='inline-flex text-white bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 border-0 py-2 px-8 focus:outline-none rounded-full text-sm transition-transform duration-300 hover:scale-105 '>Submit your comment</button>
                </div>
                <span className='inline-flex'></span>
                <div className='flex justify-center items-center text-center w-full font-extrabold transition-transform duration-500 hover:translate-x-5 hover:text-green-700 cursor-pointer'>
                  FEEL FREE TO ORDER......!!
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </div>

  );
}

export default Contact;