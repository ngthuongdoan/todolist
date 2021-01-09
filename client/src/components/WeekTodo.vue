<template>
  <div>
    <h1 class="day">
      {{ day }} <span>{{ date }}</span>
    </h1>
    <hr />
    <ul>
      <!-- <draggable
      :list="todos"
      :options="{ group: 'todo' }"
      :emptyInsertThreshold="100"
      tag="ul"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    > -->
      <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
      <li v-for="(todo, index) in todos" :key="index">
        <TODO :todo="todo"></TODO>
      </li>
    </ul>

    <!-- </transition-group> -->
    <!-- </draggable> -->
  </div>
</template>

<script>
import dayjs from "dayjs";
import TODO from "@/components/TODO";
import draggable from "vuedraggable";
export default {
  data() {
    return {
      drag: false,
    };
  },
  props: {
    day: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    todos() {
      const result = this.$store.getters["todoModule/getTodo"];
      let value = [];
      result.forEach((todo) => {
        let weekDay = dayjs().day(this.index);
        let expectedDay = dayjs(todo.expectedDay);
        if (weekDay.isSame(expectedDay, "date")) {
          value.push(todo);
        }
      });
      return value;
    },
    date() {
      return dayjs().day(this.index).format("DD-MM-YYYY");
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    TODO,
    draggable,
  },
};
</script>

<style lang="scss" scoped>
.day {
  font-size: 18px;
  margin-top: 20px;
  span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
ul {
  min-height: 10px;
  list-style-type: none;
}
</style>
