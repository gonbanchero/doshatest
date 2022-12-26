import { Template } from './preguntas/Template';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Results } from './components/Results';
import data from './preguntas/data';

function App() {
	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					bgcolor: '#cfe8fc',

					width: '90%',
					padding: 2,
				}}
			>
				{data.map((item) => {
					return <Template {...item} key={item.question} />;
				})}

				<Results />
			</Box>
		</Container>
	);
}

export default App;
