import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    render() {
        let { clickHandler, button_text } = this.props;

        return (
            <li>
                <button
                    onClick={ clickHandler.bind(this, button_text) }>
                    { button_text }
                </button>
            </li>
        );
    }
}

export default QuizQuestionButton