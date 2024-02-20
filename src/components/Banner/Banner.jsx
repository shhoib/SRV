import './Banner.scss';
import { IoIosArrowForward } from "react-icons/io";


const Banner = () => {
  return (
    <section className='banner'>
        <div className="bannerTexts">
            <p>Home <IoIosArrowForward className='arrow'/> Courses <IoIosArrowForward className='arrow'/> <span>AI-Machine Learning Developer</span></p>
            <h1> AI-Machine Learning Developer</h1>
        </div>
        <img src='./IMG/robo.jpg' alt="" className='bannerIMG'/>
        <div className='bannerBG'></div>
    </section>
  )
}

export default Banner