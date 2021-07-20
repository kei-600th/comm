<template>
  <div>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Top',
  computed: {
    ...mapGetters('groups', ['groups']),
  },
  methods: {
    ...mapActions('groups', ['fetchGroups'])
  },
};
</script>