import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function SEO() {

    const seoTopics = [
        {
            imagePath: "/image/words.png",
            title: "The words",
            redirectPath: "#",
        },
        {
            imagePath: "/image/email.png",
            title: "Contact avenues",
            redirectPath: "#"
        },
        {
            imagePath: "/image/app-development.png",
            title: "Products & services",
            redirectPath: "#"
        },
        {
            imagePath: "/image/process.png",
            title: "The process",
            redirectPath: "#"
        },
        {
            imagePath: "/image/web-page.png",
            title: "Website content",
            redirectPath: "#"
        },
        {
            imagePath: "/image/web-speed.png",
            title: "Web speed",
            redirectPath: "#"
        }
    ]

    return (
        <section className='container-tailwind mt-20'>
            <div className="">
                <h1 className='text-5xl font-semibold'>
                    Why Search Engine Optimisation is important for any company's success?
                </h1>
                <p className='mt-8 text-xl opacity-80'>
                    London Marketing Company is an SEO specialist that provides optimisation services to help businesses grow their exposure on Google and other search engines. We do this by breaking down the goals of each campaign, ensuring they align with strategic targets for increased brand awareness. Sales success stories from past clients, who have seen over a 1000% growth in sales! The process is transparent, so you will know what's going on throughout your SEO strategy and be updated about your website's performance.

                </p>
            </div>
            <div className="mt-16 flex flex-col items-center">
                <h1 className='max-w-[522px] text-5xl font-semibold text-center'>
                    What is Search Engine Optimisation?
                </h1>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32 xl:gap-40'>
                    {
                        seoTopics.map((singleTopic, i) =>
                            <div
                                key={i}
                                className='w-full md:w-auto py-8 px-2 bg-[var(--secondary-color)] flex flex-col items-center md:px-4 rounded-xl shadow-[0_0_9px_-2px_var(--main-color)]'
                            >
                                <img
                                    className='w-24'
                                    src={singleTopic.imagePath}
                                    alt=""
                                />
                                <h1 className='mt-6 text-3xl font-semibold'>
                                    {singleTopic.title}
                                </h1>
                                <NavLink
                                    className="group mt-8 flex items-center gap-1"
                                    to={singleTopic.redirectPath}
                                >
                                    Learn More
                                    <BsArrowRight
                                        className='transition-all duration-200 group-hover:translate-x-2'
                                    />
                                </NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
