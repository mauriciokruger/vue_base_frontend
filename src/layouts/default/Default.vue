<template>
  <v-app>
    <default-bar />
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        style="padding-top: 64px; position: fixed; top: 0;"
        >
        <v-list class="bg-secondary">
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/70.jpg"
            title="Maurício Krüger"
            subtitle="mauricio@d3t.com.br"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense class="bg-primary">
          <v-list-item prepend-icon="mdi-home" link to="/" title="Home"></v-list-item>
          <v-list-item prepend-icon="mdi-archive-eye" link to="/teste" title="Teste"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <default-view />
      </v-container>
    </v-layout>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.v-list-item--active{}
</style>