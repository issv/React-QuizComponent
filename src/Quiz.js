import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }

    render() {
        let { quiz_questions } = quizData;
        
        return (
            <div>
                <div className="QuizQuestion">
                { quiz_questions[0].instruction_text }
                </div>
            </div>
        );
    }
}

export default Quiz