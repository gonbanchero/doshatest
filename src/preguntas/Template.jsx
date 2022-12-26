import { useContext } from 'react';
import contexto from '../context/contexto';

//COMPONENTS

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react';

export const Template = (props) => {
	const { question, title, op1, op2, op3 } = props;

	const { score, respuestas } = useContext(contexto);

	const handleChange = (event) => {
		score(event.target.value, question);
	};

	return (
		<FormControl
			sx={{
				padding: '20px',
				border: '1px solid #fafafa',
				width: '100%',
				marginBottom: '10px',
				boxSizing: 'border-box',
			}}
		>
			<FormLabel
				id="demo-controlled-radio-buttons-group"
				sx={{ fontSize: '1.2rem' }}
			>
				{`${question}.${title}`}
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				onChange={handleChange}
				sx={{
					'& .MuiSvgIcon-root': {
						fontSize: 18,
					},
					marginTop: '10px',
					marginLeft: '10px',
				}}
			>
				<FormControlLabel value="a" control={<Radio />} label={op1} />
				<FormControlLabel value="b" control={<Radio />} label={op2} />
				<FormControlLabel value="c" control={<Radio />} label={op3} />
			</RadioGroup>
		</FormControl>
	);
};
