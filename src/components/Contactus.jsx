import React, { useRef } from 'react'
import ColorButton from "./asssets/ColorButton"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contactus() {

    const form = useRef();

    console.log()

    const sendEmail = (e) => {
        e.preventDefault();

        const promise = emailjs
            .sendForm(
                import.meta.env.VITE_YOUR_SERVICE_ID,
                import.meta.env.VITE_YOUR_TEMPLATE_ID_1,
                form.current,
                { publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY, }
            )

        toast.promise(promise, {
            loading: "..processing, Please Wait",
            success: "Form submitted successfully",
            error: "error occurs in data"

        })
    };

    return (
        <section name="contactus" className="mt-20 w-full text-gray-600 body-font bg-[#F9EBEB]">
            <div className="container px-5 py-24 mx-auto flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row">
                <div className="lg:w-3/5 md:w-2/5 md:pr-16 lg:pr-0 pr-0">
                    <h1 className='text-4xl md:text-6xl font-semibold'>
                    Get in Touch
                    </h1>
                    <p className='mt-4 md:mt-6 text-xl opacity-80'>
                    Ready to elevate your business? Reach out to us today. Let’s connect and explore how we can drive your growth and success together.
                    </p>
                </div>

                <div className="w-full md:w-3/5">
                    <form
                        onSubmit={sendEmail}
                        ref={form}
                        action=""
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="from_name"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="from_email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                                Company
                            </label>
                            <input
                                required
                                type="company"
                                name="from_company"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                Talephone
                            </label>
                            <input
                                required
                                type="talephone"
                                name="from_mob"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                What's your email regarding?
                            </label>
                            <select
                                type="talephone"
                                name="from_service"
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
                                What's your budget?
                            </label>
                            <select
                                name="from_price"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option>₹0 - ₹1k</option>
                                <option>₹1K - ₹5K</option>
                                <option>₹5K - ₹10K</option>
                                <option>₹10K - ₹25K</option>
                                <option>₹25K - ₹100K</option>
                                <option>₹100K+</option>
                            </select>
                        </div>

                        <div className="relative mb-4 col-span-1 md:col-span-2">
                            <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                                Message
                            </label> <br />
                            <textarea
                                maxLength={94}
                                minLength={10}
                                name="message"
                                id="message"
                                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button type='submit'>
                            <ColorButton>Submit</ColorButton>
                        </button>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </section>
    )
}
