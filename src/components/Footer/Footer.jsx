import { BsLinkedin, BsGithub, BsFillBriefcaseFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='text-white px-8 md:px-10 lg:px-12 2xl:px-[68px] py-8 mt-6'>
            <div className='flex flex-wrap justify-between opacity-80'>
                <ul className='flex gap-6'>
                    <li>
                        <a href="https://www.linkedin.com/in/marco-torres-2a54501ba/" target="_blank" >
                            <BsLinkedin size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/spymarkoo" target="_blank">
                            <BsGithub size={16} />
                        </a>
                    </li>
                    
                </ul>
                <div>
                    <p className='text-xs font-medium'>Hecho por Marco Torres</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
