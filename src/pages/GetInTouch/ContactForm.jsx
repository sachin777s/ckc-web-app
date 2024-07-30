import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function ContactForm() {
    return (
        <section className="mt-20 w-full text-gray-600 body-font bg-[#F9EBEB]">
            <div className="container px-5 py-24 mx-auto flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row">
                <div className="lg:w-3/5 md:w-2/5 md:pr-16 lg:pr-0 pr-0">
                    <h1 className='text-4xl md:text-6xl font-semibold'>
                    Free Website Health Check.
                    </h1>
                    <p className='mt-4 md:mt-6 text-xl opacity-80'>
                    Fill in the details to receive a free website health report conducted by our team of professional web developers.
                    </p>
                </div>

                <div className="w-full md:w-3/5">
                    <form
                        action=""
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                EmailTalephone
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                                Company
                            </label>
                            <input
                                type="company"
                                name="company"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                Talephone
                            </label>
                            <input
                                type="talephone"
                                name="talephone"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4 col-span-1 md:col-span-2">
                            <label htmlFor="websitelink" className="leading-7 text-sm text-gray-600">
                                Website Link
                            </label>
                            <input
                                type="url"
                                name="websitelink"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        
                        <ColorButton>Submit</ColorButton>
                    </form>
                </div>
            </div>
        </section>
    )
}
