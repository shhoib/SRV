import './Banner.scss';
import { IoIosArrowForward ,IoMdClose} from "react-icons/io";


const Banner = () => {
  return (
    <section className='banner'>
        <div className="bannerTexts">
            <p>Home <IoIosArrowForward className='arrow'/> Courses <IoIosArrowForward className='arrow'/> <span>AI-Machine Learning Developer</span></p>
            <h1> AI-Machine Learning Developer</h1>
        </div>
        <img src='./IMG/robo.jpg' alt="" className='bannerIMG'/>
        <div className='bannerBG'></div>
        <div className="close1"><IoMdClose/></div>
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div className="circle"></div>
        <div className="close2"><IoMdClose/></div>
        <div className="close3"><IoMdClose/></div>
    </section>
  )
}

export default Banner