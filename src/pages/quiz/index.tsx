import {useEffect, useMemo, useState} from "react";
import QuizApi from "../../api";
import {useNavigate} from "react-router-dom";
import useScoreCounter from "../../hooks/useScoreCounter.ts";
import {IQuestions} from "../../Types";



const Quiz = () => {
 const [dataQuiz, setDataQuiz] = useState<IQuestions[]>([]);
 const {
     handleRightAnswer,
     count,
     setCount,
     isReplied,
     setReplied,
     isRightAnswer, setIsRightAnswer
 } = useScoreCounter();

 const [timer, setTimer] = useState(10);


 const navigate = useNavigate();

  useEffect(()=>{
    (async ()=>{
      try {
        const result = await QuizApi.getQuestions();
        setDataQuiz(result)
      }catch (e){
         alert(`Something went wrong: ${e}`);
        navigate('/')
      }
    })()
  },[navigate]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startTimer = () => {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        };
        startTimer();

        if (timer === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            clearInterval(interval);
            onNextQuestion()
        }
        return () => clearInterval(interval);

    }, [timer]);
    const resetTimer = () => {
        setTimer(10);
    };

  const question = useMemo(()=>{
    return dataQuiz.find(i=>i.id === count)
  },[count, dataQuiz])

  const onNextQuestion = () =>{
     if (dataQuiz.length >= count){
         if(isRightAnswer){
             console.log("isRightAnswer", isRightAnswer)
             handleRightAnswer()
         }
         if(dataQuiz.length <= count){
             navigate('/result-quiz')
         }
         setCount(count + 1);
         setReplied(true);
         resetTimer()
     }
  }
  const handleNext = (value:string) =>{

      if(JSON.parse(value)){
          setIsRightAnswer(JSON.parse(value))
      }else {
          setIsRightAnswer(false)
      }
      setReplied(false);
  }




    if(!dataQuiz.length){
        return <p className={"loading"}>Loading...</p>
    }




  return (
      <div className={'quiz-container'}>
          <h2>Questions </h2>
          <h3>Time is running out-{timer}</h3>
         <div className={'questions'}>
            <h3>{count}. {question?.content}</h3>
         </div>
          <div className={'answers'}>
              {question?.answers?.map(i=>{
                  return (
                      <div>
                          <input type="radio" name="my-input" id={`${i.id}`} value={`${i.correct}`} onClick={(e)=> {
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-ignore
                              const value = e.target.value as string
                              handleNext(value)
                          }
                          }/>
                          <label htmlFor={`${i.id}`}>{i.text}</label>
                      </div>
                  )})}
          </div>
          <button className={'next-btn'} disabled={isReplied} onClick={onNextQuestion}>Next</button>
          {isReplied && <p className={'error-message text'}>Answers to the question are important, choose one of them!!!</p>}
      </div>
  )
}

export default Quiz