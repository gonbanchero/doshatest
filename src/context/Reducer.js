//TYPES
const GET_RESPONSE = 'GET_RESPONSE';
const UPDATE_STATE = 'UPDATE_STATE';

export default function Reducer(state, action) {
	const { payload, type } = action;

	switch (type) {
		case GET_RESPONSE:
			return { ...state, respuestas: [...state.respuestas, payload] };
		case UPDATE_STATE:
			return { ...state };
	}
}
