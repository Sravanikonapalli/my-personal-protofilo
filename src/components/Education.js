import '../styles/education.css';
import { FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Education = () => {
    return (
        <div className='education-container' id='education'>
            <h1>My <span>Education</span></h1>
            <div className='college-card'>
            <div className='clg-name'>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxR92z-lFbdynlUAC72MKk00yU1Mor7XC3OhwnwHiT7XgDTmg-DSaTxrZk8tcw5KAoVY&usqp=CAU" 
                    alt="mits-icon" 
                    className='icon'
                />
                <h1>MADANAPALLE INSTITUTE OF TECHNOLOGY AND SCIENCE, Madanapalle</h1>
            </div>
                <h2  className='speciliaztion'>Master of Computer Applications (MCA)</h2>
                <a href="https://mits.ac.in/" target="_blank" rel="noopener noreferrer">
                    College Website <span><FaChevronRight size={25}/></span>
                </a>

                <a 
                    href="https://maps.app.goo.gl/a4Vjfv9RZwJTZysM9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-link"
                >
                <IoLocationOutline size={25}/>
                </a>
            </div>

            <div className='college-card'>
            <div className='clg-name'>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2ktBlk8rK8oyTUHnddN6mmohSHQS13T5dA&s" 
                    alt="mits-icon" 
                    className='icon'
                />
                <h1>SHRI GNANAMBIKA DEGREE COLLEGE, Madanapalle</h1>
                </div>
                <h2 className='speciliaztion'>Bacholer of Computer Science (BSc)</h2>

                <a href="https://shrignanambicacollege.edu.in/" target="_blank" rel="noopener noreferrer">
                    College Website <span><FaChevronRight size={25}/></span>
                </a>

                <a 
                    href="https://maps.app.goo.gl/EL3iwiUm6boxwfMi7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-link"
                >
                <IoLocationOutline size={25}/>
                </a>
            </div>

            <div className='college-card'>
            <div className='clg-name'>
                <img 
                    src="https://content3.jdmagicbox.com/comp/madanapalle/b3/9999p8571.8571.140513165442.f2b3/catalogue/krishna-reddy-residential-jr-college-madanapalle-ho-madanapalle-junior-colleges-nsh1yaqtam.jpg" 
                    alt="mits-icon" 
                    className='icon'
                />
                <h1>SHI KRISHNA REDDY SIDHARTHA JUNIOR COLLEGE, Madanapalle</h1>
                </div>
                <h2 className='speciliaztion'>MPC (Mathematics, Physics, and Chemistry)</h2>

                <a href="https://www.justdial.com/Madanapalle/Krishna-Reddy-Residential-JrCollege-Madanapalle-Ho/9999P8571-8571-140513165442-F2B3_BZDET" target="_blank" rel="noopener noreferrer">
                    College Website <span><FaChevronRight size={25}/></span>
                </a>

                <a 
                    href="https://maps.app.goo.gl/osGrbCDDdUQzBJMx9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-link"
                >
                <IoLocationOutline size={25}/>
                </a>
            </div>
            
            <div className='college-card'>
            <div className='clg-name'>
                <img 
                    src="https://pbs.twimg.com/profile_images/1103649795913252866/_HrkhUvn_400x400.png" 
                    alt="mits-icon" 
                    className='icon'
                />
                <h1>Z P HIGH SCHOOL, GATTU</h1>
                </div>
                <h2 className='speciliaztion'>10th Standard  <span>
                <a 
                    href="https://maps.app.goo.gl/VdChUguToWvvDT9F9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-link"
                >
                <IoLocationOutline size={25}/>
                </a>
                </span></h2> 
            </div>
        </div>
    );
}

export default Education;
