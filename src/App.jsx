import { Uno } from './preguntas';
import { Dos } from './preguntas';
import { Tres, Cuatro } from './preguntas';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Results } from './components/Results';

function App() {
	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					bgcolor: '#cfe8fc',
					height: '100vh',
					width: '90%',
					padding: 1,
				}}
			>
				<Uno />
				<Dos />
				<Tres />
				<Cuatro />
				<Results />
			</Box>
		</Container>
	);
}

export default App;

//
