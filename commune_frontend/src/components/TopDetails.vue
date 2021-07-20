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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TopDetails",
  computed: {
    ...mapGetters("groups", ["groups"]),
  },
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
  },
};
</script>
