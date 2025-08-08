import Bounded from '@/components/Bounded/Bounded';
import { Heading } from '@/components/Heading/Heading';
import { ProjectsList } from './ProjectsList';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION = 'Some of my projects:';

export const ProjectsPage = () => {
    return (
        <Bounded>
            <Heading size="xl" className="mb-8">
                {PAGE_TITLE}
            </Heading>

            <p className="mb-10">{PAGE_DESCRIPTION}</p>

            <ProjectsList />
        </Bounded>
    );
}
