import pokemonService from '../../api/pokemonService';
import config from '../../api/config';

const actions = {
  async fetchPokemon({ commit }, payload = {}) {
    try {
      const result = await pokemonService.getPokemonApi(payload);
      commit('SET_POKEMONS', result.data);
    } catch (e) {
      commit('SET_ERROR', e);
    }
  },
  searchPokemon({ commit }, search = '') {
    commit('SET_SEARCH', search);
  },
};
const mutations = {
  SET_POKEMONS(state, payload) {
    state.pokemons = payload.results;
    state.previous = payload.previous;
    state.next = payload.next;
  },
  SET_SEARCH(state, search) {
    state.search = search;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};
const getters = {
  getPokemons: (state) => {
    const values = [...state.pokemons];
    const pokemons = values.map((value, index) => {
      const poke = { ...value };
      poke.avatar = `${config.pokemonAvatar}/${index + 1}.png`;
      return poke;
    });
    if (state.search && state.search.length > 0) {
      return pokemons.filter((value) => value.name.includes(state.search));
    }
    return pokemons;
  },
  getPrevius: (state) => state.previous,
  getNext: (state) => state.next,
};
const state = {
  pokemons: [],
  previous: null,
  next: null,
  error: '',
  search: '',
};
export default {
  state,
  actions,
  getters,
  mutations,
};
