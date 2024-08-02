import React from 'react'
import { productlist } from "./productlist"
import Card from './Card'

export default function Products() {

    return (
        <main>
            <div className='mt-20 w-full'>
                <h1 className='text-4xl md:text-6xl font-semibold'>
                    View Our Products
                </h1>
                <p className='max-w-[1000px] mt-6 text-xl opacity-80'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus alias voluptatibus tempore nulla eum dicta facilis maxime!
                </p>
            </div>
            <div className='mt-16 py-4 bg-[var(--bg-secondary)] flex flex-wrap items-center justify-center gap-5'>
                {
                    productlist.map((product, i) => {
                        return (
                            <Card key={i} product={product} />
                        )
                    })
                }
            </div>
        </main>
    )
}
