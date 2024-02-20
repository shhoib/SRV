import './Navbar.scss';


const Navbar = () => {

    const tab = [ 'Courses', 'Events', 'Skill Parks', 'About', 'Contact'];

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
    </nav>
  )
}

export default Navbar