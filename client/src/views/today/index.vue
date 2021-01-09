<template>
  <div v-if="todos">
    <TODO v-for="todo in todos" :key="todo.id" :todo="todo"></TODO>
  </div>
</template>

<script>
import dayjs from "dayjs";
import TODO from "@/components/TODO";

export default {
  computed: {
    todos() {
      const result = this.$store.getters["todoModule/getTodo"];
      let value = [];
      result.forEach((todo) => {
        let today = dayjs();
        let expectedDay = dayjs(todo.expectedDay);
        if (today.isSame(expectedDay, "date")) {
          value.push(todo);
        }
      });
      return value;
    },
  },
  components: {
    TODO,
  },
};
</script>

<style></style>
