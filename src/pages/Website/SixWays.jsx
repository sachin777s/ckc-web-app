import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function SixWays() {

    const sixWays = [
        {
            imgPath: "/image/logo-design.png",
            title: "Logo Creation",
            description: "Your logo is the hallmark of your brand, defining your identity and making a powerful first impression. Our designers specialize in creating dynamic, distinctive logos that ensure your brand stands out and remains unforgettable.",
            redirectRoute: "/design/logo",
            redirectLavel: "See Our Logo Design"
        },
        {
            imgPath: "/image/drone.png",
            title: "Drone Services",
            description: "Your brand inspires our innovation. With our cutting-edge drone photography and videography, we elevate your brand with breathtaking aerial views. We capture stunning footage that showcases every detail, presenting your business from its most impressive angles.",
            redirectRoute: "/media/drone",
            redirectLavel: "See Our Drone Promotion"
        },
        {
            imgPath: "/image/photography.png",
            title: "Professional photography",
            description: "Harnessing the latest technology, we deliver high-definition, professional photography that captures your business in stunning detail and captivates your audience.",
            redirectRoute: "/media/photo",
            redirectLavel: "See our photography portfolio"
        },
        {
            imgPath: "/image/seo.png",
            title: "SEO Expertise",
            description: "As a leading Google Partner in Noida, we bring unmatched expertise in optimizing your website for peak search engine performance. Our comprehensive approach ensures full compliance and effective utilization, maximizing your site’s visibility and impact.",
            redirectRoute: "#",
            redirectLavel: "See our SEO"
        },
        {
            imgPath: "/image/video.png",
            title: "Promotional Videos",
            description: "Our expert team crafts captivating promotional videos using compelling storyboards and mood boards. We create engaging content that resonates with your audience and enhances your brand’s presence across all chosen platforms.",
            redirectRoute: "/media/video",
            redirectLavel: "See our videos"
        },
        {
            imgPath: "/image/virtual-reality.png",
            title: "Virtual Concepts",
            description: "Harness our expertise in Google 360° imagery to elevate your business as a local leader. We create immersive and engaging virtual experiences that captivate your audience and showcase your business in a compelling new light.",
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
                        <div className="py-8 px-2 md:px-4 bg-[var(--secondary-color)] shadow-[0_0_12px_-3px_var(--main-color)] hover:shadow-[0_0_20px_-3px_black]">
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
                                        className='transition-all duration-200 group-hover:translate-x-2 fs-4'
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
