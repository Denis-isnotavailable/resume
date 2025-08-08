import clsx from "clsx";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import React from "react";
import { NAV_DATA } from "@/utils/navigation";

export const Footer = () => {
    return (
        <footer className="px-4 py-10 md:px-6 md:py-14 lg:py-16 text-slate-600">
            <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row w-full max-w-7xl">
                <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
                    <Link
                        href="/"
                        className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                    >
                        {'Denis Slivinskyi'}
                    </Link>
                    <span
                        className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
                        aria-hidden={true}
                    >
                        /
                    </span>
                    <Link
                        href="tel:+380957492294"
                        className=" text-sm text-slate-300 transition-all duration-150 hover:scale-110 hover:text-yellow-400"
                    >
                        {'+38 095 7 492 294'}
                    </Link>
                </div>
                <nav className="navigation" aria-label="Footer Navigation">
                    <ul className="flex items-center gap-1">
                        {NAV_DATA.map(({ link, label }, index) => (
                            <React.Fragment key={label}>
                                <li>
                                    <Link
                                        className={clsx(
                                            "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                                        )}
                                        href={link}
                                    >
                                        {label}
                                    </Link>
                                </li>
                                {index < NAV_DATA.length - 1 && (
                                    <span
                                        className="text-4xl font-thin leading-[0] text-slate-400"
                                        aria-hidden="true"
                                    >
                                        /
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
                <div className="socials inline-flex justify-center sm:justify-end">
                    {<Link
                        href={'mailto:denis.slivinsk@gmail.com'}
                        className="p-2 text-xl text-slate-300 transition-all duration-150 hover:scale-110 hover:text-yellow-400"
                        aria-label={" on Mail"}
                    >
                        <span>{'denis.slivinsk@gmail.com '}</span>
                    </Link> }

                    {<Link
                        href={'https://github.com/Denis-isnotavailable'}
                        className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                        aria-label={"on GitHub"}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </Link> }
                    
                    {<Link
                        href={'https://www.linkedin.com/in/denis-slivinskyi/'}
                        className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                        aria-label={"on LinkedIn"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </Link>}
                    
                    {<Link
                        href={'https://t.me/d_e_n_i_s_s_s_s'}
                        className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                        aria-label={"on Telegram"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTelegram />
                    </Link>}
                </div>
            </div>
        </footer>
    );
};
