<!--suppress ALL -->
<template>
  <div class="login__container">
    <form class="login__form" @submit.prevent="submitForm">
      <label for="username">Username</label>
      <br />
      <input id="username" v-model="login.username" required type="text" />
      <br />
      <label for="password">Password</label>
      <br />
      <input id="password" v-model="login.password" required type="password" />
      <br />
      <input value="Login" type="submit" />
      <a href="/signup">Create an account</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      connection: null,
    };
  },
  methods: {
    /**
     * Login user
     * @async
     */
    async submitForm() {
      this.$helpers.loading();
      try {
        if (this.login.username === "") throw new Error("Username blank");
        if (this.login.password === "") throw new Error("Password blank");
        const response = await this.$http.post("/user/login", this.login);
        await this.$store.dispatch("userModule/logIn", response.data);
        await this.$router.push("/");
        this.$helpers.close();
      } catch (error) {
        this.$helpers.showError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__container {
    z-index: 0;
    width: 100%;
    height: 100vh;
    background: rgb(238, 238, 238);
    input {
      width: 500px;
      padding: 10px 20px;
      margin: 10px 0;
      display: inline-block;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
      transition: 0.2s all ease-in-out;
      outline: none;
    }

    input[type="submit"],
    button {
      width: 90%;
      justify-self: right;
      background-color: #f8b500;
      font-weight: bold;
      font-size: 14px;
      padding: 14px 20px;
      margin: 20px;
      border: none;
      border-radius: 4px;
      transition: 0.2s all ease-in-out;
      cursor: pointer;

      &:hover {
        background: #b4942b;
      }

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  &__form {
    text-align: left;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
  }
}
</style>