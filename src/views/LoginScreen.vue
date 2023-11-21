<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-img height="250" src="@/assets/logo.svg" />
      <v-form fast-fail @submit.prevent="login">
        <v-text-field :rules="[rules.required]" variant="outlined" v-model="username" label="Login*"></v-text-field>
        <v-text-field :rules="[rules.required]" variant="outlined" v-model="password" label="Senha*" class="mt-2"></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Esqueceu a senha?</a>
        <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rules: {
        required: value => !!value || 'Campo obrigatório.',
      },
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$router.push('/')
    },
  }
}
</script>
