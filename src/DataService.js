const DataService = {};
let quizData = require('./quiz_data.json');
const questionParam = 'questions';


DataService.getData = () => {
    const { quiz_questions } = quizData;
    var data;
    try {
        data = localStorage.getItem(questionParam);
    } catch(e) {}

    if (data) {
        return JSON.parse(data);
    } else {
        DataService.updateData(JSON.stringify(quiz_questions));
        return quiz_questions;
    }
};

DataService.updateData = (data, param = questionParam) => {
    try {
        data = localStorage.setItem(param, data);
    } catch(e) {}
};

export default DataService;