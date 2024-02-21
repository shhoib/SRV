import './Footer.scss';
import { MdEmail,MdArrowForwardIos } from "react-icons/md";
import { FaPhoneVolume,FaMobileButton } from "react-icons/fa6";
import { FaFacebookF,FaLinkedinIn,FaPinterestP,FaYoutube   } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="places">
        <div className="ours">
          <div className="solutions">
            <h5>Our Solutions</h5>
            <h6>Full time jobs</h6>
            <h6>Part time jobs</h6>
            <h6>Paid Internship</h6>
            <h6>Free Internship</h6>
          </div>
          <div className="locations">
            <h5>Our Locations</h5>
            <h6>CSP Chathanur</h6>
            <h6>CSP Cheriya Kapoor</h6>
            <h6>CSP Kalamassery</h6>
            <h6>CSP Kasarkod</h6>
          </div>
        </div>

        <div className="WholeLocations">
          <div className="first">
            <h6>CSP Kazhakkoottam</h6>
            <h6>CSP Kulakkatta</h6>
            <h6>CSP Kunnamkulam</h6>
            <h6>CSP Kunnamangalam</h6>
          </div>
          <div className="second">
            <h6>CSP Mananthavaady</h6>
            <h6>CSP Lacky</h6>
            <h6>CSP Palayad</h6>
            <h6>CSP Pambad</h6>
          </div>
          <div className="first">
            <h6>CSP Vizhinjam</h6>
            <h6>CSP Pandikkad</h6>
            <h6>CSP Perumbavoor</h6>
            <h6>CSP Thavanur</h6>
          </div>
        </div>
      </div>

        <div className="supportContainer">
          <div className="govt">
            <img src="./IMG/ASAP.webp" alt="" loading='lazy'/>
            <img src="./IMG/govt.webp" alt="" loading='lazy'/>
            <div className="govFooter">A GOVERNMENT OF KERALA COMPANY</div>
          </div>

          <div className="support">
            <h5>Customer Support</h5>
            <div className="mailANDnumber">
              <div style={{display:'flex'}}>
               <MdEmail className='icon'/>
               <h6>info@asapkerala.gov.in</h6>
              </div>
              <div style={{display:'flex'}}>
               <FaPhoneVolume className='icon'/>
               <h6>0471 2772500</h6>
              </div>
            </div>

            <div className="number">
            <div style={{display:'flex'}}>
                <FaMobileButton className='icon'/>
                <h6>+91 9495999623</h6>
            </div>
            <div style={{display:'flex'}}>
                <FaMobileButton className='icon'/>
                <h6>+91 9495999709</h6>
            </div>
            </div>
            <div className="socialIcons">
                <p><FaFacebookF/></p>
                <p><IoLogoInstagram/></p>
                <p><RiTwitterXFill/></p>
                <p><FaLinkedinIn/></p>
                <p><FaPinterestP /></p>
                <p><FaYoutube /></p>
            </div>
          </div>

          <div className="update">
            <h5>Stay Updated</h5>
            <h6>We will send you on the updates in the latest happenings of ASAP.Subscribe and stay connected with us</h6>
            <div className="inputContainer">
              <input type="text" placeholder='Enter Your Email Id'/>
              <button><MdArrowForwardIos/></button>
            </div>
          </div>
        </div>

        <hr className='hr'/>

        <div className="contactContainer">
          <div className="contact">
            <h6>Contact Us <span>Partner With Us</span><span>Pricing</span><span>Testimonials</span><span>About Us</span><span>Carrers</span></h6>
            <h6>FAQ's<span>Case Studies</span><span>Blogs</span><span>News & Events</span><span>Services</span></h6>
          </div>
            <h6 className='trademark'>All trademarks, logos and names are properties of their respective owners. Unauthorized Copying, Usage, Publishing of our website contents prohibited.
             Use of this Web site constitutes acceptance of the our User Agreement, Cancellation & Refund and Privacy Policy.</h6>
        </div>

        <hr className='hr'/>
        <div className="copyrightContainer">
          <div className="copyright">
            <h6>© 2024 ASAP Community Skill park. All right reserved</h6>
            <h6>Powered by SRV InfoTech</h6>
          </div>
           <h6>Terms & conditions <span>Privacy Policy</span><span>Refund & cancellation</span><span>Disclaime</span><span>Site Map</span></h6>
        </div>
    </footer>
  )
}

export default Footer