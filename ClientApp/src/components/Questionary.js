import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import { Link, Navigate } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';

export class Questionary extends Component
{

    constructor(props) {
        super(props);
        this.state = { questions: [] };
    }

    onLoadQuestionary = () => {
        axios({
            method: 'get',
            url: 'https://localhost:7195/api/question/GetQuestions'
        })
            .then(({ data }) => {
                this.setState({ questions: data})
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

        return (
            <div>
                {this.state.questions.length === 0 ?
                    <p>Loading...</p> :
                    <p>Preguntas: {this.state.questions[0].quest}</p>
                }
            </div>)
    }
}
