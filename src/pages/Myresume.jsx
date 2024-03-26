import myphoto1 from '../assets/myphoto1.jpg'
import './Page.css';
import resume from '../assets/AMARRISHMERN.pdf'
import { Col, Row } from 'react-bootstrap';
const Myresume = () => {
  return (
    <>
    <div className="resume-container" id='resume'>
    <h1 id='resumeside'>My resume</h1>

<div className='resume-cover'>
    <div className='resume-content'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
       <div className='resumeimg' data-aos="fade-right" data-aos-duration='1000'>
         <img  src={myphoto1} alt="" />
         <h4>AMARRISH MS</h4>
         <h4>FULLSTACK DEVELOPER</h4>
         </div>
         </Col>
         <Col  xs={12} sm={12} md={6} lg={6} xl={6}>
        <div className='resumepara'  data-aos="fade-left" data-aos-duration='1000'>
        <p>Enthusiastic and detail-oriented MERN stack developer with strong expertise in JavaScript, HTML, and CSS. Proficient inReact.js, Node.js, and MongoDB, with hands-on experience in both frontend and backend development. Proven trackrecord of completing internships and personal projects, showcasing problem-solving skills and adherence to softwaredevelopment best practices. Adept at collaboration and quick adaptation to new technologies. Excellent communicationand teamwork skills.</p>
        <a href={resume} download='AMARRISHMERN.pdf'><button className='btn' type='file'><i className="fa-solid fa-cloud-arrow-down fa-bounce"></i>Download Resume</button></a>
        </div>
        </Col>
        </Row>
    </div>
    </div>
    </div>
    </>
  )
}

export default Myresume