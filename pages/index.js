//next image
import Image from "next/image";

//components 
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion';

//variants 
import {fadeIn} from '../variants';
import Link from "next/link";

const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
  {/*text*/}
  <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/60 to-black/10'>
    <div className='text-center flex flex-col justify-center xl:pt-16 xl:text-left h-full container mx-auto'>
      {/*title*/}
      <motion.h1 
      variants={fadeIn ('down', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className='h1'
      >
        Crafting Adaptive Systems <br/>For {''}
        <span className='text-accent'>Evolving Landscapes</span>
      </motion.h1>
      {/*subtitle*/}
      <motion.p 
      variants={fadeIn ('down', 0.3)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className='max-w-xl  xl:max-w-xl mx-auto xl:mx-0 mb-18 xl:mb-16 text-justify'>
      Welcome to my AI-driven world! I'm <span className='text-accent font-semibold' >ARIFUL ISLAM</span> an AI engineer 
      and project manager dedicated to pushing the boundaries of innovation. 
      Join me as we explore the intersection of technology and creativity, where intelligent solutions are crafted to transform challenges into opportunities.
      </motion.p>
      {/* btn */}
      <div className='flex justify-center xl:hidden relative'>
        <ProjectsBtn/>
      </div>
      <motion.div 
      variants={fadeIn ('down', 0.4)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className="hidden xl:flex"
      >
        <ProjectsBtn/>
        <div className="relative top-9  left-20   flex-row-reverse text-4xl group-hover:translate-x-2 transition-all duration-300'">
          <Link href = 'cv of arif.pdf' target= {'_blank'} className="flex items-center bg-red-700 brightness-100  text-white p-2.5 px-6 rounded-lg text-sm font-semibold  hover:bg-white hover:text-accent  border-2 border-solid border-transparent hover:border-black">Download CV</Link>
          {/* inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 */}
        </div> 
        <resume/>

        <resume/>
      </motion.div>
    </div>
  </div>
  
  {/*image */}
  <div className='w-[900px] h-full absolute right-0 bottom-0'>
      {/*bg image*/}
      <div className=' bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
  {/*particles*/}
  <ParticlesContainer/>
  {/*avatar img */}
  <motion.div 
  variants={fadeIn ('down', 0.5)} 
  initial='hidden'
  animate='show' 
  exit='hidden'
  transition={{duration: 1, ease: 'easeInOut'}}
  className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
  >
    <Avatar/>
  </motion.div>
    </div>
  </div>
  );
};

export default Home;

