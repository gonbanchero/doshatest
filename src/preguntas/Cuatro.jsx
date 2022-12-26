import { useContext } from 'react';
import contexto from '../context/contexto';

//COMPONENTS

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react';

export const Cuatro = () => {
	const { score, respuestas } = useContext(contexto);

	const handleChange = (event) => {
		score(event.target.value, 4);
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
				4. Temperatura Corporal
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
				<FormControlLabel
					value="a"
					control={<Radio />}
					label="Manos y pies fríos"
				/>
				<FormControlLabel
					value="b"
					control={<Radio />}
					label="Cálido"
				/>
				<FormControlLabel
					value="c"
					control={<Radio />}
					label="Templado, agradable"
				/>
			</RadioGroup>
		</FormControl>
	);
};
