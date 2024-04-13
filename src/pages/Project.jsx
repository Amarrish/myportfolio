import prjmng from '../assets/project management.jpg'
import chatapp from '../assets/chatapp.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import ommbrulla from '../assets/ombrulla.jpg'
const Project = () => {
  return (
    <>
  <div className='project-container' id="project">
    <h1 id="projectside">Project</h1>

    <div className="cards">
      {
        projects.map((item,index)=>(
          <div key={index} className="containers" data-aos="zoom-out-up" data-aos-duration='1000'>
          <img src={item.image} alt="Avatar" className="image"/>
          <div className="overlay">
          <div className="text">
          <p className='title'>{item.title}</p>
          <p>{item.techused}</p>
          <p>{item.description}</p>
          <div className='d-flex probtn' >
          <button className='btn'><a href={item.github}><i className="fa-brands fa-github fa-bounce"></i></a></button>
          <button className='btn'><a href={item.site}><i className="fa-solid fa-up-right-from-square fa-fade"></i></a></button>
          </div>
          </div>
          </div>
          </div> 

        ))
      }
          

    </div>

  </div>
    </>
  )
}

export default Project







const projects = [
   
    {
        id: 1,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Managing Our Projects and Information with user authentication" ,
        image: prjmng,
        github: "https://github.com/Amarrish/Project-management-mern",
        site: " https://66127baf4a79d19fa1487b38--venerable-marigold-c0156b.netlify.app/",
      },
      {
        id: 2,
        title: "Chat Application",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "The Registered Users can Chat each other. Socket io which enables bidirectional communication between web clients and servers" ,
        image: chatapp,
        github: "https://github.com/Amarrish/Mychatapplication",
        site: "https://6614cba9210c38602e4d9e39--vocal-stardust-65ef3b.netlify.app/",
      },
      {
        id: 3,
        title: "E-Commerce",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Registered Users Can view products and checkout. Also Admin can Add products etc.." ,
        image: ecommerce,
        github: "https://github.com/Amarrish/ecommerce_cloth",
        site: "https://661a1566e487e34ae0cac4b9--serene-duckanoo-b2572e.netlify.app/",
      },
      {
        id: 4,
        title: "Webpage",
        techused: "Reactjs",
        description: "Responsive website" ,
        image: ommbrulla,
        github: "https://github.com/Amarrish/ombrulla_page",
        site: "https://ombrulla-page.vercel.app/",
      },
     
     

]

