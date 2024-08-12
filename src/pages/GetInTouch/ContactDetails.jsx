import React from 'react'

export default function ContactDetails() {
    return (
        <section className='px-2 mt-20 flex flex-col items-center'>
            <h1 className='text-4xl md:text-6xl font-semibold max-w-[80rem] text-center'>
                Contact us directly for a response today.
            </h1>
            <div className='w-full mt-16 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8'>
                <div className='py-4 border w-full md:w-[32rem] flex flex-col items-center'>
                    <img
                        className='w-[30%]'
                        src="/image/email.png"
                        alt="..."
                    />
                    <span className='mt-4 text-2xl font-bold'>
                        Email Us Via:
                    </span>
                    <span className='mt-4 text-xl opacity-80'>
                        info@ckcgi.com
                    </span>
                </div>
                <div className='py-4 px-2 border w-full md:w-[32rem] flex flex-col items-center'>
                    <img
                        className='w-[30%]'
                        src="/image/call.png"
                        alt="..."
                    />
                    <span className='mt-4 text-2xl font-bold'>
                        Contact Us Via:
                    </span>
                    <span className='mt-4 text-xl opacity-80'>
                        +91 7088869333
                    </span>
                </div>
            </div>
        </section>
    )
}
