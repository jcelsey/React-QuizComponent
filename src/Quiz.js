import React, { Component } from "react";
import QuizEnd from "./QuizEnd.js";
import QuizQuestion from "./QuizQuestion.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = { quiz_position: 1 };
	}

    showNextQuestion = () => {
        const pos = this.state.quiz_position;

        this.setState({quiz_position: pos + 1});
    }

	render() {
		const isQuizEnd = 
			this.state.quiz_position - 1 === quizData.quiz_questions.length;

		return (
			<div>
				{isQuizEnd ? (
					<QuizEnd />
				) : (
					<QuizQuestion
						quiz_question={
							quizData.quiz_questions[this.state.quiz_position - 1]
						}
                        showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    />
				)}
			</div>
		);
	}
}

export default Quiz;
