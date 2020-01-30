<template>
  <b-row>
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-table v-else striped hover :items="episodes" :fields="fields"></b-table>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      fields: ['id', 'name', 'air_date', 'episode']
    };
  },
  computed: {
    ...mapState(['episodes', 'isLoading'])
  }
};
</script>
