import Bounded from '@/components/Bounded/Bounded';
import { Heading } from '@/components/Heading/Heading';

const EDUCATION_ARRAY = [
    { id: 0, institution: 'ODESSA NATIONAL MARITIME UNIVERSITY', timePeriod: '2003 - 2008', speciality: 'Specialist, Faculty of Transport Technologies and Systems' },
    { id: 1, institution: 'JAVARUSH', timePeriod: '2021 - 2022', speciality: 'Java basics' },
    { id: 2, institution: 'GOIT', timePeriod: '2022 - 2023', speciality: 'Full Stack (HTML, CSS, JS, React JS, Node.js)' },
    { id: 3, institution: 'Ш++', timePeriod: '2023-2023', speciality: 'Computer Science Basics Alumnus' },
];
const ENGLISH_TITLE = 'English';
const ENGLISH_READING = 'Reading / Writing – B2';
const ENGLISH_SPEAKING = 'Speaking – B1';
const EDUCATION_TITLE = 'Education';

export const Education = () => {
    return (
        <Bounded>

            <div className='mb-16'>
                <Heading as='h2' size="lg">
                    {ENGLISH_TITLE}
                </Heading>
                
                <div className="mt-6 ml-6 flex flex-col w-fit items-left gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                    <p>{ENGLISH_READING}</p>
                    <p>{ENGLISH_SPEAKING}</p>
                </div>
            </div>
            
            <Heading as='h2' size="lg">
                {EDUCATION_TITLE}
            </Heading>            

            <ul>
                {EDUCATION_ARRAY.reverse().map(({ id, institution, timePeriod, speciality }) => 
                    <li key={id} className="ml-6 mt-8 max-w-prose">
                        <Heading as='h3' size="sm">
                            {institution}
                        </Heading>
                        
                        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                            <span>{timePeriod}</span>{" "}
                            <span className="text-3xl font-extralight opacity-0 md:opacity-100">/</span>{" "}
                            <span>{speciality}</span>
                        </div>
                    </li>
                )}
            </ul>           
            
        </Bounded>
    )
};
