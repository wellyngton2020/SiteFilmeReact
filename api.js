import axios from 'axios';

//base url > https://sujeitoprogramador.com/r-api/?api=filmes/
//rota > r-api/?api=filmes/
//rota com id 123 exemplo > r-api/?api=filmes/123

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;
