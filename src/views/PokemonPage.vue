<template>
  <div class="container">
    <div>
      <b-input-group class="mb-3">
        <b-form-input v-model="search"></b-form-input>
        <b-input-group-append>
          <b-button text="Button" variant="success" @click="onSearch()">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <PokemonCard v-for="(item, index) in pokemons" :item="item" :key="index">
    </PokemonCard>
    <div>
      <b-button variant="primary" @click="onPrevious()" :disabled="!previous">Previous</b-button>
      <b-button variant="primary" @click="onNext()">Next</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PokemonCard from '../components/PokemonCard.vue';

export default {
  name: 'PokemonPage',
  components: { PokemonCard },
  computed: {
    ...mapGetters({
      pokemons: 'getPokemons',
      next: 'getPrevius',
      previous: 'getPrevius',
    }),
  },
  data() {
    return {
      search: '',
      params: {
        offset: 0,
        limit: 20,
      },
    };
  },
  methods: {
    ...mapActions([
      'fetchPokemon',
      'searchPokemon',
    ]),
    onSearch() {
      this.searchPokemon(this.search);
    },
    onNext() {
      // eslint-disable-next-line operator-assignment
      this.params.offset = this.params.offset + this.params.limit;
      this.fetchPokemon(this.params);
    },
    onPrevious() {
      // eslint-disable-next-line operator-assignment
      this.params.offset = this.params.offset - this.params.limit;
      this.fetchPokemon(this.params);
    },
  },
  beforeMount() {
    this.fetchPokemon(this.params);
  },
};
</script>

<style scoped>

</style>
