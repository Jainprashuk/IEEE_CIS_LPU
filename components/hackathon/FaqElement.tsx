"use client";
import { useState } from 'react';


function FaqElement({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item`}>
      <h3 className={`faq-question mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
        {question}
      </h3>
      {isOpen && (
        <p className={`faq-answer text-base font-medium leading-relaxed text-body-color ${isOpen ? 'open' : ''}`}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqElement;