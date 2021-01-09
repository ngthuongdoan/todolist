<template>
  <div>
    <input v-model="content" type="text" placeholder="Input here" />
    <div class="todo__option">
      <input
        v-model="time"
        type="date"
        :min="minDate"
        :max="maxDate"
        class="todo__schedule"
      />
      <select v-model="chooseProject" class="todo__project">
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
    <button type="button" class="btn addBtn" @click="addTodo">Add</button>
    <button type="button" class="btn closeBtn" @click="closePanel">
      Close
    </button>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      content: "",
      chooseProject: "",
      time: dayjs().format("YYYY-MM-DD"),
    };
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
    async addTodo() {
      console.log(this.time);
      const todo = {
        expectedDay: this.time,
        project: this.chooseProject,
        content: this.content,
        isComplete: false,
        isOverdue: false,
        uid: this.$store.getters["userModule/getUser"].data.id,
      };
      this.$helpers.loading();

      await this.$store.dispatch("todoModule/addTodo", todo);
      this.$helpers.close();

      this.closePanel();
    },
    closePanel() {
      this.$emit("close-panel");
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &__option {
    text-align: left;
    margin-bottom: 10px;
  }
  &__schedule,
  &__project {
    padding: 2px 10px;
    margin: 0 5px 5px 10px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.438);
    cursor: pointer;
  }
}
</style>
