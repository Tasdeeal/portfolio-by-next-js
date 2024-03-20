//links 
import Link from "next/link";

//icons 
import {
  RiLinkedinBoxLine,
  RiFacebookLine, 
  RiInstagramLine,
  RiWhatsappLine,  
  RiTwitchLine,  
  RiGitBranchLine
} from 'react-icons/ri';

const Socials = () => {
  return (
     <div className='flex items-center gap-x-5 text-lg'>
        <Link href='https://www.linkedin.com/in/ariful-islam-a934b71b4/' className='hover:text-accent transition-all duration-300'>
          <RiLinkedinBoxLine/>
        </Link>
        <Link href='https://www.facebook.com/tasdeeal/' className='hover:text-accent transition-all duration-300'>
          <RiFacebookLine/>
          </Link>
          <Link href='https://www.instagram.com/da_diatom/' className='hover:text-accent transition-all duration-300'>
          <RiInstagramLine/>
        </Link>
        <Link href= 'https://wa.me/+8801757210124?text=Hello!' className='hover:text-accent transition-all duration-300'>
          <RiWhatsappLine/>
        </Link>
        <Link href='https://twitter.com/tasdeeal" target=' className='hover:text-accent transition-all duration-300'>
          <RiTwitchLine/>
        </Link>
        <Link href={''} className='hover:text-accent transition-all duration-300'>
          <RiGitBranchLine/>
        </Link>
  </div>
  );
};

export default Socials;
