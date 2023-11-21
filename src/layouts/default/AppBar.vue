<template>
  <v-app-bar>
    <v-app-bar-title>
      {{pageTitle}}
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-brightness-6" @click="toggleTheme"></v-btn>
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
          <v-list-item @click="dialogExit = true">
            <v-list-item-title>
              <v-icon>mdi-exit-to-app</v-icon>
              Sair
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <v-dialog v-model="dialogExit" width="500">
      <v-card title="Sair">
        <v-card-text>
         Tem certeza que deseja sair?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="mt-1">
          <v-row class="w-100" no-gutters align="center" justify="space-between">
            <v-btn
              text="Cancelar"
              variant="tonal"
              @click="dialogExit = false"
            ></v-btn>
            <v-btn
              text="Sair"
              color="primary"
              variant="elevated"
              @click="logoff"
            ></v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>

import { useTheme } from 'vuetify'

const theme = useTheme()

function getTheme () {
  let themeStorage = localStorage.getItem('darkTheme')
  if (themeStorage == 'true') {
    theme.global.name.value = 'dark'
  } else {
    theme.global.name.value = 'light'
  }
}
getTheme();
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  if (theme.global.current.value.dark) {
    theme.global.name.value = 'dark'
    localStorage.setItem('darkTheme', 'true')
  } else {
    theme.global.name.value = 'light'
    localStorage.setItem('darkTheme', 'false')
  }
}
</script>
<script>
export default {
  data () {
    return {
      dialogExit: false,
      pageTitle: 'Sistema Base'
    }
  },
  watch: {
    $route (){
      this.updatePageTitle()
    }
  },
  methods: {
    logoff () {
      this.$router.push('/login')
    },
    updatePageTitle () {
      let rota = this.$route.name
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