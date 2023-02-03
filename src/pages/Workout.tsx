import NumericItemSelector from '../components/NumericItemSelector.tsx';
import EditableTitle from '../components/EditableTitle.tsx';
import Timer from '../components/Timer.tsx';
import ExerciseRow from '../components/ExerciseRow.tsx';
import QuickEdit from '../components/QuickEdit.tsx';

import {useState, useEffect} from "react";
import './Workout.css';

export default function Workout() {
    const [day, setDay] = useState<number>(1);

    const [titleMap, setTitleMap] = useState({
        1: "Squat, Triceps, DB Press, Lat Raise",
        2: "Deadlift, Pullover, Face Pulls, Curls",
        3: "Shoulder Press, Squat, Triceps, DB Press",
        4: "Bent Over Row, Pullover, Good Morning, Curl",
        5: "Bench, Lat Raise, Split Squat, Triceps",
        6: "Bent Over Row, Romanian, Pullover, Curl",
    })

    const [idCounter, setIdCounter] = useState(107);

    const [exercises, setExercises] = useState({
        1: [{
            id: 0,
            title: "Back Squat",
            sets: [{id: 1, reps: 5, weight: 25}, {id: 2, reps: 5, weight: 30}, {id: 3, reps: 5, weight: 30}]
        }, {
            id: 4,
            title: "Tricep Skullcrusher",
            sets: [{id: 5, reps: 5, weight: 25}, {id: 6, reps: 5, weight: 30}, {id: 7, reps: 5, weight: 30}]
        }, {
            id: 8,
            title: "DB Incline Press",
            sets: [{id: 9, reps: 5, weight: 25}, {id: 10, reps: 5, weight: 30}, {id: 11, reps: 5, weight: 30}]
        }, {
            id: 12,
            title: "DB Lat Raise",
            sets: [{id: 13, reps: 5, weight: 25}, {id: 14, reps: 5, weight: 30}, {id: 15, reps: 5, weight: 30}]
        }],
        2: [{
            id: 16,
            title: "Deadlift",
            sets: [{id: 17, reps: 5, weight: 25}, {id: 18, reps: 5, weight: 30}, {id: 19, reps: 5, weight: 30}]
        }, {
            id: 20,
            title: "DB Pullover",
            sets: [{id: 21, reps: 5, weight: 25}, {id: 22, reps: 5, weight: 30}, {id: 23, reps: 5, weight: 30}]
        }, {
            id: 24,
            title: "Sitting Face Pulls",
            sets: [{id: 25, reps: 5, weight: 25}, {id: 26, reps: 5, weight: 30}, {id: 27, reps: 5, weight: 30}]
        }, {
            id: 28,
            title: "Handles Bicep Curl",
            sets: [{id: 29, reps: 5, weight: 25}, {id: 30, reps: 5, weight: 30}, {id: 31, reps: 5, weight: 30}]
        }, {
            id: 32,
            title: "Crunch",
            sets: [{id: 33, reps: 5, weight: 25}, {id: 34, reps: 5, weight: 30}, {id: 35, reps: 5, weight: 30}]
        }],
        3: [{
            id: 36,
            title: "Shoulder Press",
            sets: [{id: 37, reps: 5, weight: 25}, {id: 38, reps: 5, weight: 30}, {id: 39, reps: 5, weight: 30}]
        }, {
            id: 40,
            title: "Back Squat",
            sets: [{id: 41, reps: 5, weight: 25}, {id: 42, reps: 5, weight: 30}, {id: 43, reps: 5, weight: 30}]
        }, {
            id: 44,
            title: "Overhead Tricep Push",
            sets: [{id: 45, reps: 5, weight: 25}, {id: 46, reps: 5, weight: 30}, {id: 47, reps: 5, weight: 30}]
        }, {
            id: 48,
            title: "DB Press",
            sets: [{id: 49, reps: 5, weight: 25}, {id: 50, reps: 5, weight: 30}, {id: 51, reps: 5, weight: 30}]
        }],
        4: [{
            id: 52,
            title: "Bent Over Row",
            sets: [{id: 53, reps: 5, weight: 25}, {id: 54, reps: 5, weight: 30}, {id: 55, reps: 5, weight: 30}]
        }, {
            id: 56,
            title: "DB Pullover",
            sets: [{id: 57, reps: 5, weight: 25}, {id: 58, reps: 5, weight: 30}, {id: 59, reps: 5, weight: 30}]
        }, {
            id: 60,
            title: "Good Morning",
            sets: [{id: 61, reps: 5, weight: 25}, {id: 62, reps: 5, weight: 30}, {id: 63, reps: 5, weight: 30}]
        }, {
            id: 64,
            title: "Bar Curl",
            sets: [{id: 65, reps: 5, weight: 25}, {id: 66, reps: 5, weight: 30}, {id: 67, reps: 5, weight: 30}]
        }, {
            id: 68,
            title: "Crunch",
            sets: [{id: 69, reps: 5, weight: 25}, {id: 70, reps: 5, weight: 30}, {id: 71, reps: 5, weight: 30}]
        }],
        5: [{
            id: 72,
            title: "Bench Press",
            sets: [{id: 73, reps: 5, weight: 25}, {id: 74, reps: 5, weight: 30}, {id: 75, reps: 5, weight: 30}]
        }, {
            id: 76,
            title: "Lat Raise",
            sets: [{id: 77, reps: 5, weight: 25}, {id: 78, reps: 5, weight: 30}, {id: 79, reps: 5, weight: 30}]
        }, {
            id: 80,
            title: "Bulgarian Split Squat",
            sets: [{id: 81, reps: 5, weight: 25}, {id: 82, reps: 5, weight: 30}, {id: 83, reps: 5, weight: 30}]
        }, {
            id: 84,
            title: "Tricep Dip",
            sets: [{id: 85, reps: 5, weight: 25}, {id: 86, reps: 5, weight: 30}, {id: 87, reps: 5, weight: 30}]
        }],
        6: [{
            id: 88,
            title: "Bent Over Row",
            sets: [{id: 89, reps: 8, weight: 25}, {id: 90, reps: 8, weight: 25}, {id: 91, reps: 8, weight: 25}]
        }, {
            id: 92,
            title: "Romanian Deadlift",
            sets: [{id: 93, reps: 6, weight: 37.5}, {id: 94, reps: 6, weight: 37.5}, {id: 95, reps: 6, weight: 37.5}]
        }, {
            id: 96,
            title: "DB Pullover",
            sets: [{id: 97, reps: 8, weight: 18}, {id: 98, reps: 8, weight: 18}, {id: 99, reps: 8, weight: 18}]
        }, {
            id: 100,
            title: "Handles Bicep Curl",
            sets: [{id: 101, reps: 8, weight: 11.5}, {id: 102, reps: 8, weight: 11.5}, {id: 103, reps: 8, weight: 11.5}]
        }, {
            id: 104,
            title: "Crunch",
            sets: [{id: 105, reps: 8, weight: 20}, {id: 106, reps: 8, weight: 20}, {id: 107, reps: 8, weight: 20}]
        }],
    });

    const [seconds, setSeconds] = useState(0);

    const [pendingSetId, setPendingSetId] = useState(-1);

    const setTitle = (newTitle) => {
        const modifiedTitleMap = {
            ...titleMap,
            [day]: newTitle
        };
        localStorage.setItem('titleMap', JSON.stringify(modifiedTitleMap));
        setTitleMap(modifiedTitleMap);
    }

    const indexTitles = Object.entries(titleMap).map(([key, val]) => {
        return {
            index: key,
            title: val
        }
    })

    const setSelectedDay = (newDay: number) => {
        setDay(newDay);
        localStorage.setItem('selectedDay', JSON.stringify(newDay));
    }

    useEffect(() => {
        const storedDay = JSON.parse(localStorage.getItem('selectedDay'));
        if (storedDay) {
            setDay(storedDay)
        }

        const storedTitleMap = JSON.parse(localStorage.getItem('titleMap'));
        if (storedTitleMap) {
            for (const val of Object.values(storedTitleMap)) {
                if (typeof val === 'object' && val !== null) {
                    localStorage.removeItem('titleMap');
                }
            }
            setTitleMap(storedTitleMap);
        }

        const storedExercises = JSON.parse(localStorage.getItem('exercises'));
        if (storedExercises) {
            setExercises(storedExercises);
        }
    }, [])

    const handleChangeSet = (setId: number, newReps: number, newWeight: number) => {
        const modifiedExercises = {
            ...exercises,
            [day]: exercises[day].map(ex => {
                return {
                    ...ex,
                    sets: ex.sets.map(set => {
                        if (set.id !== setId) return set;
                        return {id: setId, reps: newReps, weight: newWeight};
                    })
                }
            })
        };
        setExercises(modifiedExercises);
        localStorage.setItem('exercises', JSON.stringify(modifiedExercises));
    }

    const incrementSetStat = (setId: number, repDiff: number, weightDiff: number) => {
        setExercises(prevExercises => {
            const modifiedExercises = {
                ...prevExercises,
                [day]: prevExercises[day].map(ex => {
                    return {
                        ...ex,
                        sets: ex.sets.map(set => {
                            if (set.id !== setId) return set;
                            return {id: setId, reps: set.reps + repDiff, weight: set.weight + weightDiff};
                        })
                    }
                })
            };
            localStorage.setItem('exercises', JSON.stringify(modifiedExercises));
            return modifiedExercises
        });
    }

    const handleAddExercise = () => {
        setExercises({
            ...exercises,
            [day]: [
                ...exercises[day],
                {id: idCounter, title: "New Exercise", sets: []}
            ],
        });
        setIdCounter(idCounter + 1);
    }

    return (
            <div className="RootContainer">
            <div className="PaddedContainer">
                <div className="Header">
                    <div className="EditableTitle"> <EditableTitle title={titleMap[day]} setTitle={setTitle}/> </div>
                    <NumericItemSelector items={indexTitles} selectedItem={day}
                                         setSelectedItem={setSelectedDay}/>
                </div>
                <Timer remainingSeconds={seconds} setSeconds={setSeconds}/>
                <div className="PanelsContainer">
                    <div className="LeftPanel">
                        <div className="Exercises">
                            {
                                exercises[day]
                                    .map(ex =>
                                        <ExerciseRow key={ex.id} id={ex.id} title={ex.title} sets={ex.sets}
                                                     pendingSetId={pendingSetId}
                                                     setPendingSetId={setPendingSetId} changeSet={handleChangeSet}
                                                     handleClickTitle={() => console.log("t")}/>
                                    )
                            }
                        </div>
                        <div className="AddExercise" onClick={handleAddExercise}>
                            +
                        </div>
                    </div>
                    <div className="RightPanel">
                        <QuickEdit changeReps={(repDiff: number) => incrementSetStat(pendingSetId, repDiff, 0)}
                                   changeWeight={(weightDiff: number) => incrementSetStat(pendingSetId, 0, weightDiff)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}