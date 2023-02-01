import './QuickEdit.css';

interface QuickEditProps {
    changeReps: (change: number) => void;
    changeWeight: (change: number) => void;
}

export default function QuickEdit({changeReps, changeWeight}: QuickEditProps) {
    return (
        <div>
            <h3>Quick Edit</h3>
            <div className="ModifierContainer">
                <div className="Title">Reps</div>
                <div className="Modifiers">
                    <span onClick={() => changeReps(0.5)}>+</span>
                    <span onClick={() => changeReps(-0.5)}>-</span>
                </div>
            </div>
            <div className="ModifierContainer">
                <div className="Title">Weight</div>
                <div className="Modifiers">
                    <span onClick={() => changeWeight(0.5)}>+</span>
                    <span onClick={() => changeWeight(-0.5)}>-</span>
                </div>
            </div>
        </div>
    )
}
