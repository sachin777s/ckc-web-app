import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function OurTeam() {

    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        ; (async () => {
            const response = await fetch("/team-members/get-team-members.json")
            const data = await response.json();
            setTeamMembers(data);
        })()
    }, [])

    return (
        <section name="our-team" className='mt-20 w-full flex flex-col items-center'>
            <div className="w-full flex items-center justify-center">
                <h1 className=' text-4xl md:text-6xl text-center font-semibold max-w-[42rem]'>
                    <span className='text-[var(--main-color)]'>Meet </span>
                    Our Team
                </h1>
            </div>
            <div className="mt-16 flex max-w-[100rem] flex-wrap items-center justify-center gap-6">
                {
                    teamMembers.map((member, i) =>
                        <div
                            key={i}
                            className='bg-[var(--secondary-color)] py-6 w-[20rem] flex flex-col items-center border-1 rounded-md'>
                            <img
                                className='w-[14rem] rounded-[100%] saturate-0 contrast-100'
                                src={member.imageUrl}
                                alt="..."
                            />
                            <h3 className='mt-4 text-2xl font-semibold'>
                                {member.name}
                            </h3>
                            <span className='mt-2 text-xl opacity-80'>
                                {member.role}
                            </span>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
