<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app shrink-on-scroll>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <Group />
    </v-app>
  </div>
</template>

<script>
import Group from "./components/pages/Group.vue";

export default {
  name: "App",
  components: {
    Group,
  },
};
</script>
