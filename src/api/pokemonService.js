import axios from 'axios';
import config from './config';

const pokemonService = {
  getPokemonApi(params = {}) {
    return axios.get(`${config.pokemonApi}/pokemon`, { params });
  },
};

export default pokemonService;
