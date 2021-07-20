<template>
  <div>
    <h1>top</h1>
    <p>groups:</p>
    <p>{{ groups }}</p>
    <button type="submit" @click="fetchGroups()">fetchGroups</button>
  </div>
</template>

<script>
import axios from 'axios';  // axiosをインポートする

export default {
  name: 'Top',
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