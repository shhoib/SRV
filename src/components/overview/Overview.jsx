import './Overview.scss';
import { GoClock } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { RiUserFollowLine } from "react-icons/ri";
import Dropdown from '../Dropdown/Dropdown';
import { LuWallet } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";


const Overview = () => {

  const syllabusData = [
    {
      header : 'FOUNDATION FOR MACHINE LEARNING',
      body : 'Linear Algebra , Random processes and optimisation tachniques for macine learning'
    },
    {
      header : 'MACHINE LEARNING TECHNIQUES',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
    {
      header : 'PROBABILISTIC AND STATISTICAL METHODS FOR LEARNING',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
    {
      header : 'DEEP LEARNING',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
    {
      header : 'PROJECT',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
  ]

  const FAQData = [
    {
      header : 'Who is the certifying body of the course',
      body : 'The course is certified by IIT Palakkad'
    },
    {
      header : 'Is placement assistance provided on completion',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
    {
      header : 'What are the class timings?',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
    {
      header : 'Contact person',
      body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime autem vitae quod ea totam iste quo praesenti.'
    },
  ]

  const installmentDetails = [
    'First installment - 7500 (At the time of registration',
    'Second installment - 32500 (Before class commencement)',
    'Third installment - 3500 (on completion of 300 hours of the course'
  ]

  const scholarshipDetails = [
    'Candidates from SC/ST community',
    'Candidated from the Fisherman community',
    'Candidated from the Transgender community',
    'Women candidates from BPL Families',
    'Women candidates from single Parent Families',
  ]
  return (
    <section className='overviewSection'>
        <h2>Overview</h2>
      <div className="courseDetails">
           
           <div className='courseData'>

            <div className='insideData1'>
               <GoClock className='icon'/>
             <div>
               <p className='head'>Duration</p>
               <h4>720 Hours</h4>
             </div>
            </div>

            <div className='insideData2'>
               <HiOutlineVideoCamera className='icon'/>
             <div>
               <p className='head'>Course Mode</p>
               <h4>Offline</h4>
             </div>
            </div>
           </div>

           <div className='eligibility'>
               <RiUserFollowLine className='icon'/>
             <div>
               <p className='head'>Eligibility</p>
               <h4>Graduate, prefarably in science, CS, IT and EC Streams</h4>
             </div>
            </div>
           
           <p className='partner'>Training Partner</p>
           <img src="./IMG/ASAP.webp" alt="" loading='lazy' className='asapIMG'/>
           <img src="./IMG/curvelogics.webp" alt="" loading='lazy' />

           <p className='partner'>Certification Partner</p>
           <img src="./IMG/IIT.webp" alt="" loading='lazy'/>
           <img src="./IMG/NCVET.webp" alt="" loading='lazy'/>
           <img src="./IMG/L&T.webp" alt="" loading='lazy'/>
      </div>

      <h6 className='ASAPDetails'>Additional Skill Acquisition Programme (ASAP) Kerala is a Section-8 Company of the Department of Higher Education, Government of Kerala, that focusses on skilling students and the general community to enhance their employability.
        Instituted in 2012, ASAP Kerala transitioned to a company under the Companies Act, 2013, in 2021.<br/>
       With nearly a decade of service, we at ASAP Kerala have become a premier government ed Tech company, building integrated learning and talent management solutions, ASAP Kerala has nearly become synonymous with skilling, upskilling and reskilling in corporate and academic domains, by offering 150+ contemporary courses in 19 domains.
       </h6>

       <h1>Syllabus</h1>

        <Dropdown syllabusData={syllabusData}/>

        <h1>Course Fee</h1>
        <div className="walletContainer">
          <LuWallet className='wallet'/>
          <div className="VR"></div>
          <div className="Amounts">
            <h6>Total Amount</h6>
            <h5>INR 75,000</h5>
          </div>
        </div>

        <h3>Installment Plan</h3>

        {installmentDetails.map((installment,i)=>(
          <div className="installment" key={i}>
            <div className="shieldIcon"> <IoMdCheckmark/></div>
            <h6>{installment}</h6>
          </div>
        ))}

        <h1 className='scholarshipText'>Scholarship</h1>

        {scholarshipDetails.map((value,i)=>(
          <div className="scholarship" key={i}>
            <div className="tickContainer"><IoMdCheckmark className='tick' /></div>
            <h6>{value}</h6>
          </div>
        ))}

        <h6 className='feesOffer'>The Scholarship support is limited to 70% of the course fees of 20000 <br/> whichever is lesser </h6>

        <h1>Skill Loan</h1>
        <h5 className='loanText'>Below funding agencies are providing skill loan for this course</h5>
        <div className="bankContainer">

          <div>
          <div className="canara"></div>
          <h6 className='bankName'>Canara Bank</h6>
          </div>

          <div>
          <div className="SBI"></div>
          <h6 className='bankName'>State Bank Of India</h6>
          </div>

          <div>
           <div className="KSFE"></div>
           <h6 className='bankName'>KSFE</h6>
          </div>
          </div>

          <h1 className='frequently'>Frequently asked Questions</h1>
          <Dropdown syllabusData={FAQData}/>
    </section>
  )
}

export default Overview;