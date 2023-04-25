import { SKILLS } from '../skillsData'
import Image from 'next/image'
import nextJs from '../../public/next-js.svg'

const Skills = () => {

    const upperHalfSkills = SKILLS.filter((_,idx)=>idx<8)
    const lowerHalfSkills = SKILLS.filter((_,idx)=>idx>=8)

    return(
        <section className='h-screen snap-center flex flex-col items-center'>
            <h2 className="text-grey text-xl tracking-[8px]  pt-24 ">SKILLS</h2>
            <p className='text-grey text-xs  mt-2 mb-[80px] md:text-sm'>Hover Over A Skill For Current Proficiency</p>
            <div className='md:w-[400px] w-[300px]'>
                <div className='grid grid-cols-4 justify-items-center gap-y-2 mb-3 cursor-pointer'>
                    {
                        upperHalfSkills.map((skill)=>{
                            
                            return(
                                <div className='border-[grey] border-[1px] rounded-full  group flex items-center relative h-[55px] w-[55px] justify-center'>
                                    <div className='h-[40px] w-[40px] group-hover:grayscale'>
                                        {
                                            skill.name == 'Next Js' ?
                                            (
                                                <Image src={nextJs} alt='skill icon' fill/>
                                            ) :
                                            (
                                                <img src={skill.imageUrl} alt="skill icon" className=''/>
                                            ) 
                                        }
                                    </div>
                                    <div className='absolute h-[55px] w-[55px] group-hover:flex hidden items-center justify-center group-hover:bg-white/70 rounded-full'>
                                            <p className=''>{skill.proficiency}%</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-4 justify-items-center gap-y-2'>
                    {
                        lowerHalfSkills.map((skill)=>{
                            
                            return(
                                <div className='border-[grey] border-[1px] rounded-full  group flex items-center relative h-[55px] w-[55px] justify-center'>
                                    <div className='h-[40px] w-[40px] group-hover:grayscale'>
                                        {
                                            skill.name == 'Next Js' ?
                                            (
                                                <Image src={nextJs} alt='skill icon' fill/>
                                            ) :
                                            (
                                                <img src={skill.imageUrl} alt="skill icon" className=''/>
                                            ) 
                                        }
                                    </div>
                                    <div className='absolute h-[55px] w-[55px] group-hover:flex hidden items-center justify-center group-hover:bg-white/70 rounded-full'>
                                            <p className=''>{skill.proficiency}%</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;