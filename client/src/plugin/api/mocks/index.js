import { Server } from "miragejs";
import todoModule from "./modules/todo";
import projectModule from "./modules/project";

export default function({ environment = "development" } = {}) {
  return new Server({
    environment,
    routes() {
      this.get("/api/todo/today", todoModule.getToday);
      this.get("/api/todo/tomorrow", todoModule.getTommorow);
      this.get("/api/project", projectModule.getProject);
    }
  });
}
