'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Bounded from '../Bounded/Bounded';

const NAME = 'Denis';
const LASTNAME = 'Slivinskyi';
const POSITION = 'Fullstack Developer';

export const Hero = () => {
    const component = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap
                .timeline()
                .fromTo(
                    '.name-animation',
                    { x: -100, opacity: 0, rotate: -10 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,

                        ease: "elastic.out(1,0.3)",
                        duration: 1,
                        transformOrigin: "left top",
                        stagger: { each: 0.1, from: "random" }
                    }
                )
                .fromTo(
                    '.position-title',
                    { y: 20, opacity: 0, scale: 1.2 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scale: 1,
                        ease: "elastic.out(1,0.3)"
                    }
                )
        }, component);

        return () => context.revert();
    }, []);

    const renderLetters = (name: string, key: string) => {
        return name.split("").map((letter, i) =>
        (
            <span key={i} className={`name-animation name-animation-${key}-index inline-block opacity-0 `}>
                {letter}
            </span>
        )
        );
    };
    
    return (
        <Bounded ref={component}>
            <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
                
                <div className="col-start-1 md:row-start-1 " data-speed=".2">
                    <h1
                        className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
                        aria-label={ NAME + " " + LASTNAME }
                    >
                        <span className="block text-slate-300">{renderLetters(NAME, 'first')}</span>
                        <span className="-mt-[.2em] block text-slate-500 whitespace-nowrap">{renderLetters(LASTNAME, 'last')}</span>
                    </h1>
                    <span className="position-title block bg-gradient-to-tr from-yellow-500
                     via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold
                     uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                        {POSITION}
                    </span>
                </div>
            </div>
        </Bounded>
    )
};
