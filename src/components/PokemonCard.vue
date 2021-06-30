<template>
  <div>
    <b-card
        :title="item.name"
        :img-src="item.avatar"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    item: {},
  },
};
</script>

<style scoped>

</style>
