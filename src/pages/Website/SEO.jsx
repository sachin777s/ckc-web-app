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
        <section name="seo" className='container-tailwind mt-20'>
            <div className="">
                <h1 className='text-5xl font-semibold'>
                Why SEO is Crucial for Your Company’s Success
                </h1>
                <p className='mt-8 text-xl opacity-80'>
                At Noida Marketing Company, we excel in SEO, providing tailored optimization services that elevate your visibility on Google and other search engines. We carefully define and align each campaign with your strategic goals to amplify brand awareness and drive results. Our clients have seen extraordinary outcomes, with some experiencing over 1000% growth in sales. We maintain a transparent approach, keeping you informed and updated on your SEO strategy and website performance every step of the way.
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
