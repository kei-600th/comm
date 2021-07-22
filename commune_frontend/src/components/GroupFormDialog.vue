<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
        <v-text-field v-model="name" label="グループ名"></v-text-field>
        <WordForm v-model="word" />
        <DescriptionForm v-model="description" />
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn :disabled="isInvalid" @click="submit">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

import DescriptionForm from './DescriptionForm';
import WordForm from './WordForm';

export default {
  name: 'GroupFormDialog',
  mixins: [validationMixin],
  components: {
    DescriptionForm,
    WordForm,
  },
  data: () => ({
    name: '',
    description: '',
    word: '',
  }),
  validations: {
    name: { required },
  },
  computed: {
    ...mapGetters('groups', ['group']),
    isInvalid() {
      return this.$v.$invalid;
    },
  },
  created() {
    this.name = this.group.name;
    this.description = this.group.description;
    this.word = this.group.word;
  },
  methods: {
    ...mapActions('groups', ['setGroup', 'setEditMode', 'createGroup']),
    closeDialog() {
      this.setEditMode(false);
      this.setGroup(null);
    },
    submit() {
      if (this.isInvalid) {
        return
      }
      const params = {
        name: this.name,
        description: this.description,
        word: this.word,
      };
      this.createGroup(params);
      this.closeDialog();
    },
  },
};
</script>