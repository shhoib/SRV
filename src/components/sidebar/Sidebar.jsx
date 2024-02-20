import './Sidebar.scss';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { RiUserFollowLine } from "react-icons/ri";
import { ImFeed } from "react-icons/im";
import { PiGraduationCap } from "react-icons/pi";
import { PiDatabase } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";



const Sidebar = () => {

    const sideTexts = [
        {
            icon : <MdOutlineRemoveRedEye/>,
            text : 'Overview'
        },
        {
            icon : <LuListTodo/>,
            text : 'Syllabus'
        },
        {
            icon : <RiUserFollowLine/>,
            text : 'Eligibility'
        },
        {
            icon : <ImFeed/>,
            text : 'Course Fee'
        },
        {
            icon : <PiGraduationCap/>,
            text : 'Scholarship'
        },
        {
            icon : <PiDatabase/>,
            text : 'Skill Loan'
        },
        {
            icon : <BsQuestionCircle/>,
            text : `FAQ's`
        },
    ]
  return (
    <aside>
        {
            sideTexts.map((text,i)=>(
                <div className="currentTab" key={i}>
                  <h6>{text.icon}</h6>
                 <p>{text.text}</p>
                </div>
            ))
        }
    </aside>
  )
}

export default Sidebar