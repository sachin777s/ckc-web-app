import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function WebHosting() {
    return (
        <section className='mt-12 flex gap-8 md:gap-12 items-center flex-col-reverse md:flex-row'>
            <div className="md:w-1/2 w-full">
                <h1 className='text-4xl font-bold'>
                    Ultra-fast website hosting.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    A business is dependent on the internet for marketing, new customer acquisition and retention. That's why you need a dependable web hosting company like ours! Our email servers are fast enough to send out emails every day without slowing down your site or negatively impacting its loading speed; we make sure everything works securely with daily backups of all databases so there'll be no data loss in case something goes wrong - which it won't because our team takes care both ways (security and performance).
                </p>
                <ColorButton className="mt-4">Upgrade today</ColorButton>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <video
                        className='w-full h-full'
                        src="/image/data-centers.mp4"
                        alt=".."
                        controls={false}
                        muted
                        loop
                        autoPlay
                    />
                </div>
            </div>
        </section>
    )
}