import React from 'react';
import { useContext, useEffect } from 'react';
import contexto from '../context/contexto';

export const Results = () => {
	const { respuestas } = useContext(contexto);

	let respuestasA = 0;
	let respuestasB = 0;
	let respuestasC = 0;

	respuestas.forEach((respuestas) =>
		respuestas.answer === 'a' ? respuestasA++ : null
	);
	respuestas.forEach((respuestas) =>
		respuestas.answer === 'b' ? respuestasB++ : null
	);
	respuestas.forEach((respuestas) =>
		respuestas.answer === 'c' ? respuestasC++ : null
	);

	return (
		<div>
			<div>Results</div>
			A:{(100 * respuestasA) / 10}% || B:{(100 * respuestasB) / 10}% || C:
			{(100 * respuestasC) / 10}%
		</div>
	);
};
