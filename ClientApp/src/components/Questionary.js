import React, { Component , useMemo } from 'react'
import Paper from '@mui/material/Paper';
import { Link, Navigate } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Countries = [
    { label: "Empresario", value: 1 },
    { label: "Desarrollador", value: 2 },
    { label: "QA", value: 3 },
    { label: "Data Analist", value: 4 },
    { label: "Seguridad Cibernetica", value: 5 }
];

export class Questionary extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentPage: 0,
            answer: {}
        };
    }

    onLoadQuestionary = () => {
        axios({
            method: 'get',
            url: 'https://localhost:7195/api/question/GetQuestions'
        })
            .then(({ data }) => {
                this.setState({ questions: data })

            })
            .catch(error => console.error(error))
    }

    componentDidMount() {
        this.onLoadQuestionary();
    }

    render() {
        if (localStorage.getItem('email') == null){
            return <Navigate to='/signup' />
        }

        const lon = this.state.questions.length;
        let question = {}
        let id = 0;

        if (lon !== 0 ) {
            question = this.state.questions[this.state.currentPage].quest;
            id = question.id;
        }

        const nextQuestion = () => {
            if (this.state.currentPage === lon-1) {
                this.setState({ currentPage: 0 })
            } else {
                this.setState({ currentPage: this.state.currentPage + 1 });
            }
        }
        const previousQuestion = () => {
            if (this.state.currentPage === 0) {
                this.setState({ currentPage: lon-1 })
            } else {
                this.setState({ currentPage: this.state.currentPage - 1 });
            }
        }

        const onSelectValues = (value) => {
            const newAnswer = { ...this.state.answer, id: value };
            this.setState({ answer: newAnswer });
        };
        const onRemove = (selectedList, removedItem) => {
            let listaFiltrada = this.state.answer[id].filter(x => x == removedItem);
            const newAnswer = this.state.answer;
            newAnswer[id] = listaFiltrada;
            this.setState({ newAnswer });
        }


        const toggleTravel = () => {
            if (this.refs.true.value) {
                this.setState({ ...this.state.answers, id: false });
            } else {
                this.setState({ ...this.state.answers, id: true });
            }
        }

        const cambiaNumero = () => {
            //this.setState({ ...this.state.answers, id: this.refs.answer.value });
            const newAnswer = this.state.answer;
            newAnswer[id] = this.refs.answer.value
            this.setState(newAnswer);
        }

        return (
            <div className="text-center ">
                {lon === 0 ?
                    <p>Loading...</p> :
                    <>
                    <p>Preguntas: {this.state.questions[this.state.currentPage].quest}</p>
                    <div>
                        {(() => {
                                switch (this.state.questions[this.state.currentPage].tipo) {
                                case 1:
                                    return (
                                        <div onChange={() => toggleTravel()} className="form-group border-bottom align-items-center flex-wrap">
                                            <label className="option my-sm-0 my-2">
                                                <input value="true" ref="true" type="radio" name="true" />True
                                                <span className="checkmark m-3"></span>
                                            </label>
                                            <label className="option my-sm-0 my-2">
                                                <input value="false" ref="false" type="radio" name="false" checked />False
                                                <span className="checkmark m-3"></span>
                                            </label>
                                        </div>
                                    )
                                case 2:
                                    return (
                                        <div><input onChange={() => cambiaNumero()} value={this.state.answer[id] } min="0" max="10" ref="answer" type="number"/>
                                        </div>
                                    )
                                default:
                                    return (
                                        <Select options={Countries}
                                            components={animatedComponents}
                                            onSelect={(value) => onSelectValues(value)}
                                            isSearchable={true}
                                            onRemove={onRemove}
                                            value={this.state.answer[id] }
                                            isMulti />
                                    )
                            }
                            })()}
                            <button type="submit" className="btn btn-success  m-3 " onClick={() => previousQuestion()}>Previous Question <span className="glyphicon glyphicon-send"></span></button>
                            <button type="submit" className="btn btn-success  m-3" onClick={() => nextQuestion()}>Next Question <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                    </>
                }
            </div>)
    }
}
