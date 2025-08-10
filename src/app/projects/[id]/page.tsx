import Bounded from '@/components/Bounded/Bounded';
import { Heading } from '@/components/Heading/Heading';
import { PROJECTS } from '@/utils/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
  
    const project = PROJECTS.find((project) => project.id === Number(id));
    if (!project) return notFound();

    const {
        name,
        project_live_link,
        date,
        role,
        frontRepo,
        backRepo,
        allTechnologies,
        overview,
    } = project;

    return (
        <Bounded>
            <Heading size="xl" className="col-start-1">
                {name}
            </Heading>
            
            <p className="mb-8 text-lg text-yellow-100 font-bold">
                {allTechnologies}
            </p>

            <div className="mb-10 text-lg font-bold border-b border-b-slate-100 md:flex md:justify-between">                
                <Link
                    href={project_live_link}
                    aria-label={name || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-yellow-400 font-bold"
                >
                    {project_live_link}
                </Link>
                <p>{date}</p>
            </div>

            <p className="mb-4 text-lg">
                {role}
            </p>

            {frontRepo && <Link href={frontRepo} className="block mb-4 text-lg">
                <span className="text-lg font-bold text-slate-100">
                    {'Project repository front: '}
                </span>
                {frontRepo}
            </Link>}

            {backRepo && <Link href={backRepo} className="block mb-4 text-lg">
                <span className="text-lg font-bold text-slate-100">
                    {'Project repository back: '}
                </span>
                {backRepo}
            </Link>}

            <Heading as='h2' size="sm" className="mb-2">
                {'Overview:'}
            </Heading>

            <p className="text-lg">
                {overview}
            </p>

        </Bounded>
    );
};