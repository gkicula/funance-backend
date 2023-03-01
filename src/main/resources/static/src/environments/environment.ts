
// API
const API = 'api/';
const APIbrapi = 'https://brapi.dev/api/v2/';

const API_DEV = {
	getCompetencies:  API + 'competencia',
	getCripto:  APIbrapi + 'crypto',
	saveData:  API + 'competencia'
};

export const environment = {
	production: false,
	api: API_DEV
};
