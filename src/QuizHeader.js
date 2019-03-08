import React from 'react';


const QuizHeader = (props) => {
    return (
        <div>
            <span>Q#: { props.curQ  <= props.qNo ? props.curQ : props.qNo} / { props.qNo}</span>
            <button onClick={props.addNewQ}>Add New Question</button>
        </div>
    );
};

export default QuizHeader;
