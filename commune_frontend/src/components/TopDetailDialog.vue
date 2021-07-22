<template>
  <v-card>
    <h1>グループ詳細</h1>
    <p>name: {{ group.name }}</p>
    <p>description: {{ group.description }}</p>
    <p>word: {{ group.word }}</p>
  </v-card>
</template>



<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TopDetailDialog",
  data: () => ({
  }),
  computed: {
    ...mapGetters("groups", ["groups", 'group']),
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    ...mapActions("groups", ["fetchGroups", 'setGroup']),
    showGroup(group) {
      this.setGroup(group);
    },
  },
};

</script>