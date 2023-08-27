import { useState } from 'react';
import './power.modal.css'

function Powerjspage() {
    const questions = [
        {
          title: 'Как меня зовут ?',
          variants: ['Максим', 'Кирилл', 'Марк'],
          correct: 0,
        },
        {
          title: 'Какую фишку я рассказал про CSS?',
          variants: ['elem > .doelem', '[class=`__container`]', 'elem ~ .elemtot'],
          correct: 1,
        },
        {
          title: 'Какого хештега нет в галереи? ',
          variants: [
            'Дом',
            'Танцы',
            'Вода',
          ],
          correct: 2,
        },
      ];
      
      function Result({correct}) {
        return (
          <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/js"><button>Попробовать снова</button></a>
          </div>
        );
      }
      
      function Game({step, question, onClickVariat}) {

        let percentage = Math.round((step / questions.length) * 100)
        
        return (
          <>
            <div className="progress">
              <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
              {question.variants.map((text, index) =><li onClick={() => onClickVariat(index)} key={text}>{text}</li>)}
            </ul>
          </>
        );
      }
      
      function App() {
      const [correct, setCorrect] = useState(0)
      const [step, setStep] = useState(0)
      const question = questions[step]

      const onClickVariat = (index) => {
        setStep(step + 1)

        if (index == question.correct){
          setCorrect(correct + 1)
        }
      }

        return (
          <div className="App">
          {step != questions.length ? <Game step={step} question={question} onClickVariat={onClickVariat}/> : <Result correct={correct}/>}
          
           
            
          </div>
        );
      }

      return(
        <div className='povwerJS'>
           {App()}
        </div>
      )
}

export  {Powerjspage};