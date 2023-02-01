import './NumericItemSelector.css';

import {useState} from "react";

interface IndexTitle {
    index: number;
    title: string;
}

interface SelectorPillProps {
    items: [IndexTitle];
    selectedItem: number;
    setSelectedItem: (index: number) => void;
}

export default function SelectorPill({items, selectedItem, setSelectedItem}: SelectorPillProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {menuOpen && <Popup items={items} setMenuOpen={setMenuOpen} setSelectedItem={setSelectedItem}/>}
            <div className="Pill" onClick={() => setMenuOpen(true)}>
                <div className="Cell">{selectedItem}</div>
                <div className="Spacer"/>
                <div className="Cell">{items.length}</div>
            </div>
        </div>
    );
}


interface PopupProps {
    items: [IndexTitle];
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedItem: (index: number) => void;
}

function Popup({items, setMenuOpen, setSelectedItem}: PopupProps) {
    return (
        <div className="ItemPopup" onClick={() => setMenuOpen(false)}>
            <div className="Text">
            <div className="Options">
                {
                    items.map(item =>
                    <div key={item.index} className="Option" onClick={() => setSelectedItem(item.index)}>
                        <div className="Option-Index">{item.index}</div> <div>{item.title}</div>
                    </div>)
                }
            </div>
                </div>
        </div>
    )
}