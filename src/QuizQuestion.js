import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'

let quizData = require('./quiz_data.json');

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }

    render() {
        let { quiz_question } = this.props;
        

        return (
            <main>
                <section>
                    <p>{ quiz_question.instruction_text }</p>
                </section>
                <section className="buttons">
                    <ul>
                        <QuizQuestionButton button_text={ quiz_question.answer_options[0] } />
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion