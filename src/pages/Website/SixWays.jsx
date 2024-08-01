import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function SixWays() {

    const sixWays = [
        {
            imgPath: "/image/logo-design.png",
            title: "Logo Creation",
            description: "Your logo is your brand's signature. It has the power to distinguish you within an industry and create a memorable first impression for clients and customers alike! Our team of designers creates dynamic logos, ensuring people remember who you are.",
            redirectRoute: "/design/logo",
            redirectLavel: "See Our Logo Design"
        },
        {
            imgPath: "/image/drone.png",
            title: "Drone Services",
            description: "Your brand is our inspiration. With our drone photography and videography, we bring the best of your brand to life. We capture beautiful aerial footage that highlights all aspects for you business in order show it off at its finest!",
            redirectRoute: "/media/drone",
            redirectLavel: "See Our Drone Promotion"
        },
        {
            imgPath: "/image/photography.png",
            title: "Professional photography",
            description: "Our state-of-the-art technology showcases your business through professional, ultra-HD photography to your audience.",
            redirectRoute: "/media/photo",
            redirectLavel: "See our photography portfolio"
        },
        {
            imgPath: "/image/seo.png",
            title: "SEO",
            description: "As London’s leading Google partner, we hold the greatest knowledge when it comes to optimizing your website against search engine platforms to be fully compliant and utilized throughout your site.",
            redirectRoute: "#",
            redirectLavel: "See our SEO"
        },
        {
            imgPath: "/image/video.png",
            title: "Promotional Videos",
            description: "With story and mood boards, our team of experts create engaging videos that will enthral your audience across all of your chosen platforms.",
            redirectRoute: "/media/video",
            redirectLavel: "See our videos"
        },
        {
            imgPath: "/image/virtual-reality.png",
            title: "Virtual Concepts",
            description: "Our knowledge and expertise in Google 360° imagery will make you a leading business in your local area.            ",
            redirectRoute: "/media/virtual",
            redirectLavel: "See our virtual concepts"
        }
    ]

    return (
        <section className="container-tailwind mt-20">
            <div className=""></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24 xl:gap-28">
                {
                    sixWays.map((singleWay, i) =>
                        <div className="py-8 px-2 md:px-4 bg-[var(--secondary-color)] shadow-[0_0_12px_-3px_var(--main-color)]">
                            <div className='absolute'></div>
                            <div
                                className="flex flex-col items-center"
                                key={i}
                            >
                                <img
                                    className='w-20'
                                    src={singleWay.imgPath}
                                    alt="..."
                                />
                                <h1 className='mt-4 text-3xl font-semibold text-center'>
                                    {singleWay.title}
                                </h1>
                                <p className='mt-6 text-xl opacity-80 text-center'>
                                    {singleWay.description}
                                </p>
                                <NavLink
                                    className="group mt-8 flex items-center gap-1"
                                    to={singleWay.redirectRoute}
                                >
                                    {singleWay.redirectLavel}
                                    <BsArrowRight
                                        className='transition-all duration-200 group-hover:translate-x-2'
                                    />
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
