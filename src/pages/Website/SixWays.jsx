import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function SixWays() {

    const sixWays = [
        {
            imgPath: "/image/logo-design.png",
            title: "Logo Creation",
            description: "Your logo is the signature of your brand—capable of setting you apart in the industry and leaving a lasting first impression. Our designers craft dynamic logos that ensure your brand is unforgettable.",
            redirectRoute: "/design/logo",
            redirectLavel: "See Our Logo Design"
        },
        {
            imgPath: "/image/drone.png",
            title: "Drone Services",
            description: "Your brand fuels our creativity. With our drone photography and videography, we showcase your brand from breathtaking perspectives. We capture stunning aerial footage that highlights every detail, presenting your business in its best light.",
            redirectRoute: "/media/drone",
            redirectLavel: "See Our Drone Promotion"
        },
        {
            imgPath: "/image/photography.png",
            title: "Professional photography",
            description: "Using cutting-edge technology, we present your business with high-definition, professional photography that captivates your audience.",
            redirectRoute: "/media/photo",
            redirectLavel: "See our photography portfolio"
        },
        {
            imgPath: "/image/seo.png",
            title: "SEO",
            description: "As a top Google partner in Noida, we possess unparalleled expertise in optimizing your website for search engines, ensuring full compliance and effective utilization across your site.",
            redirectRoute: "#",
            redirectLavel: "See our SEO"
        },
        {
            imgPath: "/image/video.png",
            title: "Promotional Videos",
            description: "Through compelling storyboards and mood boards, our expert team produces engaging videos that captivate your audience across all your selected platforms.",
            redirectRoute: "/media/video",
            redirectLavel: "See our videos"
        },
        {
            imgPath: "/image/virtual-reality.png",
            title: "Virtual Concepts",
            description: "Leverage our expertise in Google 360° imagery to position your business as a local leader, providing immersive and engaging virtual experiences.",
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
