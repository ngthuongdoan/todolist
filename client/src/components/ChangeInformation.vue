<template>
  <div class="overlay">
    <div class="overlay__container">
      <input v-model="todo.content" type="text" placeholder="Input here" />
      <div class="todo__option">
        <input
          v-model="todo.expectedDay"
          :min="minDate"
          :max="maxDate"
          type="date"
          class="todo__schedule"
        />
        <select v-model="todo.project" class="todo__project">
          <option value=""></option>
          <option
            v-for="project in projects"
            :key="project.id"
            :value="project.id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <br />
      <button type="button" class="btn addBtn" @click="updateTodo">
        Update
      </button>
      <button type="button" class="btn deleteBtn" @click="deleteTodo">
        Delete
      </button>
      <button type="button" class="btn closeBtn" @click="closePanel">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projects() {
      const result = this.$store.getters["projectModule/getProject"];
      return result;
    },
    minDate() {
      return dayjs().day(0).format("YYYY-MM-DD");
    },
    maxDate() {
      return dayjs().day(6).format("YYYY-MM-DD");
    },
  },
  methods: {
    async deleteTodo() {
      this.$helpers.loading();
      await this.$store.dispatch("todoModule/deleteTodo", this.todo);
      this.$helpers.close();
      this.closePanel();
    },
    async updateTodo() {
      this.$helpers.loading();
      await this.$store.dispatch("todoModule/updateTodo", this.todo);
      this.$helpers.close();

      this.closePanel();
    },
    closePanel() {
      this.$emit("close-panel");
    },
  },
};
</script>