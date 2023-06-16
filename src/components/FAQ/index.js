import './index.scss';

import React, { useRef } from 'react';
import Card from '../UI/Card';
import { QUESTIONS } from './CONFIG';

const Faq = () => {

    const questionsList = QUESTIONS.map((question) => (
        <div>
            <h2>
                {question.question}
            </h2>
            <p>
                {question.answer}
            </p>
        </div>
    ))

    return (
        <div className="container faq-page">
            <div className="text-zone">
                <h1>Frequently Asked Questions</h1>
                <Card>
                    {questionsList}
                </Card>
            </div>
        </div>
    )
}

export default Faq;