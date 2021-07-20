<template>
  <div>
    <h1>TopDetails</h1>
    <div v-for="group in groups" :key="group.id">
      <h2>{{ group.name }}</h2>
      <p>description: {{ group.description }}</p>
      <p>name: {{ group.word }}</p>
    </div>

    <button type="submit" @click="fetchGroups()">fetchGroups</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TopDetails',
  data: () => ({
    groups: [],
  }),
  methods: {
    fetchGroups() {
      axios
        .get('http://localhost:3000/groups')
        .then((response) => {
          this.groups = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>