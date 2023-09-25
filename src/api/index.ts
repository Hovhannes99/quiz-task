import axios from "../axios.ts";
import {AxiosResponse} from "axios";

const getQuestions = async () => {
    const data:AxiosResponse = await axios.get("/questions")
    return data.data;
}




const QuizApi = {
    getQuestions
}

export default QuizApi