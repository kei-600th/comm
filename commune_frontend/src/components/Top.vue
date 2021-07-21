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

    <v-dialog :value="dialogMessage !== ''">
      <h1>{{ dialogMessage }}</h1>
    </v-dialog>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Top",
  data: () => ({
    dialogMessage: '',
  }),
  computed: {
    ...mapGetters("groups", ["groups"]),
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
    showGroup(group) {
      this.dialogMessage = group.name
    },
  },
};
</script>
