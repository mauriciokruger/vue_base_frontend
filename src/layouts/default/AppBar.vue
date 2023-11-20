<template>
  <v-app-bar>
    <v-app-bar-title>
      {{pageTitle}}
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-icon>mdi-help-circle-outline</v-icon>
              Ajuda
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>mdi-exit-to-app</v-icon>
              Sair
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
</script>
<script>
export default {
  data () {
    return {
      pageTitle: 'Sistema Base'
    }
  },
  watch: {
    $route (){
      this.updatePageTitle()
    }
  },
  methods: {
    updatePageTitle () {
      let rota = this.$route.name
      console.log(rota)
      switch (rota) {
        case 'Teste':
          this.pageTitle = 'Título da página é teste'
          break;
      
        default:
          this.pageTitle = 'Sistema Base'
          break;
      }
    }
  },
  created () {
    this.updatePageTitle()
  }
}
</script>