import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

export default function States() {
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
                        animateToNumber={6}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    India cities we're based in
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
                        animateToNumber={300}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    Number of bespoke websites built
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
                        animateToNumber={250}
                    />
                    <span className='text-[var(--main-color)]'>+</span>
                </span>
                <span className="text-3xl font-semibold text-center">
                    Number of businesses we've worked with
                </span>
            </div>
        </section>
    )
}
