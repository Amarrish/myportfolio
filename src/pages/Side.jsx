

const Side = () => {
  return (
    <div className="side">
        <ul>
          <li> <a href="#homeside"><i className="fa-solid fa-house-circle-check"></i></a></li>
            <li><a href="#skillside"><i id="skill" className="fa-solid fa-laptop"></i></a></li>
            <li><a href="#resumeside"><i className="fa-regular fa-user"></i></a></li>
            <li><a href="#projectside"><i className="fa-solid fa-list-check"></i></a></li>
            <li><a href="#contactside"><i className="fa-solid fa-address-card"></i></a></li>
            <li><a aria-label="Chat on WhatsApp" href="https://wa.me/919605174695"><i className="fa-brands fa-whatsapp"> </i> </a></li>
        </ul>
    </div>
  )
}

export default Side