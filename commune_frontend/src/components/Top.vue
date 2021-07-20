<template>
  <div>
    <h1>top</h1>
      <ul>
        <li v-for="group in groups" :key="group.id">
          {{ group.name }}
        </li>
      </ul>
    <button type="submit" @click="fetchGroups()">fetchGroups</button>


    <TopDetails />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TopDetails from './TopDetails.vue';

export default {
  name: 'Top',
  components: {
    TopDetails,
  },
  computed: {
    ...mapGetters('groups', ['groups']),
  },
  methods: {
    ...mapActions('groups', ['fetchGroups'])
  },
};
</script>