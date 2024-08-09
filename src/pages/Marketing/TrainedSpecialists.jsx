import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

export default function TrainedSpecialists() {


  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  return (
    <>
  <section className='container-tailwind mt-20 flex items-start justify-between flex-col md:flex-row'>
            <div className='w-full md:w-2/5 max-w-[28rem]'>
                <h1 className='text-5xl font-semibold'>Highly Skilled Marketing Professionals.</h1>
            </div>
            <div className="w-full md:w-3/5 cursor-default">
                <div className="py-4 border-b-2 border-gray-200">
                    <div
                        onClick={() => setIsFirstOpen(!isFirstOpen)}
                        className="max-w-[46rem] flex items-center justify-between"
                    >
                        <span className='text-3xl'>Who is Noida Marketing Company?</span>
                        {isFirstOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul
                        className={`mt-4 ${isFirstOpen ? "block" : "hidden"} font-xl  text-xl opacity-80`}
                    >
                        <li>
                        Noida Marketing Company is the leading marketing company in Noida and has offices also in Bristol, Manchester, Cardiff and Reading. Noida Marketing Company is a professional, chartered organization that specialises in tailored solutions for the bespoke needs of our clients—from small indies to larger national corporations.We know that all marketing is an investment in growing your business and its profitability. We offer packages for non-obligatory consultations with our team of experts, ranging from SEO specialists to web developers; graphic designers such as a copywriter or social media managers who can help you craft the best possible message tailored specifically towards what interests potential customers most about YOUR product/service offerings!
                        </li>
                        <li>
                            Whether you need a series of blogs on your website or a full-scale overhaul of written materials and structures, the marketing experts here at the Noida Marketing Company are able to build a strategic content campaign tailored specifically to the objectives that you’re looking to achieve.
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
                        <span className="text-3xl ">How we can help you improve your marketing with immediate effect?</span>
                        {isSecondOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isSecondOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li>
                        One of the most competitive aspects of Noida Marketing Company is we offer a full range of marketing packages, from managed one-off services to monthly fixed retainers. This allows for tailored solutions depending on what your needs are and how much time is required on a monthly basis! Our team provides many different types of service options which can meet any specific requirements, whether web design, branding, search engine optimisation or visual merchandising.
                        </li>
                        <li>
                            SEO means tailoring web content and web pages to appear higher in search rankings, and SEM means using paid strategies to increase visibility on these search engines. Both are essential tools in the arsenal of any content marketing strategy.
                        </li>
                        <li>
                            The marketing experts at NoidaMarketing Company will help to supercharge your businesses’ selling points. We’ll help your business to target precise, fixed keywords that enable your website to stand out from competitors when on search engines.
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
                        <span className='text-3xl '>How does Noida Marketing Company improve my business' competitiveness and profitability?</span>
                        {isThirdOpen
                            ? <FaMinusCircle className='scale-150' />
                            : <FaPlusCircle className='scale-150' />
                        }
                    </div>
                    <ul className={`mt-4 ${isThirdOpen ? "block" : "hidden"} text-xl opacity-80`}>
                        <li>
                        Noida Marketing Company is a premier agency that develops and manages active marketing programs for its clients. The team consists of highly skilled marketing, web, design and media professionals who work with you to create an individualized plan tailored specifically towards your business needs and targets, which can either complement or revolutionise existing strategies in order to attract more customers through creative campaigns designed especially for each client’s unique products/services offerings.
                        </li>
                        <li>
                            The content experts at the Noida Marketing Company have worked with a wide range of
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
  
  </>
  )
}
