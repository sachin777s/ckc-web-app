import React from 'react'


export default function Adderess() {

    return (
        <div className='mt-20 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between'>
            <iframe
                className='w-full md:w-1/2'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14013.899162287893!2d77.36065701738282!3d28.585530000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722341542737!5m2!1sen!2sin" width="600" height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className='w-full md:w-1/2 flex flex-col items-start justify-center'>
                <h1 className='text-4xl md:text-6xl font-bold'>
                    <img src="/image/map.png" alt="" />
                    <span>Visit Us</span>
                </h1>
                <span className='mt-4 text-xl opacity-80'>
                    Berkeley Square <br />
                    Berkeley Square House, <br />
                    2nd Floor, <br />
                    Mayfair  <br />
                    London <br />
                    W1J 6BD
                </span>
                <span className='mt-2 text-xl opacity-80'>+91 XXXXX X8769</span>
                <span className='mt-2 text-xl opacity-80'>Email: info@londonmarketingcompany.co.uk</span>
            </div>
        </div>
    )
}
