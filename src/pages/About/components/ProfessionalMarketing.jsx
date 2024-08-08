import React from 'react'

export default function ProfessionalMarketing() {

    const cards = [
        {
            imgPath: "/image/CIM.webp",
            text: "The Chartered Institute of Marketing (CIM) is a world-renowned organisation that has been the leading professional marketing body for more than 100 years. With 130 study centres in 36 countries, CIM works closely with teams and leaders to improve their capability."
        },
        {
            imgPath: "/image/gplogo.webp",
            text: "London Marketing Company has been a Google Partner since 2018 and specialises in 360° Virtual Tours for businesses across the UK and advanced SEO services. London Marketing Company has won multiple awards and was ranked in the top percentile of Google Partners in 2020 and 2021."
        },
        {
            imgPath: "/image/russle.svg",
            text: "All London Marketing Company business and marketing executives hold high-level qualifications from prestigious Russell Group universities. These 24 top-level institutions provide you with an excellent education in high-level business disciplines."
        },
        {
            imgPath: "/image/WordPress.webp",
            text: "London Marketing Company specialises in WordPress website development services, offering ultra-fast, high-performing and sleek and stylish Worpress websites, bespoke and customised to the company and industries' specific needs and trends. We have produced 100's of websites using WordPress."
        },
        {
            imgPath: "/image/wix_partner_logo.webp",
            text: "London Marketing Company is an Official Wix Partner, being approached directly by Wix to help users globally. An Official Wix Partnershipais offered when a user creates more than X amount of websites of a certain standard. We have designed and developed on behalf of Wix users globally, helping users with an array of website ideas and issues."
        },
        {
            imgPath: "/image/google-logo.svg",
            text: "We pride ourselves on our unrivalled service quality and ultra-responsive customer care. We work hard to enhance business operations, brand visibility, consumer awareness and profitability for all clients we take onto the team! Our Google reviews speak volumes about what type of businesses we've helped in a multitude of industries."
        }
    ]

    return (
        <section name="our-accolades" className='mt-20 px-2 py-8 flex flex-col items-center bg-[#F9EBEB]'>
            <h1 className='max-w-[40rem] text-center text-4xl md:text-6xl font-semibold'>Our professional marketing accolades.</h1>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {
                    cards.map((card, i) =>
                        <div
                            className='px-4 py-6 max-w-[28rem] bg-[var(--secondary-color)] flex flex-col items-start'
                            key={i}
                        >
                            <img
                                className='w-[40%]'
                                src={card.imgPath}
                                alt="..."
                            />
                            <p className='mt-4 text-xl opacity-80'>
                                {card.text}
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
