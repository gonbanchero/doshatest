import contexto from './contexto';
import { useReducer, useState } from 'react';
import Reducer from './Reducer';

export default function UsarContext(props) {
	const { children } = props;

	const initialState = {
		respuestas: [],
	};

	// Elementos del Reducer
	const [state, dispatch] = useReducer(Reducer, initialState);

	const score = (value, question) => {
		// Busco si la respuesta que ingresa ya está guardada
		const existingAnswer = state.respuestas.find(
			(answer) => answer.question === question
		);

		// Si ya está , actualizo el value, sino la mando al reducer
		existingAnswer
			? (existingAnswer.answer = value)
			: dispatch({
					type: 'GET_RESPONSE',
					payload: { question: question, answer: value },
			  });

		update();
	};

	const update = () => {
		dispatch({ type: 'UPDATE_STATE' });
	};

	return (
		<contexto.Provider value={{ respuestas: state.respuestas, score }}>
			{children}
		</contexto.Provider>
	);
}
