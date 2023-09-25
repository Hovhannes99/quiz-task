import {useState} from "react";


let score:number = 0;
const useScoreCounter = () => {
    const [count, setCount] = useState(1);
    const [isReplied, setReplied] = useState<boolean>(true);
    const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false)

    const handleRightAnswer = () =>{
        score += 10;
        localStorage.setItem("score", score.toString());
    }
    const resetScore = () =>{
        score = 0;
        localStorage.setItem("score", score.toString());
    }

    return {
        handleRightAnswer,
        score,
        setCount,
        count,
        isReplied,
        setReplied,
        isRightAnswer,
        setIsRightAnswer,
        resetScore
    }
}

export default useScoreCounter