import Service from './service';

const API = 'https://api.magicthegathering.io/v1/cards';

class CardService extends Service {
	getCards(pageSize, page) {
		return this.get(API, {
			page: page,
			pageSize: pageSize
		});
	}
}

export default CardService;