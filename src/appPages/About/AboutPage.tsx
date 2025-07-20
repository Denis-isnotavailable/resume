import Bounded from '@/components/Bounded/Bounded';
import { Button } from '@/components/Button/Button';
import { Heading } from '@/components/Heading/Heading';
import { Avatar } from '@/components/Avatar/Avatar';


const NAME = 'Denis';
const LASTNAME = 'Slivinskyi';

export const AboutPage = () => {
    return (
        <Bounded>
            <div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
                    <Heading size="xl" className="col-start-1">
                        {`${NAME} ${LASTNAME}`}
                    </Heading>

                    <p>
                        I am a full-stack developer skilled in building and maintaining complex web applications using modern
                        technologies like React, Next.js, TypeScript, and Node.js. Demonstrated ability to lead projects from
                        concept to deployment, focusing on enhancing user experience and optimizing performance. Passionate
                        about leveraging technical expertise and collaborative skills in a dynamic team environment to drive
                        innovation and deliver impactful digital products.
                    </p>

                    <Button
                        linkField='https://drive.google.com/file/d/19kSMMqE-S3Sd8QMvuceGHWKEgq5rO9ye/view?usp=sharing'
                        label='Resume'
                        className='text-slate-800'
                        target="_blank"
                        rel="noopener noreferrer"
                    />

                    <Avatar
                        image={'/images/prog.webp'}
                        className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
                    />
                </div>                
            </div>
        </Bounded>
    );
};
