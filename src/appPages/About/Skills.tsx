'use client';

import Bounded from "@/components/Bounded/Bounded";
import { Heading } from "@/components/Heading/Heading";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SKILLS_HEADING = 'POWER SKILLS';
const SKILLS = [
    { id: '1', name: 'Next.js', color: '#3B82F6' },
    { id: '2', name: 'Node.js', color: '#10B981' },
    { id: '3', name: 'HTML/CSS', color: '#F59E0B' },
    { id: '4', name: 'Redux', color: '#8B5CF6' },
    { id: '5', name: 'TypeScript', color: '#EC4899' },
];

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const component = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // create as many GSAP animations and/or ScrollTriggers here as you want...
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true, // pin the trigger element while active
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });
    
            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "power1.inOut",
                },
            );
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={component}
            className="wrapper overflow-hidden"
        >
            <Bounded as='div'>
                <Heading size="lg" as='h2' className="mb-8">
                    {SKILLS_HEADING}
                </Heading>
            </Bounded>
            

            <ul>
                {SKILLS.map(({ id, name, color }) =>
                    <li
                        key={id}
                        className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
                        aria-label={name || ""}
                    >
                        {Array.from({ length: 15 }, (_, index) => (
                            <React.Fragment key={index}>
                                <span
                                    className={
                                        "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                                    }
                                    style={{
                                        color: index === 7 && color ? color : "inherit",
                                    }}
                                >
                                    {name}
                                </span>
                                <span className="text-3xl">
                                    <MdCircle />
                                </span>
                            </React.Fragment>
                        ))}
                    </li>)}
            </ul>
        </section>
    );
};
