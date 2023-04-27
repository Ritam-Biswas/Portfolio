import { FaGithub } from 'react-icons/fa'
import { RiCodeBoxFill } from 'react-icons/ri'

const ProjectCard = ({project}) => {
    return(
        <div className=" px-4 py-8 border-grey border-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] min-w-full mr-0 md:min-w-[49%] md:mr-[1%] snap-center lg:min-w-[32%] lg:mr-[2%]">
            <div className="flex justify-center mb-4">
                <img src={project.imageUrl} alt='project icon' />
            </div>
            <div>
                <h3 className="text-[22px]">{project.category}</h3>
                <p className="text-[18px]">{project.tittle}</p>
                <div className="flex w-[40%] justify-between my-2">
                    {
                        project.icons.map((icon)=>{
                            return <img src={icon.imageUrl} alt={icon.name}/>
                        })
                    }
                </div>
                <ul className="list-disc text-sm opacity-80 ml-5">
                    {
                        project.descriptions.map((description)=>{
                            return <li>{description.text}</li>
                        })
                    }
                </ul>
                <div className='flex justify-center text-2xl mt-4'>
                    <FaGithub className='mr-2'/>
                    <RiCodeBoxFill/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;