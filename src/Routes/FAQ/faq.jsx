import { React, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import './Faq.css';
import PreviousNextMethods from '../Slider/Descriptionslider';

function Faq() {

    // const faqs = [
    //     {question: 'What is the best programming language for beginners in data science?', answer: 'Python is often recommended due to its simple and readable syntax, as well as its extensive library ecosystem.'},
    //     {question:'How long does it take to become proficient in a data science programming language?', answer: 'How long does it take to become proficient in a data science programming language?'},
    //     {question:'Are there any free resources to learn data science programming languages?', answer: 'Yes, many online platforms, such as DataCamp, offer free introductory courses in Python, R, and SQL.'},
    //     {question:'Can I transition to data science if I come from a non-technical background?', answer: 'Absolutely. Many people transition to data science from various fields. Starting with beginner-friendly languages like Python can help ease the transition.'},
    //     {question:'Which programming languages are essential for big data projects?', answer: 'Languages such as Java, Scala, and Go are essential for handling big data projects due to their performance and scalability.'}
    // ]

    const [activeIndex, setActiveIndex] = useState(false);
    const faqs = [
        {question: 'What is the best programming language for beginners in data science?', answer: 'Python is often recommended due to its simple and readable syntax, as well as its extensive library ecosystem.'},
        {question:'How long does it take to become proficient in a data science programming language?', answer: 'How long does it take to become proficient in a data science programming language?'},
        {question:'Are there any free resources to learn data science programming languages?', answer: 'Yes, many online platforms, such as DataCamp, offer free introductory courses in Python, R, and SQL.'},
        {question:'Can I transition to data science if I come from a non-technical background?', answer: 'Absolutely. Many people transition to data science from various fields. Starting with beginner-friendly languages like Python can help ease the transition.'},
        {question:'Which programming languages are essential for big data projects?', answer: 'Languages such as Java, Scala, and Go are essential for handling big data projects due to their performance and scalability.'}
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

  return (

    <div className='faq-container'>
        <h2>Top Programming Languages FAQs</h2>

        {faqs.map((faq, index) => (
            <div key={index} className='faq-item'>
                <div className="faq-question" onClick={()=> toggleFAQ(index)}>
                    {activeIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                <h3>{faq.question}</h3>
                </div>
                {activeIndex === index && <p>{faq.answer}</p>}
            </div>
        ))}
    </div>
  );
};

export default Faq
