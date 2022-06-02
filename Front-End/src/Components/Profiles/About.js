// import '../NavBar.css';
import FellowData from "./FellowData";
import Profile from "./Profile";
import './About.css';

const About = () => {
    return (
        <div className='body'>
            <div className='about'>
                <p className='sharity'><span className='blue-text'>Sharity App</span></p>

                <p className='paragraph'><span className='blue-text'>Project Description:</span>  create a Full-Stack E-Commerce Application</p>

                <p className='paragraph2'><span className='blue-text'>Ultimate Goal:</span>  practice working in collaboration as a team</p>

                <p className='our-team'>Our Team</p>
            </div>

            {FellowData.map((fellow) => {return (<Profile data={fellow} key={fellow.id}/>)})}

        </div>
    );
};

export default About; 