<template>
  <div>
    <WeekTodo v-for="(day, index) in days" :key="day" :day="day" :index="index">
    </WeekTodo>
  </div>
</template>

<script>
import WeekTodo from "@/components/WeekTodo";
export default {
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  components: {
    WeekTodo,
  },
};
</script>

<style lang="scss" scoped></style>
