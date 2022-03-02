import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
	handleClick = (buttonText) => {
		if (buttonText === this.props.quiz_question.answer) {
			this.props.showNextQuestionHandler();
		}
	};

	render() {
		const answers = this.props.quiz_question.answer_options;

		return (
			<main>
				<section>
					<p>{this.props.quiz_question.instruction_text}</p>
				</section>
				<section className="buttons">
					<ul>
						{answers.map((answer_option, index) => (
							<QuizQuestionButton
								key={index}
								button_text={answer_option}
								clickHandler={this.handleClick.bind(this)}
							></QuizQuestionButton>
						))}
					</ul>
				</section>
			</main>
		);
	}
}

export default QuizQuestion;
