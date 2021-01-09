<template>
  <div class="overlay">
    <div class="overlay__container">
      <components :is="addComponent" @close-panel="closePanel"></components>
      <div v-if="!isClick">
        <img
          src="~@/assets/icon/add.svg"
          width="20px"
          style="transform: rotate(45deg); cursor: pointer"
          @click="closePanel"
          class="close"
        />
        <img
          src="~@/assets/icon/todo_black.png"
          @click="
            addComponent = 'AddTodo';
            isClick = true;
          "
        />
        <img
          src="~@/assets/icon/project_black.png"
          @click="
            addComponent = 'AddProject';
            isClick = true;
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import AddProject from "@/components/AddProject";
export default {
  data() {
    return {
      addComponent: "",
      isClick: false,
    };
  },
  methods: {
    closePanel() {
      this.$emit("close-panel");
    },
  },
  components: {
    AddTodo,
    AddProject,
  },
};
</script>
