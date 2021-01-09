<!--suppress ALL -->
<template>
  <div class="signup__container">
    <form class="signup__form" @submit.prevent="submitForm">
      <label for="name">Name</label>
      <br />
      <input id="name" v-model="signup.name" required type="text" />
      <br />
      <label for="email">Email</label>
      <br />
      <input id="email" v-model="signup.email" required type="email" />
      <br />
      <label for="username">Username</label>
      <br />
      <input id="username" v-model="signup.username" required type="text" />
      <br />
      <label for="password">Password</label>
      <br />
      <input id="password" v-model="signup.password" required type="password" />
      <br />
      <input value="Sign Up" type="submit" />
      <a href="/login">Already have an account</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signup: {
        name: "",
        email: "",
        username: "",
        password: "",
      },
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
        if (this.signup.email === "") throw new Error("Email blank");
        if (this.signup.name === "") throw new Error("Name blank");
        if (this.signup.username === "") throw new Error("Username blank");
        if (this.signup.password === "") throw new Error("Password blank");
        await this.$store.dispatch("userModule/signup", this.signup);
        await this.$router.push("/login");
        this.$helpers.close();
      } catch (error) {
        this.$helpers.showError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signup {
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