import './components.css';



const Cards = () => {
  return (
    <div className='card-container'>
    <p>Fronted Technologies : <i className="fa-brands fa-react fa-spin react"></i>REACT JS & <i className="fa-brands fa-angular angular"></i>ANGULAR</p>
    <p>Backend : <i className="fa-brands fa-node-js node"></i> NODE JS & EXPRESS JS</p>
    <p>Database : MongoDB</p>
    <p>Others : MERN STACK & MEAN STACK</p>
    <p>Tools : Git</p>
    <p>UI Frameworks : MUI, BOOTSTRAP & TAILWIND CSS</p>
        </div>

       
 
  )
}

export default Cards


{/* <div className='cards' data-aos="fade-up" >
        <Card style={{ width: '190px',height:'230px' }}>
    <Card.Img className='img-fluid' style={{ width: '100%',height:'80%' }} variant="top" src={nodeimg} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    </Card.Body>
  </Card>
        </div> */}