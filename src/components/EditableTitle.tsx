import './EditableTitle.css';

import {BsCheckSquareFill, BsXSquareFill} from 'react-icons/bs'
import {IconContext} from "react-icons";

import {useState, useRef} from "react";

interface EditableTitleProps {
    title: string;
    setTitle: (newTitle: string) => void;
}

export default function EditableTitle({title, setTitle}: EditableTitleProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            {modalOpen && <Popup title={title} setTitle={setTitle} setModalOpen={setModalOpen}/>}
            <h2 onClick={() => setModalOpen(true)}>{title}</h2>
        </>
    )
}

interface PopupProps {
    title: string;
    setTitle: (title: string) => void;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Popup({title, setTitle, setModalOpen}: PopupProps) {
    const initialTitle = useRef(title);

    const cancel = () => {
        setTitle(initialTitle.current);
        setModalOpen(false);
    }

    return (
        <div className="Popup">
            <textarea value={title} onChange={(evt) => setTitle(evt.target.value)}/>
            <div>
                <IconContext.Provider value={{color: "green", size: "50"}}>
                    <BsCheckSquareFill onClick={() => setModalOpen(false)}/>
                </IconContext.Provider>
                <IconContext.Provider value={{color: "red", size: "50"}}>
                    <BsXSquareFill onClick={cancel}/>
                </IconContext.Provider>
            </div>
        </div>
    )
}