import { useState } from 'react';
import './Navbar.scss';
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {

    const tab = [ 'Courses', 'Events', 'Skill Parks', 'About', 'Contact'];

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleMenuOpen=()=>{
        setIsMenuOpened(!isMenuOpened);
    }

  return (
    <nav>
        <img src="./IMG/ASAP.webp" alt="" loading='lazy'/>

        <div className="tabs">
            {
                tab.map((text,i)=>(
                    <h4 key={i}>{text}</h4>
                ))
            }
            <button className='login'>Login</button>
            <button className='getStarted'>Get Started</button>
        </div>
        <RiMenu5Fill className='menuIcon'onClick={handleMenuOpen}/>
        { isMenuOpened && 
          <div className="menu">
            {
                tab.map((text,i)=>(
                    <h4 key={i}>{text}</h4>
                ))
            }
          </div>
        }
    </nav>
  )
}

export default Navbar