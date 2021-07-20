<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="group in groups"
            :key="group"
            cols="4"
            @change="fetchGroups"
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
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
  },
};
</script>
