import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { dataRef } from './blog/firebaseConfigBlog';
import search from '../components/search.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const database = dataRef;

export default function FAQ() {

  const [searchQuestion, setSearchQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [classing,setclass] = useState(false)

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  useEffect(() => {
    const questionsRef = ref(database, "questions");
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      const questions = Object.keys(data || {}).map((key) => ({
        id: key,
        open:false,
        ...data[key]
      }));
      setQuestions(questions);
    });
  }, [database]);

  let filteredQuestions = questions.filter((item) => {
    if (searchQuestion === "") {
      return item;
    } else if (
      item.question.toLowerCase().includes(searchQuestion.toLowerCase())
    ) {
      return item;
    }
  });

  let i = -1;
  

  return (
    <div className="QAbody">
      <div className='FAQ'>
            <h1 className='note f1' style={{color:"red"}} data-aos="fade-up">ASK A QUESTION</h1>
        </div>
        <h3 className='h3' style={{color:"yellow"}}>Type keywords to narrow down your search!!</h3>
        <div className='search-bar'>
        <input
          className="search"
          type="text"
          placeholder="What is pregnancy?"
          onChange={(e) => setSearchQuestion(e.target.value)}
        />
          <button><img className='search-button' src={search} alt="search" onClick={() => setSearchQuestion(searchQuestion)}/></button>
        </div>
      <div className="Questions" >
        {filteredQuestions.map((item, key) => {
          i ++;
          return(
          <div className={(i%2 === 0)?"filteredQuestionsleft" : "filteredQuestionsright"} key={key} data-aos="flip-up">
            {item.question}
            <div className="filteredAnswers">{item.answer}</div>
          </div>
        )})}
      </div>
    </div>
  );
}
