<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="($v.email.$dirty && !$v.email.required)"
        >Email shouldn`t be empty </small>
        <small
          class="helper-text invalid"
          v-else-if="($v.email.$dirty && !$v.email.email)"
        >Is not Email </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required)}"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="($v.password.$dirty && !$v.password.required)"
        >Password must not be empty </small>
        <small
          class="helper-text invalid"
          v-else-if="($v.password.$dirty && !$v.password.minLength)"
        >Password must not be less than 6 characters </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';
  import messages from "../utils/messages";

  export default {
    name: "Login",
    data: ()=> ({
      email: '',
      password: ''
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    mounted() {
      if (messages[this.$route.query.message]){
        this.$message(messages[this.$route.query.message])
      }
    },
    methods: {
      submitHandler() {
        //FIXME this.$v.password.key = null
        // console.log(this.$v.password);
        // $params.minLength && $params.required = null why???
        if (this.$v.$invalid)  {
          this.$v.$touch();
          return
        }

        const formData = {
          email: this.email,
          password: this.password
        };
        console.log(formData);

        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>