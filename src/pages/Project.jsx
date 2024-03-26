


const Project = () => {
  return (
    <>
  <div className='project-container' id="project">
    <h1 id="projectside">Project</h1>

    <div className="cards">
      {
        projects.map((item,index)=>(
          <div key={index} className="containers" data-aos="zoom-out-up" data-aos-duration='1000'>
          <img src="https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg" alt="Avatar" className="image"/>
          <div className="overlay">
          <div className="text">
          <p>{item.techused}</p>
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
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 2,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 3,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 4,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 5,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 6,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
      {
        id: 7,
        title: "Project Management",
        techused: "Reactjs, MongoDB, Expressjs, Nodejs",
        description: "Your perfect pack for everyday use and walks in the forest." ,
        image: "https://xdfile.com/wp-content/uploads/2019/10/bookstore-application-ui-free-kit-adobe-xd-n7.jpg",
        github: "https://github.com/Amarrish/Bookstore",
        site: "https://book-storefontend.vercel.app/",
      },
     

]

