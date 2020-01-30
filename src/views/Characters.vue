<template>
  <b-row class="py-3">
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <template v-else>
      <b-col cols="3" v-for="character in characters" :key="character.id">
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
          :class="{ colored: isInFavorites(character) }"
        >
          <b-card-text>
            {{ character.location.name }}
          </b-card-text>
          <b-button
            variant="info"
            :disabled="isInFavorites(character)"
            @click="addToFavorites(character)"
            >Add to favorites</b-button
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
    ...mapState(['characters', 'isLoading', 'favoriteCharacters'])
  },
  methods: {
    ...mapActions(['addToFavorites']),
    isInFavorites(character) {
      return this.favoriteCharacters.includes(character);
    }
  }
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
