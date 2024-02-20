import './Card.scss';
import { HiMiniCalendarDays } from "react-icons/hi2";
import { GoClock } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";


const Card = () => {

    const cardData = [
        {
           img : './IMG/digitalMarket.webp' ,
           text : 'Digital Marketing Workshops',
           date : '16 feb 2024',
           duration : '2 months'
        },
        {
           img : './IMG/BeautyTherapist.webp' ,
           text : 'Assistant Beauty Therapist',
           date : '20 feb 2024',
           duration : '20 days'
        },
        {
           img : './IMG/Rocket.webp' ,
           text : 'Career Developement Workshop',
           date : '5 feb 2024',
           duration : '2 days'
        },
        {
           img : './IMG/drone.webp' ,
           text : 'Small Category Drone Pilot Training',
           date : '2 feb 2024',
           duration : '10 days'
        },
    ]
  return (
    <section >
        <h1 className='suggested'>Suggested Course in IT-ITES</h1>

        <div className="cards">
        { cardData.map((value,i)=>(
            <div className="card" key={i}>
                <img src={value.img} alt="" loading='lazy'/>

              <div className="textsContainer">
                <h6 className='cardText'>{value.text}</h6>
               <div className="dates">              
                <div className="date">
                    <h6 className='dateIcon'><HiMiniCalendarDays/></h6>
                    <h6>{value.date}</h6>
                </div>
                <div className="duration">
                    <h6 className='dateIcon'><GoClock/></h6>
                    <h6>{value.duration}</h6>
                 </div>
                </div>
                </div>
            </div>
        ))}
     </div>

     <div className="downloadContainer">
        <img src="./IMG/phone.webp" alt="" />
        <div className="download">
            <h1>Download Our App</h1>
            <h5>It's time to discover what you've been missing. <br/> Download our app and see for yourself</h5>

            <div className="features">
            <div className="shieldIcon"> <IoMdCheckmark/></div>
            <h6>Easy to use</h6>
            <div className="shieldIcon"> <IoMdCheckmark/></div>
            <h6>24 hours Support</h6>
            <div className="shieldIcon"> <IoMdCheckmark/></div>
            <h6>User Friendly</h6>
            </div>
            <img src="./IMG/dwnld.webp" alt="" loading='lazy'/>
        </div>
     </div>

    </section>
  )
}

export default Card