import './Registration.scss';


const Registration = () => {

  const radioData = [
    {
      label : " CSP Vizhinjam",
      text : 'Next Batch April 2024'
    },
    {
      label : " CSP Palayad",
      text : 'Next Batch April 2024'
    },
    {
      label : " CSP Kazhakkoottam",
      text : 'Next Batch April 2024'
    },
    {
      label : " CSP Mananthavaadi",
      text : 'Next Batch April 2024'
    },
    {
      label : " CSP Vizhinjam",
      text : 'Next Batch April 2024'
    },
    {
      label : " CSP Palayad",
      text : 'Next Batch April 2024'
    },
  ]
  return (
    <aside className='registration'>
      <img src="./IMG/play.webp" alt="" />
      <h4>Course Registration</h4>
      <h5>Enter the basic info and let's begin the journey</h5>
      <input type="text" placeholder='Your full name'/>
      <input type="number" placeholder='Mobile Number'/>
      <input type="email" placeholder='Email'/>
      <select className='dropdown'>
        <option value="option1">District</option>
        <option value="option1">Kannur</option>
        <option value="option2">Kozhikode</option>
        <option value="option3">Kochi</option>
      </select>
      <h4>Select CSP</h4>
      {
        radioData.map((radio,i)=>(
          <div className='radio' key={i}>
            <div className='radioAtext'>
            <input type="radio" name="option" className='radioCircle'/>
            <label>{radio.label}</label>
            </div>
            <h6>{radio.text}</h6>
          </div>
        ))
      }
      <button>Register Now</button>
    </aside>
  )
}

export default Registration