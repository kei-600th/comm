<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="group in groups"
            :key="group.id"
            cols="4"
          >
            <v-card height="200">
              <v-card-title>{{ group.name }}</v-card-title>
              <v-card-text>{{ group.word }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Top",
  computed: {
    ...mapGetters("groups", ["groups"]),
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
  },
};
</script>
