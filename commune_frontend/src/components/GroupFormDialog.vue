<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
        <v-text-field v-model="name" label="グループ名"></v-text-field>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="submit">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GroupFormDialog',
  data: () => ({
    name: '',
  }),
  computed: {
    ...mapGetters('groups', ['group']),
  },
  methods: {
    ...mapActions('groups', ['setGroup', 'setEditMode', 'createGroup']),
    closeDialog() {
      this.setEditMode(false);
      this.setGroup(null);
    },
    submit() {
      const params = {
        name: this.name,
        start: this.group.start,
        end: this.group.end,
      };
      this.createGroup(params);
      this.closeDialog();
    },
  },
};
</script>