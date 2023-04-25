import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Navbar from "./navbar.component";
import profileImage from '../../public/profileImage.jpg'

const Hero = () => {
    return(
        <section className="h-screen flex flex-col items-center text-grey text-xs md:text-[14px] justify-center pb-12 md:space-y-1 snap-center"> 
            <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] relative rounded-full border-white mb-5">
                <Image src={profileImage} alt='profile image' fill className="object-cover rounded-full"/>
            </div>
            <p className="tracking-[5px]">FRONT-END DEVELOPER</p>
            <div className="text-white text-2xl md:text-3xl">
                <Typewriter
                    options={{
                        strings: ['I am a Front-End Developer', 'I am a UI/UX Designer'],
                        autoStart: true,
                        loop: true,
                        delay:70,
                        pauseFor:2500,
                    }} 
                />
            </div>
            <div className="flex space-x-2">
                <p className="">About</p>
                <p>Experience</p>
                <p>Skills</p>
                <p>Projects</p>
            </div>
        </section>
    ) 
}

export default Hero;

