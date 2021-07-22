<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="group in groups"
            :key="group.id"
            cols="4"
            :groups="groups"
          >
            <v-card height="200" @click="showGroup(group)">
              <v-card-title >{{ group.name }}</v-card-title>
              <v-card-text>{{ group.word }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog :value="group !== null">
      <div v-if="group !== null">
        <v-card>
          <h1>グループ詳細</h1>
          <p>name: {{ group.name }}</p>
          <p>description: {{ group.description }}</p>
          <p>word: {{ group.word }}</p>
        </v-card>
      </div>
    </v-dialog>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Top",
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
