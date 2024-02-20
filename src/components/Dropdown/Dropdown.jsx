import { useState } from 'react';
import './Dropdown.scss';
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";


const Dropdown = ({ syllabusData }) => {
    const [openStates, setOpenStates] = useState(new Array(syllabusData.length).fill(false));

    const handleOpen = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <>
            {syllabusData.map((value, i) => (
                <div className={` dropdown ${!openStates[i] ? 'notOpened' : ''}`} key={i}>
                    <div className={`header ${!openStates[i] ? 'notOpened' : ''}`}>
                        <h6>{value.header}</h6>
                        {openStates[i] ? (
                            <AiOutlineMinus onClick={() => handleOpen(i)} />
                        ) : (
                            <GoPlus onClick={() => handleOpen(i)} />
                        )}
                    </div>
                    {openStates[i] && (
                        <div className="body">
                            <div className="tickContainer"><IoMdCheckmark className='tick' /></div>
                            <h6>{value.body}</h6>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Dropdown;
