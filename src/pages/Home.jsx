

import './Page.css';
import Navbar from '../components/Navbar'
import Typewriter from "typewriter-effect";



const Home = () => {
  
  return (
    <div className="home-container" id='home'>
      
      <div className='nav-container' id='homeside'>
      <Navbar/>
      </div>

      <div className='mycontent'>

        <div className='blur-bg'>
          <h1 className=''>
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(`Welcomes You`)   
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(` I am <span style='color:#daa520; border: 1px solid #ffae18;'>Amarrish MS </span>`)
                        .pauseFor(1000)
                        .typeString(`<br />MEA<span style='color: #daa520'>(R)</span>N STACK DEVELOPER</h1>`)
                        .start();
                }}
                options={{
                  innerHTML: true,
              }}
            />
           
           
           <br /></h1>
        
          <h6 className=''>Welcome to my portfolio! I m a MEARN stack developer passionate about crafting robust and user-friendly web applications. With proficiency in MongoDB for database management, Express.js for server-side development, React.js for building dynamic user interfaces, and Node.js for scalable backend solutions, I specialize in creating modern and responsive web experiences. From e-commerce platforms to social networking sites, I bring creativity and efficiency to every project. Explore my portfolio to see examples of my work and lets collaborate on bringing your ideas to life!</h6>
        </div>

        
      </div>
    </div>
  );
}

export default Home;



{/* <h1>Portfolio</h1>
<ul className='list-container'>
  <li className='list-elements'><a href="">Home</a></li>
  <li className='list-elements'><a href="">Skill</a></li>
  <li className='list-elements'><a href="">Projects</a></li>
  <li className='list-elements'><a href="">Resume</a></li>
  <li className='list-elements'><a href="">Contact</a></li>
</ul> */}