<template>
  <div class="base_page">
    <v-btn text="Open Dialog" @click="dialog = true"> </v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close Dialog"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-for="i in 100" :key="i">
      {{teste}}
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam corrupti minima, quia impedit aliquam quos nisi alias. Sed non fuga placeat reprehenderit ipsum eligendi incidunt ab quam minus itaque. Lorem ipsum dolor sit amet consectetur adipis icing elit. Voluptatibus ullam corrupti minima, quia impedit aliquam quos nisi alias. Sed non fuga placeat reprehenderit ipsum eligendi incidunt ab quam minus itaque.
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      teste: 1
    }
  }
}
</script>