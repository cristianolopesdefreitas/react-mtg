import axios from 'axios';

const API = 'https://api.magicthegathering.io/v1/cards';

class CardService {
	getCards(pageSize, page) {
		return axios
			.get(`${API}?pageSize=${pageSize}&page=${page}`);
	}
}

export default CardService;