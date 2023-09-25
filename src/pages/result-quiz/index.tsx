import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useScoreCounter from "../../hooks/useScoreCounter.ts";



const ResultQuiz = () => {
    const [score] = useState(localStorage.getItem("score") || "0")
    const [totalScore,setTotalScore] = useState(localStorage.getItem("totalScore") || "0")
    const navigate = useNavigate();
    const {resetScore } = useScoreCounter()


    useEffect(()=>{
        const result = Number(totalScore) + Number(score);
            setTotalScore(result.toString())
            localStorage.setItem("totalScore", result.toString());
           resetScore()
    },[score])

    return (
        <div className={"result-container"}>
            <h2>Thank you!</h2>
            <h4>Total Score: {totalScore}</h4>
            <h4>Score achieved: 50 out of {score}</h4>
            <div>
                <button className={'again-btn'} onClick={()=>navigate('/quiz')}>Play again</button>
                <button className={'again-btn'} onClick={()=>navigate('/')}>Home Page</button>
            </div>
        </div>
    )
}

export default ResultQuiz