import { motion } from 'framer-motion'
import { ImFacebook } from 'react-icons/im'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Navbar = () => {
  return (
    <div  className='text-grey flex justify-between items-center z-10 fixed left-0 top-2 w-full px-8 md:px-24 md:text-lg xl:px-48'>
        <motion.div 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, ease:'easeInOut'}}
        className='flex items-center space-x-3'>
            <ImFacebook/>
            <ImLinkedin />
            <FaGithub />
            <BsInstagram />
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, ease:'easeInOut'}}
        className='flex items-center space-x-3'>
            <GrMail/>
            <p className='font-medium'>Get in touch</p>
        </motion.div>
    </div>
  )
}

export default Navbar
