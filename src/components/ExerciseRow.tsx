import './ExerciseRow.css';

import {useState} from "react";

var classNames = require('classnames');

interface Set {
    id: number;
    reps: number;
    weight: number;
}

interface ExerciseRowProps {
    title: string;
    sets: Set[];
    pendingSetId: number;
    setPendingSetId: (id: number) => void;
    handleClickTitle: () => void;
}

export default function ExerciseRow({title, sets, pendingSetId, setPendingSetId, handleClickTitle}: ExerciseRowProps) {
    const [toDoSetIds, setToDoSetIds] = useState(sets.map(set => set.id));
    const [doneIdsStack, setDoneIdsStack] = useState<number[]>([]);
    const [doubleClickWindowOpen, setDoubleClickWindowOpen] = useState(false);
    const [doubleClickTimeoutId, setDoubleClickTimeoutId] = useState<NodeJS.Timeout | number | undefined>();

    const handleExerciseClick = () => {
        if (doubleClickWindowOpen) {
            setDoubleClickWindowOpen(false);

            if (!doubleClickTimeoutId) return;
            clearTimeout(doubleClickTimeoutId);

            if (doneIdsStack.length <= 0) return;
            setPendingSetId(doneIdsStack[doneIdsStack.length-1]);
            setToDoSetIds([doneIdsStack[doneIdsStack.length-1], ...toDoSetIds])
            setDoneIdsStack(prevDoneIds => prevDoneIds.filter(id => id !== doneIdsStack[doneIdsStack.length-1]))

            return
        }

        setDoubleClickWindowOpen(true);

        const timeoutLength = doneIdsStack.length >= 1 ? 300 : 0;

        const timeoutId = setTimeout(() => {
            setDoubleClickWindowOpen(false);

            if (toDoSetIds.length <= 0) {
                return
            }

            if (pendingSetId === toDoSetIds[0]) {
                setPendingSetId(toDoSetIds.length > 1 ? toDoSetIds[1] : -1);
                setDoneIdsStack(prevDoneIdsStack => [...prevDoneIdsStack, pendingSetId]);
                setToDoSetIds(prevToDoSetIds => prevToDoSetIds.filter(setId => setId !== pendingSetId));
                return
            }

            setPendingSetId(toDoSetIds[0]);
            }, timeoutLength);

        setDoubleClickTimeoutId(timeoutId);
    }

    return (
        <div>
            <h3 onClick={handleClickTitle}>
                {title}
            </h3>
            <div className="Sets" onClick={handleExerciseClick}>
                {
                    sets.map(set => {
                        var setClass = classNames({
                            "PendingSet": pendingSetId === set.id,
                            "DoneSet": !toDoSetIds.includes(set.id),
                        });

                        return (
                                <div key={set.id} className={setClass}>
                                {set.reps} reps - {set.weight}kg
                            </div>)
                    })
                }
            </div>
        </div>
    )
}