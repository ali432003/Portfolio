import React from 'react'

export default function Footer() {
    return (
        <div style={{ background: "#111a35" }}>
            <div className="flex flex-col justify-start">
                <div className="my-4">
                    <h2 className='text-center' style={{ color: "#fff" }}>Socials</h2>
                </div>
                <div className='flex justify-center mt-4'>

                    <div className='me-4 hover:scale-125 ease-in duration-300 cursor-pointer'>
                        <a href="https://github.com/ali432003" target='_blank'> <img src="/assets/github-sign.png" className='p-2 bg-sky-500 rounded-full' width={'55px'} alt="" />
                        </a>
                    </div>

                    <div className='mx-4 hover:scale-125 ease-in duration-300 cursor-pointer'>
                        <a href="https://twitter.com/AliAami24230452" target='_blank'><img src="/assets/twitter.png" className='p-2 bg-sky-500 rounded-full' width={'55px'} alt="" />
                        </a>
                    </div>
                    <div className='mx-4 hover:scale-125 ease-in duration-300 cursor-pointer'>
                       <a href="https://www.facebook.com/profile.php?id=100010615687404" target='_blank'> <img src="/assets/fb.png" className='p-2 bg-sky-500 rounded-full' width={'55px'} alt="" />
                       </a>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-slate-400 text-center my-2'>
                        Made with ❤️ and sleepless nights.😊
                    </p>
                </div>
            </div>

        </div >
    )
}
