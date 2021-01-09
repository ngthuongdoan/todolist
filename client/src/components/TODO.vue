<template>
  <li class="todo" :class="{ isComplete: todo.isComplete }">
    <div class="todo__button"><span @click="complete"></span></div>
    <div class="todo__main" @click="changeInformation">
      <p class="todo__content">{{ todo.content }}</p>
      <div class="todo__option">
        <div class="todo__schedule">
          {{ day }}
        </div>
        <div class="todo__project" v-if="project">{{ project.name }}</div>
      </div>
    </div>
  </li>
</template>

<script>
import { eventBus } from "@/main";
import dayjs from "dayjs";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    day() {
      const today = dayjs().day();
      const tomorrow = dayjs().add(1, "day").day();
      const day = dayjs(this.todo.expectedDay).day();
      console.log(day, today, tomorrow);
      return today === day
        ? "Today"
        : tomorrow === day
        ? "Tomorrow"
        : dayjs().day(day).format("dddd");
    },
    project() {
      return this.$store.getters["projectModule/getProject"].find(
        (x) => x.id === this.todo.project
      );
    },
  },
  methods: {
    async complete() {
      await this.$store.dispatch("todoModule/complete", this.todo);
    },
    async changeInformation() {
      eventBus.$emit("change-information", this.todo);
    },
  },
};
</script>

<style lang="scss">
.isComplete {
  text-decoration: line-through;
  background: #d3d3d3;
  span {
    background: #a3a3a3;
  }
}
.todo {
  margin: 10px 0px 20px 0;
  width: 90%;
  border-radius: 16px;
  box-shadow: 1px 1px 6px #00000070;
  display: grid;
  min-height: 40px;
  padding: 10px;
  grid-template-columns: 10% 90%;
  transition: 0.3s all ease;
  &__button {
    align-self: center;
    justify-self: center;
    span {
      border: 1px solid rgba(0, 0, 0, 0.438);
      width: 15px;
      height: 15px;
      display: block;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  &__content {
    font-size: 14px;
  }
  &__option {
    display: inline-flex;
    font-size: 12px;
  }
  &__schedule,
  &__project {
    padding: 2px 10px;
    margin: 5px 5px 5px 0;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.438);
  }
}
</style>
