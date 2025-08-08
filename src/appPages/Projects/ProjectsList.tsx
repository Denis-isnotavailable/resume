'use client'

import { PROJECTS } from '@/utils/projects';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from 'react-icons/md';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsList = () => {
    const component = useRef(null);
    const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

    useEffect(() => {        
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.3,
                        ease: "elastic.out(1,0.3)",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom-=100px",
                            end: "bottom center",
                            toggleActions: "play none none none",
                        },
                    },
                );
            });
    
            return () => ctx.revert();
        }, component);
    }, []);    

    return (
        <>
            <ul
                ref={component}
                className="grid border-b border-b-slate-100"
            >
                {
                    PROJECTS.map(({id, name, mainTechnologies}, index) =>
                        <li
                            key={id}
                            className="list-item opacity-0"
                            ref={(el) => {if (el) itemsRef.current[index] = el}}
                        >
                            <Link
                                href={`projects/${id}`}
                                className="flex flex-col justify-between border-t border-t-slate-100 py-10  text-slate-200 md:flex-row"
                                aria-label={name || ""}
                            >
                                <div className="flex flex-col">
                                    <p className="text-3xl font-bold">{name}</p>                                                                    
                                    <span className="text-lg text-yellow-400 font-bold">
                                        {mainTechnologies}
                                    </span>
                                    
                                </div>
                                <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                                    {'Read more'} <MdArrowOutward />
                                </span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>        
    );
};
