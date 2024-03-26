import './Page.css'

const Contacts = () => {
  return (
    <div className="d-flex justify-content-between bg-dark text-white " id="contact">
        <div id="contactside">
            <p>amarrishms732@gmail.com <a href="mailto:amarrishs732@gmail.com"><button className="btn bg-warning">Send email <i className="fa-regular fa-envelope fa-fade" style={{color:'#ffbb00'}}></i></button></a></p>
            <p><i className="fa-solid fa-phone"></i> 9605174695</p>
            <p>KERALA, PALAKKAD - 679313</p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/amarrish-ms732">linked in</a></p>
        </div>
        <div>
            <p>My Location:</p>
            <div className="mapouter map"><div className="gmap_canvas"><iframe className="gmap_iframe"  src="https://maps.google.com/maps?width=310&amp;height=210&amp;hl=en&amp;q=ongallur&amp;t=h&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href=""> </a></div></div>
        </div>
    </div>
  )
}

export default Contacts