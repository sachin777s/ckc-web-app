import React from 'react'
import ColorButton from "./asssets/ColorButton"

export default function Contactus() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center justify-center">
                <div className="lg:w-3/5 md:w-2/5 md:pr-16 lg:pr-0 pr-0">
                    <img
                        style={{ height: '400px', margin: '0 auto' }}
                        src="/image/form-man-05.png"
                        alt="form image"
                    />
                    <h1 className="title-font text-6xl font-medium text-gray-900 mx-5">
                        To start growing your business today, contact us
                    </h1>
                    <p className="leading-relaxed mt-4 fs-3 mx-5">
                        Let's get to know each other and talk about how we can help you.
                    </p>
                </div>

                <div className="md:w-3/5">
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
                                Email
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

                        <div className="relative mb-4">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                What's your budget?
                            </label>
                            <select
                                type="talephone"
                                name="talephone"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option>Marketing</option>
                                <option>Website</option>
                                <option>Branding</option>
                                <option>Media</option>
                                <option>Multiple Services</option>
                            </select>
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                What's your email regarding?
                            </label>
                            <select
                                type="talephone"
                                name="talephone"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option>£0 - £1k</option>
                                <option>£1 - £5</option>
                                <option>£5 - £10</option>
                                <option>£10 - £25</option>
                                <option>£25 - £100</option>
                                <option>£100+</option>
                            </select>
                        </div>

                        <div className="relative mb-4 col-span-2">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                Message
                            </label> <br />
                            <textarea
                                name="message"
                                id="message"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <ColorButton>Submit</ColorButton>
                    </form>
                </div>
            </div>
        </section>
    )
}
