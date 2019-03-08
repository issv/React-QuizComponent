import React, { Component } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
import QuizHeader from './QuizHeader';
import DataService from './DataService';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quiz_position: 1,
            data: [],
            addMode: false,
            newQ: '',
            opt: '',
            opts: [],
            rightOpt: ''
        };
    }

    componentDidMount() {
        const data = DataService.getData();
        this.setState({ data });
    }

    showNextQuestion = () => {
        const { quiz_position: qp } = this.state;
        this.setState({
            quiz_position: qp + 1
        });
    }

    handleResetClick = () => {
        this.setState({ quiz_position: 1 });
    }

    addNewQ = () => {
        this.setState({
            addMode: true,
            newQ: '',
        });
    }

    cancelAdd = () => {
        this.setState({
            addMode: false,
            quiz_position: 1
        });
    }

    updateQ = (event) => {
        const value = event.target.value;
        this.setState({
            newQ: value
        });
    }

    updateOpt = (event) => {
        const value = event.target.value;
        this.setState({
            opt: value
        }); 
    }

    setRightAnsw = (event) => {
        const value = event.target.value;
        this.setState({
            rightOpt: value
        });
    }

    addOpt = () => {
        const { opt, opts } = this.state;
        if (opt) {
            this.setState({
                opt: '',
                opts: [...opts, opt]
            });
        }
    };

    addQ = () => {
        const { rightOpt, newQ, opts, data } = this.state;
        const nextIndex = data.length + 1;
        const nq = {
            answer: rightOpt,
            id: nextIndex,
            instruction_text: newQ,
            answer_options: opts
        };

        this.setState({
            addMode: false,
            data: [...data, nq],
            newQ: '',
            opt: '',
            opts: [],
            rightOpt: '',
            quiz_position: 1
        });
    };

    getOpts = () => {
        const { opts } = this.state;
        if (opts.length) {
            return opts.map((opt, key) => (
                <option key={key} value={opt}>{opt}</option>
            ));
        } else {
            return ( <option key="0" value="0">No Opts Available</option> );
        }
    }

    render() {
        const { quiz_position: qp, data } = this.state;
        const isQuizEnd = ((qp - 1) === this.state.data.length);
        const headerProps = {
            curQ: qp,
            qNo: data.length,
            addNewQ: this.addNewQ
        };

        return this.state.addMode ? 
            (
                <Container className="pt-2">
                    <Row>
                        <FormGroup>
                            <label>New Question</label>
                            <textarea type="text" onKeyUp={this.updateQ} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <FormGroup>
                                <label>New Option</label>
                                <input type="text" onKeyUp={this.updateOpt} />
                            </FormGroup>
                            <FormGroup>
                                <button onClick={this.addOpt}>Add Opt</button>
                            </FormGroup>
                        </Col>
                        <Col  xs="6">
                            <FormGroup>
                                <label>Select correct answer</label>
                                <select onChange={this.setRightAnsw}>
                                    { this.getOpts() }
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs="3">
                            <button type="button" onClick={this.cancelAdd}>Cancel Add</button>
                        </Col>
                        <Col  xs="3">
                            <button type="button" onClick={this.addQ}> Add New Question</button>
                        </Col>
                    </Row>
                        
                </Container>
            )
            : (
                <div>
                    <QuizHeader {...headerProps} />
                    {
                        isQuizEnd
                        ? <QuizEnd resetClickHandler={this.handleResetClick}/>
                        : <QuizQuestion quiz_question = { data[qp - 1] }
                            showNextQuestionHandler = { this.showNextQuestion} />
                    }
                </div>
            );
    }
}

export default Quiz;
