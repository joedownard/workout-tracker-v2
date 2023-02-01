import './Timer.css';

import {useState, useEffect} from "react";

interface TimerProps {
    remainingSeconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export default function Timer({remainingSeconds, setSeconds}: TimerProps) {
    const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timer>()

    const formatSeconds = (remainingSecs) => {
        const mins = Math.floor(remainingSecs / 60);
        const secs = remainingSecs % 60;

        const minsString = mins < 10 ? "0" + mins.toString() : mins.toString();
        const secsString = secs < 10 ? "0" + secs.toString() : secs.toString();

        return minsString + ":" + secsString;
    }

    const addSeconds = (secs) => {
        setSeconds(remainingSeconds + secs);
        if (intervalId) {
            clearInterval(intervalId);
        }
        setIntervalId(setInterval(countdown, 1000));
    }

    const countdown = () => {
        setSeconds(prevSecs => {
            if (prevSecs === 0) {
                clearInterval(intervalId);
                return 0
            } else {
                return prevSecs - 1
            }
        });
    }


    return (
        <div>
            <h4>Rest Timer</h4>
            <div className="TimerAndOptionsContainer">
                <div>
                    {formatSeconds(remainingSeconds)}
                </div>
                <div className="AddSecondsOptions">
                    <div onClick={() => addSeconds(30)}>
                        +30s
                    </div>
                    <div onClick={() => addSeconds(60)}>
                        +60s
                    </div>
                    <div onClick={() => addSeconds(180)}>
                        +180s
                    </div>
                </div>
            </div>
        </div>
    );
}