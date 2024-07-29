import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

export default function SEOstates() {
    return (
        <section className='mt-20 py-16 flex gap-8 flex-col md:flex-row items-center justify-around'>
            <div className="flex items-center flex-col gap-8">
                <span className="text-7xl font-bold flex">
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.3,
                        })}
                        animateToNumber={300}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    Successful SEO Clients
                </span>

            </div>
            <div className="flex items-center flex-col gap-8">
                <span className="text-7xl font-bold flex">
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.3,
                        })}
                        animateToNumber={1000}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    1st Page Keyword Ranking
                </span>
            </div>
            <div className="flex items-center flex-col gap-8">
                <span className="text-7xl font-bold flex">
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.3,
                        })}
                        animateToNumber={100}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    Client Satisfaction Rate
                </span>
            </div>
        </section>
    )
}
