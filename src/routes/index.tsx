import {Routes, Route} from 'react-router-dom'
import Welcome from "../pages/welcome";
import Quiz from "../pages/quiz";
import ResultQuiz from "../pages/result-quiz";


const AppRoutes = () => {
    return(
        <>
            <Routes>
              <Route path="/" element={<Welcome />}/>
              <Route path={'/quiz'} element={<Quiz />} />
              <Route path={'/result-quiz'} element={<ResultQuiz />} />
            </Routes>
        </>
    )
}

export default AppRoutes