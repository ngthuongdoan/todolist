<template>
  <header>
    <h1>TODO LIST</h1>
    <div class="action-button">
      <img
        src="~@/assets/icon/add.svg"
        alt=""
        width="16px"
        id="add"
        @click="addPanel"
      />
      <img
        src="~@/assets/icon/delete_black.png"
        alt=""
        width="20px"
        id="delete"
        @click="deletePanel"
      />
      <img
        src="~@/assets/icon/user.svg"
        alt=""
        width="20px"
        id="user"
        @click="logout"
      />
    </div>
    <div class="clear-fix"></div>
  </header>
</template>

<script>
export default {
  methods: {
    addPanel() {
      this.$emit("add-panel");
    },
    deletePanel() {
      this.$emit("delete-panel");
    },
    logout() {
      this.$store.dispatch("userModule/logOut");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #f8b500;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0 10px 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  h1 {
    align-self: center;
    justify-self: start;
    font-size: 25px;
    margin-left: 20px;
  }
  div {
    align-self: center;
    justify-self: end;
    margin-right: 20px;

    img {
      margin: auto 20px;
      cursor: pointer;
      color: black;
    }
    #add {
      transform: translateY(-2px);
    }
  }
}
</style>
