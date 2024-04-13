import './Page.css';
import nodeimg from '../assets/nodejs.png'
import reactimg from '../assets/reactjs.png'
import exrepressimg from '../assets/express js.png'
import mongodbimg from '../assets/MongoDB_Logo.jpg'
import angularimg from '../assets/Angular.png'
import htmlimg from '../assets/HTML55.png'
import jsimg from '../assets/JavaScript-Logo.png'
import cssimg from '../assets/cssimg.png'
import bootstrapimg from '../assets/bootstrap.png'
import tailimg from '../assets/tailwind.png'
import Marquee from "react-fast-marquee";
import Cards from '../components/Cards';
import Side from './Side';



const Skills = () => {
  return (
    <>
  
    <div className='skill-container' id='skill'>
    <div className='d-flex sides' id='skillside'>
      <h1>Skill</h1>
      <div><Side/></div>
      </div>
      <Marquee direction='right' className='img-section'>
        
          <div className='img-div'><img src={nodeimg} alt="Node.js" /></div>
          <div className='img-div'><img src={reactimg} alt="React.js" /></div>
          <div className='img-div'><img src={exrepressimg} alt="Express.js" /></div>
          <div className='img-div'><img src={mongodbimg} alt="MongoDB" /></div>
          <div className='img-div'><img src={angularimg} alt="Angular" /></div>
          <div className='img-div'><img src={htmlimg} alt="HTML5" /></div>
          <div className='img-div'><img src={jsimg} alt="JavaScript" /></div>
          <div className='img-div'><img src={cssimg} alt="CSS3" /></div>
          <div className='img-div'><img src={bootstrapimg} alt="Bootstrap" /></div>
          <div className='img-div'><img src={tailimg} alt="Tailwind CSS" /></div>
        
      </Marquee>
     
      <div>
        <Cards/>
      </div>
      
    </div>
   
    </>
  );
}

export default Skills;



