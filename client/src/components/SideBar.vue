<template>
  <div id="sidebar" v-if="projects">
    <nav>
      <ul>
        <router-link tag="li" to="/today" active-class="active">
          TODAY
        </router-link>
        <router-link tag="li" to="/tomorrow" exact>TOMORROW</router-link>
        <router-link tag="li" to="/week" exact>WEEK</router-link>
      </ul>
    </nav>
    <ul>
      <h2>PROJECTS</h2>
      <div class="custom-scrollbar">
        <li
          v-for="project in projects"
          :key="project.id"
          @click="toProject(project.id)"
        >
          <span :style="{ backgroundColor: project.color }"></span
          >{{ project.name }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      const result = this.$store.getters["projectModule/getProject"];
      return result;
    },
  },
  methods: {
    toProject(pid) {
      this.$router.push(`/project/${pid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  min-width: 300px;
  width: 30%;
  max-width: 600px;
  top: 0;
  bottom: 0;
  background-color: #f7f7f7;
  border: 1px solid #70707077;
  display: grid;
  grid-template-rows: 45% 55%;
  nav {
    align-self: center;
    justify-self: start;
    ul {
      margin-left: 100px;
      margin-top: 80px;
      text-align: left;
      list-style-type: none;
      li {
        color: #5c636e;
        cursor: pointer;
        margin: 20px auto;
        font-size: 16px;
        transition: 0.3s all ease-in-out;
        &:hover,
        .active {
          color: #393e46;
          font-weight: bold;
        }
      }
    }
  }
  & > ul {
    width: 100%;
    border-top: 1px solid #70707077;
    align-self: start;
    justify-self: start;
    text-align: left;
    padding-top: 20px;
    div {
      overflow: auto;
      min-height: 200px;
      height: 20%;
      max-height: 250px;
    }
    h2,
    li {
      margin-left: 100px;
      font-size: 16px;
      text-align: left;
      list-style-type: none;
    }
    li {
      cursor: pointer;
      color: #5c636e;
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
span {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 10px;
  transform: translateY(3px);
}
</style>
