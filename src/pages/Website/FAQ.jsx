import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

export default function FAQ() {

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);

    return (
        <section className='container-tailwind mt-20 flex items-start justify-between flex-col md:flex-row'>
            <div className='w-full md:w-2/5 max-w-[28rem]'>
                <h1 className='text-5xl font-semibold'>How your content can work for you.</h1>
                <p className='mt-12 text-xl opacity-80'>The London Marketing Company’s content writing experts can produce professional-grade copy that captures and articulates what your company stands for. Get in touch with us today to see how we can help you.</p>
            </div>
            <div className="w-full md:w-3/5 cursor-default">
                <div className="py-4 border-b-2 border-gray-200">
                    <div
                        onClick={() => setIsFirstOpen(!isFirstOpen)}
                        className="max-w-[46rem] flex items-center justify-between"
                    >
                        <span className='text-3xl'>Strategic content campaigns</span>
                        {isFirstOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul
                        className={`mt-4 ${isFirstOpen ? "block" : "hidden"} font-xl  text-xl opacity-80`}
                    >
                        <li>
                            Sharp, smart, and to-the-point content writing is key to effectively communicating your brand and its values. Content writing ranges from everything to the architecture of a website (such as the copy you’re reading now) to writing that outlines services, values, areas of note, and thought leadership.
                        </li>
                        <li>
                            Whether you need a series of blogs on your website or a full-scale overhaul of written materials and structures, the marketing experts here at the London Marketing Company are able to build a strategic content campaign tailored specifically to the objectives that you’re looking to achieve.
                        </li>
                        <li>
                            Good content writing isn’t just a luxury, it’s an essential part of establishing a coherent and distinctive brand image.
                        </li>
                        <li>
                            We’ll work with your business to construct a bespoke content campaign for your business, that incorporates your brand language, key selling points and other content elements that you wish to include. Get in touch to find out more about how we can help to maximise your reach and vision.
                        </li>
                    </ul>
                </div>
                <div className="py-4 border-b-2 border-gray-200">
                    <div
                        onClick={() => setIsSecondOpen(!isSecondOpen)}
                        className="max-w-[46rem] flex items-center justify-between"

                    >
                        <span className="text-3xl ">SEO & SEM: supercharging your online presence</span>
                        {isSecondOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isSecondOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li>
                            Search engine optimisation (SEO) and search engine marketing (SEM) are ubiquitous terms in content marketing that you might have heard of. But what do they actually mean?
                        </li>
                        <li>
                            SEO means tailoring web content and web pages to appear higher in search rankings, and SEM means using paid strategies to increase visibility on these search engines. Both are essential tools in the arsenal of any content marketing strategy.
                        </li>
                        <li>
                            The marketing experts at LondonMarketing Company will help to supercharge your businesses’ selling points. We’ll help your business to target precise, fixed keywords that enable your website to stand out from competitors when on search engines.
                        </li>
                        <li>
                            This will allow you to address your existing audience and while targeting potential leads using cutting-edge search engine tools and expertise. It’s a fundamental part of solid business development and growing your reach online. Get in touch to see how we might be able to help boost your search engine standing.
                        </li>
                    </ul>
                </div>
                <div className='py-4'>
                    <div
                        onClick={() => setIsThirdOpen(!isThirdOpen)}
                        className="max-w-[46rem] flex items-center justify-between"
                    >
                        <span className='text-3xl '>Delivering value beyond search ranking</span>
                        {isThirdOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isThirdOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li>
                            Our SEO and SEM expertise will optimise the positioning of your company’s ranking and
                            standing on search engine platforms. But this is only half the story of a successful online brand proposition: the difference between good and bad writing is easy to see but difficult to master.
                        </li>
                        <li>
                            The content experts at the London Marketing Company have worked with a wide range of
                            companies across a variety of industries. We’ll leverage this experience and expertise across all aspects of your online business proposition, crafting copy that articulates your vision in a
                            succinct, lively, and sharp way.
                        </li>
                        <li>
                            Our writers have worked for some of the UK’s leading titles and will bring a combination of
                            rigour and quality, honed by content writing at the very highest levels. Get in touch to see how we can bring your brand to life.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
