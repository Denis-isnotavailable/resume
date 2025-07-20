import Link from "next/link";

const NAV_ARRAY = [
    { id: 1, link: "/about", ariaLabel: "About Page", name: "About" },
    { id: 2, link: "/projects", ariaLabel: "Projects Page", name: "Projects" },
];
export const Header = () => {
    return (
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
            <ul>                
                <li><Link href="/" aria-label="Home Page">Denis</Link></li>
                <li>
                    <ul>
                        {NAV_ARRAY.map(({ id, link, ariaLabel, name }) =>
                            <li key={id}><Link href={link} aria-label={ariaLabel}>{name}</Link></li>)
                        }
                    </ul>
                </li>
                <li></li>
            </ul>
        </header>
    );
}
