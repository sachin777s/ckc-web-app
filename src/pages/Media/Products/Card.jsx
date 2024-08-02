import React, { useRef } from 'react'

export default function Card({ product }) {

    const videoRef = useRef(null);

    return (
        <div
            className="max-w-[28rem] border rounded-2xl overflow-hidden bg-[var(--secondary-color)] shadow-[0_0_12px_-3px_var(--main-color)]"
            onMouseEnter={() => videoRef.current.play()}
            onMouseLeave={() => videoRef.current.pause()}
        >
            <div className="relative">
                <video
                    className='w-full'
                    src={product.video}
                    controls={false}
                    muted
                    ref={videoRef}
                ></video>
                <span className='py-1 px-2 font-semibold absolute bottom-1 left-1 rounded-lg bg-[var(--secondary-color)]'>
                ₹ {product.price}
                    </span>
            </div>
            <div className="px-2 py-4">
                <h3 className='text-2xl md:text-3xl font-semibold'>{product.title}</h3>
                <span>{product.quantity}</span>
            </div>
        </div>
    )
}
