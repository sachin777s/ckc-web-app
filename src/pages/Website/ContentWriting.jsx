import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function ContentWriting() {
    return (
        <section name="content" className='container-tailwind mt-20 pt-20 flex gap-12 items-center flex-col-reverse md:flex-row justify-between border-t-4 border-gray-200'>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <h1 className='text-4xl font-bold'>High-Caliber Content Writing</h1>
                <p className='mt-4 text-xl opacity-80'>We leverage branding and design to create distinctive voices for your business. By working closely with you and your team, we tailor every detail to build a powerful, unique identity that truly stands out.</p>
                <Link to={"/design"}>
                <ColorButton className="mt-4">View Our Designing and Branding</ColorButton>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <img className='w-full md:1/2 lg::w-2/3' src="/image/newspaper.webp" alt=".." />
            </div>
        </section>
    )
}
