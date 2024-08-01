import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom'
import OurTeam from './components/OurTeam';

export default function TeamMember() {
    const params = useParams();

    const [members, setMembers] = useState([]);
    const [singleMember, setSingleMember] = useState({});

    useEffect(() => {
        ; (async () => {
            const response = await fetch("/team-members/get-team-members.json");
            const data = await response.json();
            setMembers(data);

            const id = params.id;
            console.log(id)
            console.log(data[id - 1])
            setSingleMember(data[id - 1]);
        })();
    }, [singleMember])

    return (
        <main className='bg-[var(--bg-secondary)] py-28'>
            {/* Profile Section */}
            <section className="w-full ld:w-auto flex gap-32 flex-col lg:flex-row items-start justify-center">
                <div className="w-full lg:w-auto flex flex-col items-center">
                    <img
                        className='max-w-64'
                        src={singleMember.imageUrl}
                        alt=".."
                    />
                    <span className='mt-4 text-2xl font-semibold'>
                        {singleMember.name}
                    </span>
                </div>
                <div className="w-full lg:w-1/2">
                    <ul className='flex flex-col items-center lg:items-start gap-6'>
                        <img
                            className='w-[12rem]'
                            src="/image/CKC Abhinaw-03.png"
                            alt=""
                        />
                        {
                            singleMember.descriptions?.map((description, i) =>
                                <li
                                    key={i}
                                    className='text-xl opacity-80'
                                >
                                    {description}
                                </li>
                            )
                        }

                    </ul>
                </div>
            </section>

            {/* Team Members List Section */}
            <OurTeam />
        </main>
    )
}
