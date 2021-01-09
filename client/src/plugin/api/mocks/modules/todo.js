import dayjs from "dayjs";

const getToday = () => ({
  todos: [
    {
      id: "5fbc94a63032c23e349af95b",
      content: "Quét nhà",
      expectedDay: dayjs(),
      isCompleted: false,
      isOverdue: false,
    },
  ],
});

const getTommorow = () => ({
  todos: [
    {
      id: "5fbc94a63032c23e349af95b",
      content: "Quét nhà",
      expectedDay: dayjs().add(1, "day"),
      isCompleted: false,
      isOverdue: false,
    },
  ],
});

export default { getToday, getTommorow };
