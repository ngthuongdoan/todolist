<template>
  <div>
    <label>
      <input
        type="text"
        placeholder="Project name..."
        class="project"
        v-model="projectName"
      />
    </label>
    <v-swatches v-model="color" popover-x="left"></v-swatches>
    <br />
    <button type="button" class="btn addBtn" @click="addProject">Add</button>
    <button type="button" class="btn closeBtn" @click="closePanel">
      Close
    </button>
  </div>
</template>

<script>
import VSwatches from "vue-swatches";
import * as fb from "@/plugin/firebase";
// Import the styles too, typically in App.vue or main.js

export default {
  data() {
    return {
      color: "#A463BF",
      projectName: "",
    };
  },
  methods: {
    async addProject() {
      const project = {
        name: this.projectName,
        color: this.color,
        uid: this.$store.getters["userModule/getUser"].data.id,
      };
      this.$helpers.loading();
      await this.$store.dispatch("projectModule/addProject", project);
      this.$helpers.close();
      this.closePanel();
    },
    closePanel() {
      this.$emit("close-panel");
    },
  },
  components: { VSwatches },
};
</script>

<style lang="scss"></style>
