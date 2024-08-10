import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

export default function FAQ() {

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);

    return (
        <section className='container-tailwind mt-20 flex items-start justify-between flex-col md:flex-row'>
            <div className='w-full md:w-2/5 max-w-[28rem]'>
                <h1 className='text-5xl font-semibold'>How Your Content Can Drive Results</h1>
                <p className='mt-12 text-xl opacity-80'>At The CKC Marketing Company, our content writing experts craft high-quality copy that effectively communicates your company’s values and message. Connect with us today to see how we can amplify your brand’s voice and make a significant impact.</p>
            </div>
            <div className="w-full md:w-3/5 cursor-default">
                <div className="py-4 border-b-2 border-gray-200">
                    <div
                        onClick={() => setIsFirstOpen(!isFirstOpen)}
                        className="max-w-[46rem] flex items-center justify-between"
                    >
                        <span className='text-3xl'>Targeted Content Campaigns</span>
                        {isFirstOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul
                        className={`mt-4 ${isFirstOpen ? "block" : "hidden"} font-xl  text-xl opacity-80`}
                    >
                        <li className="mt-2">
                            Effective brand communication hinges on sharp, intelligent, and concise content writing. From website architecture (like the copy you're reading) to detailing services, values, and thought leadership, our content writing covers it all, ensuring clear and impactful messaging.
                        </li>
                        <li className="mt-2">
                            Whether you require a series of blog posts or a comprehensive revamp of your written content and structure, the experts at The London Marketing Company can create a tailored content strategy that aligns with your specific goals and objectives.                        </li>
                        <li className="mt-2">
                            Great content writing isn't just an added benefit—it's a crucial element in building a cohesive and unique brand image.                        </li>
                        <li className="mt-2">
                            We’ll collaborate with your business to create a customized content campaign that integrates your brand language, key selling points, and any other essential elements. Contact us to learn how we can help amplify your reach and achieve your vision.                        </li>
                    </ul>
                </div>
                <div className="py-4 border-b-2 border-gray-200">
                    <div
                        onClick={() => setIsSecondOpen(!isSecondOpen)}
                        className="max-w-[46rem] flex items-center justify-between"

                    >
                        <span className="text-3xl ">SEO & SEM: Boosting Your Online Visibility</span>
                        {isSecondOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isSecondOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li className="mt-2">
                            SEO (Search Engine Optimization) and SEM (Search Engine Marketing) are key concepts in content marketing that you’ve likely encountered. But what do they really involve?
                        </li>
                        <li className="mt-2">
                            SEO (Search Engine Optimization) involves optimizing web content and pages to rank higher in search results, while SEM (Search Engine Marketing) uses paid tactics to boost visibility on search engines. Both are crucial components of a successful content marketing strategy.
                        </li>
                        <li className="mt-2">
                            At London Marketing Company, our experts will enhance your business’s key selling points by targeting specific, high-impact keywords. This strategic approach will ensure your website stands out from the competition in search engine results.
                        </li>
                        <li className="mt-2">
                            By leveraging advanced search engine tools and expertise, we’ll help you engage your current audience while attracting new leads. This approach is essential for robust business development and expanding your online reach. Contact us to discover how we can enhance your search engine visibility.
                        </li>
                    </ul>
                </div>
                <div className='py-4'>
                    <div
                        onClick={() => setIsThirdOpen(!isThirdOpen)}
                        className="max-w-[46rem] flex items-center justify-between"
                    >
                        <span className='text-3xl '>Providing Value Beyond Search Rankings</span>
                        {isThirdOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isThirdOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li className="mt-2">
                            Our SEO and SEM expertise will elevate your company's search engine rankings and visibility. However, achieving a standout online brand goes beyond just ranking well: mastering the art of compelling writing can set you apart and make a significant difference in your online presence.
                        </li>
                        <li className="mt-2">
                            At London Marketing Company, our content experts bring extensive experience from working with diverse industries. We’ll apply this expertise to every facet of your online presence, creating compelling copy that vividly and concisely communicates your vision.
                        </li>
                        <li className="mt-2">
                            Our writers, with experience from some of the UK’s top publications, bring unmatched rigor and quality to your content. Contact us to discover how we can elevate your brand and bring your vision to life.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
