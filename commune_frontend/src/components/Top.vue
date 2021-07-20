<template>
  <div>
    <h1>top</h1>
      <ul>
        <li v-for="group in groups" :key="group.id">
          {{ group.name }}
        </li>
      </ul>
    <button type="submit" @click="fetchGroups()">fetchGroups</button>

    
    <TopDetails />
  </div>
</template>

<script>
import axios from 'axios';  // axiosをインポートする
import TopDetails from './TopDetails.vue';

export default {
  name: 'Top',
  components: {
    TopDetails,
  },
  data: () => ({
    groups: []
  }),
  methods: {
    fetchGroups() {
      // GETリクエストを送信し、取得データをgroups変数に代入する
      axios
        .get('http://localhost:3000/groups')
        .then(response => {
          this.groups = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    }
};
</script>