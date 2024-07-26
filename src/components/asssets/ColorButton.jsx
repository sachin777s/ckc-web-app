import React from 'react'

export default function TransButton({ onClickHander, children, className }) {
    return (
        <button
            onClick={onClickHander}
            className={`relative px-8 py-2 rounded-md text-[var(--secondary-color)] hover:text-[var(--main-color)] bg-[var(--main-color)] isolation-auto z-10 border-2 border-[var(--main-color)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[var(--secondary-color)] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ${className}`}
        >
            {children}
        </button>
    )
}