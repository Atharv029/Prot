import React from 'react';

const About = () => {
    return (
        <div className='container h-full absolute left-0 top-full'>
            <div className="absolute top-[25%] w-[43%] left-[5%] h-[138%] rounded-xl object-fill" id='Abouts'>
                <img src="https://i.postimg.cc/dQzYHfqQ/photo-6253519353194594062-y-removebg-preview-3.png" alt="profile photo" className='bg-[#ebecf1] border rounded-xl h-[89%]' />
            </div>
           
            <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orange dot" className='logo3' />
            <div className="absolute top-[31%] left-[53.5%] text-[1.4rem] font-Jost" id='block'>About Me</div>
            <div className="absolute top-[38%] left-[50.8%] text-[3rem] font-bold font-Jost">Your Vision, My Web Expertise</div>
            <div className="absolute top-[52%] left-[51.5%] w-[40%] text-[1.3rem] font-Jost text-[#606060]">
                Hi, I'm currently pursuing a BSc in IT and have achieved a CGPA of 9 in my first year. Over the past six months, I've been passionately developing websites, honing my skills in front-end and back-end technologies. My goal is to create innovative and user-friendly digital experiences. I'm eager to apply my knowledge and grow in the tech industry. Let's connect and build something amazing together!
            </div>
            <div className="project">
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconOne.png" loading='lazy' alt="checkbox" className='pro w-[4.8%] absolute top-[92%]' />
                <p className="absolute top-[97.2%] left-[56.5%] font-[500] text-[1.5rem]">Complete Project</p>
                <p className="absolute top-[92.2%] left-[56.5%] font-[700] text-[1.6rem] text-[#ff6b00]">20</p>
                <p className="absolute top-[91.8%] left-[58.5%] font-extrabold text-[1.6rem] text-[#ff6b00]">+</p>
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconTwo.png" loading='lazy' alt="checkbox" className='absolute w-[4.8%] top-[92%] right-[19.1%]' />
                <p className="absolute top-[97.2%] left-[81.5%] font-[500] text-[1.5rem]">Year of experience</p>
                <p className="absolute top-[92.2%] left-[81.5%] font-[700] text-[1.6rem] text-[#ff6b00]">1</p>
                <p className="absolute top-[91.8%] left-[82.5%] font-[1000] text-[1.6rem] text-[#ff6b00]">+</p>
            </div>
            <div className="advantages">
                <div className="wait">
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[115%] right-[46.4%] w-[2.5%]' />
                    <p className="absolute top-[115.7%] right-[28.4%] text-xl font-Jost">Work simple and clean design</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[125%] right-[46.4%] w-[2.5%]' />
                    <p className="absolute top-[125.6%] right-[26%] text-xl font-Jost">New idea and user friendly design</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[115%] right-[21.4%] w-[2.5%]' />
                    <p className="absolute top-[125.5%] right-[9.3%] text-xl font-Jost">Unlimited Revisions</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[125%] right-[21.4%] w-[2.5%]' />
                    <p className="absolute top-[115.5%] right-[8.1%] text-xl font-Jost">Web Design Full stack</p>
                </div>
                <a href="https://online.publuu.com/556425/1250886" target="_blank">
                    <button className='absolute top-[140%] left-[53.5%] bg-[#ff6b00] text-white border w-44 h-12 rounded-xl font-medium text-lg  font-Jost' id='hide'>Download My CV</button>
                </a>
            </div>
        </div>
    );
}

export default About;
