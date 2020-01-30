<template>
  <b-row class="py-3">
    <h1 v-if="!favoriteCharacters.length">
      You don't have favorite characters
    </h1>
    <template v-else>
      <b-col
        cols="3"
        v-for="character in favoriteCharacters"
        :key="character.id"
      >
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
        >
          <b-card-text>
            {{ character.location.name }}
          </b-card-text>
          <b-button variant="info" @click="removeFromFavorites(character.id)"
            >Remove from favorites</b-button
          >
        </b-card>
      </b-col>
    </template>
  </b-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['favoriteCharacters'])
  },
  methods: {
    ...mapActions(['removeFromFavorites'])
  }
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
