import React, {useEffect, useState} from 'react';
import './Test.css';
import TopItem from "../TopItem/TopItem";
import StartStudy from "../StartStudy/StartStudy";
import startStudy2 from "../../assets/images/image 242.png";

const TestResult = ({ score = 1 }) => {
    const results = [
        { range: "13–14", level: "C2 (Proficiency)" },
        { range: "11–12", level: "C1 (Advanced)" },
        { range: "9–10", level: "B2 (Upper-Intermediate)" },
        { range: "6–8", level: "B1 (Intermediate)" },
        { range: "3–5", level: "A2 (Pre-Intermediate)" },
        { range: "0–2", level: "A1 (Beginner)" },
    ];
    // Определяем уровень на основе баллов
    const getLevel = (score) => {
        // Преобразуем строковый диапазон в числовые min и max
        const parsedResults = results.map(item => {
            const [min, max] = item.range.split(/–/).map(Number);
            return { min, max, level: item.level };
        });

        // Находим подходящий уровень
        const result = parsedResults.find(({ min, max }) =>
            score >= min && score <= max
        );

        return result ? result.level : "Не определен";
    };

    // Функция для правильного склонения слова "балл"
    const formatScore = (num) => {
        const lastDigit = num % 10;
        if (num >= 11 && num <= 14) return `${num} баллов`;
        if (lastDigit === 1) return `${num} балл`;
        if (lastDigit >= 2 && lastDigit <= 4) return `${num} балла`;
        return `${num} баллов`;
    };
    return (
        <div className="test-result-container" >
            <h1 className="test-result-title">ВАШ РЕЗУЛЬТАТ: <label>{formatScore(score)}</label></h1>
            <h2 className="test-result-title">ВАШ УРОВЕНЬ АНГЛИЙСКОГО ЯЗЫКА: <label>{getLevel(score)}</label></h2>
            <div className="results-table">
                <h3 className="table-title">Результаты теста:</h3>
                {results.map((item, index) => (
                    <div key={index} className="result-row-item">
                        <span className="range">•  {item.range} правильных ответов:</span>
                        <span className="level"> Уровень {item.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Стили (можно вынести в отдельный файл)
// const styles = `
// .test-result-container {
//   max-width: 600px;
//   margin: 2rem auto;
//   padding: 20px;
//   font-family: Arial, sans-serif;
// }
//
// .main-title {
//     font-family: StrogiyDemo;
//     font-weight: 900;
//     font-size: 60px;
//     line-height: 102%;
//     letter-spacing: 0%;
//     text-transform: uppercase;
//
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 15px;
// }
//
// .subtitle {
//   font-size: 18px;
//   color: #666;
//   margin-bottom: 20px;
// }
//
// .divider {
//   border: 1px solid #ddd;
//   margin: 20px 0;
// }
//
// .results-table {
//   background: #f9f9f9;
//   padding: 15px;
//   border-radius: 8px;
// }
//
// .table-title {
//   font-size: 16px;
//   color: #444;
//   margin-bottom: 12px;
// }
//
// .result-row {
//   display: flex;
//   justify-content: space-between;
//   margin: 8px 0;
//   padding: 6px 0;
//   border-bottom: 1px solid #eee;
// }
//
// .range {
//   color: #555;
// }
//
// .level {
//   color: #2c3e50;
//   font-weight: bold;
// }
// `;

// Добавление стилей в документ
// document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

// export default TestResult;
const QItem = ({ partIndex, questionIndex, q, ans, right, handleSaveAnswers }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        handleSaveAnswers(partIndex, questionIndex, value);
    };

    return (
        <div className="test-container-item-q">
            <div className="test-item-q">
                {/* Исправленный рендеринг вопроса */}
                <span>{questionIndex + 1}. </span>
                {q.split('\n').map((line, i) => (
                    <span key={i}>
            {line}
                        {i !== q.split('\n').length - 1 && <br />}
          </span>
                ))}
            </div>
            <div className="answers-container">
                {ans.map((item, index) => (
                    <div className="div-radio-option">
                        <label key={index} className="radio-option">
                            <input
                                type="radio"
                                name={`question-${partIndex}-${questionIndex}`}
                                value={index}
                                checked={selectedValue === String(index)}
                                onChange={handleChange}
                                className="radio-input"
                            />
                            <span className="custom-radio"></span>
                            {item}
                            <br/>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestItem = ({ partIndex, title, qData, handleSaveAnswers, subTitle1, subTitle2 }) => {
    return (
        <div className="test-container-item">
            <div className="test-item-title">
                {title}
            </div>
            {
                subTitle1 ?
                    <div className="test-item-sub-title1">
                        {subTitle1}
                    </div>
                    :
                    null
            }
            {
                subTitle2 ?
                    <div className="test-item-sub-title2">
                        {subTitle2}
                    </div>
                    :
                    null
            }
            <div className="test-item-qs">
                {qData.map((item, index) => (
                    <QItem
                        key={index}
                        partIndex={partIndex}
                        questionIndex={index}
                        q={item.q}
                        ans={item.ans}
                        right={item.right}
                        handleSaveAnswers={handleSaveAnswers}
                    />
                ))}
            </div>
        </div>
    );
};

const Test = () => {
    const [answers, setAnswers] = useState({});
    const [showTest, setShowTest] = useState(true);
    const [correctCount, setCorrectCount] = useState(0);

    // Вычисляем количество правильных ответов при изменении answers
    useEffect(() => {
        let count = 0;
        tests.forEach((part, partIndex) => {
            part.qData.forEach((question, questionIndex) => {
                const key = `${partIndex}-${questionIndex}`;
                if (answers[key] !== undefined &&
                    Number(answers[key]) === question.right) {
                    count++;
                }
            });
        });
        setCorrectCount(count);
    }, [answers]);

    const handleSaveAnswers = (partIndex, questionIndex, answerIndex) => {
        setAnswers(prev => ({
            ...prev,
            [`${partIndex}-${questionIndex}`]: Number(answerIndex)
        }));
    };

    const handleSubmitTest = () => {
        // console.log(Object.keys(answers).length)
        if (Object.keys(answers).length === 14) {
            setShowTest(false);
        }
    };

    console.log(correctCount);
    const tests = [
        {
            "title": "Часть 1: Грамматика",
            "qData": [
                {
                    "q": "Choose the correct option:\nShe ___ to the gym every day.",
                    "ans": ["is", "are", "am"],
                    "right": 0 // Индекс правильного ответа
                },
                {
                    "q": "Which sentence is correct?",
                    "ans": ["He works in a bank.", "He work in a bank.", "He is work in a bank."],
                    "right": 0
                },
                {
                    "q": "Fill in the blank:\nIf I ___ you, I would take that job.",
                    "ans": ["go", "goes", "is go"],
                    "right": 0
                },
                {
                    "q": "Choose the correct option:\nBy the time we arrived, the movie ___.",
                    "ans": ["read", "was reading", "have read"],
                    "right": 1
                },
                {
                    "q": "Which sentence is in the passive voice?",
                    "ans": ["The book was written by her.", "She wrote the book.", "Writing the book"],
                    "right": 0
                },
                {
                    "q": "Which sentence is correct?",
                    "ans": ["I wish I can go.", "I wish I could go.", "I wish I will go."],
                    "right": 1
                },
            ]
        },
        {
            "title": "Часть 2: Лексика",
            "qData": [
                {
                    "q": 'Choose the correct synonym for "exhausted":',
                    "ans": ["tired", "excited", "energetic"],
                    "right": 0 // Индекс правильного ответа
                },
                {
                    "q": 'What is the opposite of "generous"?',
                    "ans": ["kind", "selfish", "friendly"],
                    "right": 1
                },
                {
                    "q": "Choose the correct word to complete the sentence:The ___ of the mountain was breathtaking.",
                    "ans": ["peek", "peak", "pique"],
                    "right": 1
                },
                {
                    "q": "Which word does NOT fit?",
                    "ans": ["joyful", "ecstatic", "miserable"],
                    "right": 2
                },
                {
                    "q": "Choose the correct phrasal verb:She ___ her grandmother last weekend.",
                    "ans": ["looked after", "looked for", "looked up"],
                    "right": 0
                },
                {
                    "q": "Choose the correct word to complete the sentence:The ___ of the story was so unexpected that everyone was shocked.",
                    "ans": ["climax", "weather", "journey"],
                    "right": 0
                },
            ]
        },
        {
            "title": "Часть 3: Понимание текста",
            "subTitle1": "Прочитайте текст и ответьте на вопросы:",
            "subTitle2": '"The invention of the internet has revolutionized the way we communicate, work, and access information.\nIt has connected people across the globe, enabling instant communication and the sharing of knowledge.\nHowever, it has also raised concerns about privacy, security, and the spread of misinformation.\"',
            "qData": [
                {
                    "q": 'What has the internet revolutionized?',
                    "ans": ["Only communication", "Communication, work, \n    and access to information", "Only work"],
                    "right": 0 // Индекс правильного ответа
                },
                {
                    "q": 'What is one negative aspect mentioned in the text?',
                    "ans": ["Instant communication", "Sharing knowledge", "Privacy concerns"],
                    "right": 1
                }
            ]
        }
    ];

    return (
        <div>
            {
                showTest ?
                    <div>
                        <TopItem title="Проверьте свой уровень английского" subtitle="Проверьте свои знания английского языка! Выберите правильный ответ на каждый вопрос." />
                        <div className="test-container">
                             {tests.map((item, index) => (
                                <TestItem
                                    key={index}
                                    partIndex={index}
                                    title={item.title}
                                    qData={item.qData}
                                    subTitle1={item.subTitle1}
                                    subTitle2={item.subTitle2}
                                    handleSaveAnswers={handleSaveAnswers}
                                />
                            ))}
                        </div>
                        <div className="central_btn">
                             <button type="submit" className="submit-button-test" onClick={handleSubmitTest}>
                                 узнать результаты
                             </button>
                        </div>
                    </div>

        :
                    <div>
                        <TopItem title="Спасибо, что прошли тестирование!" />
                        <TestResult score={correctCount}></TestResult>
                        <StartStudy img={startStudy2}/>
                    </div>
            }
        </div>
    );

};

export default Test;