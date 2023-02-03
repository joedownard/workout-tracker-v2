import './QuickEdit.css';

import { useState } from 'react';

interface QuickEditProps {
    changeReps: (change: number) => void;
    changeWeight: (change: number) => void;
}

export default function QuickEdit({changeReps, changeWeight}: QuickEditProps) {
    const [holdInterval, setHoldInterval] = useState<number | undefined>()

    const handleClickDown = (e, changeFunc) => {
        changeFunc()

        const id = setInterval(() => changeFunc(), 200);
        setHoldInterval(id);
    }

    const handleClickUp = () => {
        if (holdInterval) {
            clearInterval(holdInterval)
            setHoldInterval(undefined)
        }
    }

    return (
        <div>
            <h3>Quick Edit</h3>
            <div className="ModifierContainer">
                <div className="Title">Reps</div>
                <div className="Modifiers">
                    <span onTouchStart={(e) => handleClickDown(e, () => changeReps(1))} onTouchEnd={handleClickUp}>+</span>
                    <span onTouchStart={(e) => handleClickDown(e, () => changeReps(-1))} onTouchEnd={handleClickUp}>-</span>
                </div>
            </div>
            <div className="ModifierContainer">
                <div className="Title">Weight</div>
                <div className="Modifiers">
                    <span onTouchStart={(e) => handleClickDown(e, () => changeWeight(0.5))} onTouchEnd={handleClickUp}>+</span>
                    <span onTouchStart={(e) => handleClickDown(e, () => changeWeight(-0.5))} onTouchEnd={handleClickUp}>-</span>
                </div>
            </div>
        </div>
    )
}
