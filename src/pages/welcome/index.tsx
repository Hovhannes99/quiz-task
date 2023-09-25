import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LogOut from "../../components/log-out";


const Welcome = () =>{
    const [score] = useState(localStorage.getItem("score") || '0')
    const [totalScore] = useState<string>(localStorage.getItem("totalScore") || '0');
    const navigate = useNavigate()

    useEffect(()=>{
        if (!Number(totalScore)){
            localStorage.setItem("totalScore", totalScore);
        }
        if (!Number(score)){
            localStorage.setItem("score", score);
        }
    },[totalScore, score])


    return (
        <>
            <LogOut/>
            <div className={'container'}>
                <h1>Welcome to the Quiz!</h1>
                <p>Total Score: {totalScore}</p>
                <button onClick={()=>navigate('/quiz')}>Start  Quiz</button>
            </div>
        </>
    )
}

export default Welcome