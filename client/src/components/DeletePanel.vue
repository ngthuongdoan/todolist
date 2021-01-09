<template>
  <div class="overlay">
    <div class="overlay__container">
      <img
        src="~@/assets/icon/add.svg"
        width="20px"
        style="transform: rotate(45deg); cursor: pointer"
        @click="closePanel"
        class="close"
      />
      <h1>Choose project you want to delete</h1>
      <ul>
        <li
          v-for="project in projects"
          :key="project.id"
          @click="deleteProject(project.id)"
        >
          <span :style="{ backgroundColor: project.color }"></span
          >{{ project.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      const result = this.$store.getters["projectModule/getProject"];
      return result;
    },
  },
  methods: {
    async deleteProject(id) {
      const choose = await this.$helpers.confirmSwal("Delete");
      if (choose.isConfirmed) {
        await this.$store.dispatch("projectModule/deleteProject", id);
        this.closePanel();
      }
    },
    closePanel() {
      this.$emit("close-panel");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay__container {
  position: relative;
  padding: 30px;
  h1 {
    font-size: 18px;
  }
  ul {
    padding: 10px 0 10px 20px;
    text-align: left;
    list-style-type: none;
    li {
      cursor: pointer;
      margin: 5px auto;
    }
  }
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
span {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 10px;
  transform: translateY(3px);
}
</style>
