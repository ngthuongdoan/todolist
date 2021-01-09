<template>
  <div>
    <AddPanel v-if="isAdd" @close-panel="isAdd = !isAdd"></AddPanel>
    <DeletePanel
      v-if="isDelete"
      @close-panel="isDelete = !isDelete"
    ></DeletePanel>
    <Header
      @add-panel="isAdd = !isAdd"
      @delete-panel="isDelete = !isDelete"
    ></Header>
    <ChangeInformation
      v-if="isChangeTodo"
      :todo="modifiedTodo"
      @close-panel="isChangeTodo = false"
    ></ChangeInformation>
    <div id="container">
      <SideBar></SideBar>
      <router-view class="main custom-scrollbar"></router-view>
    </div>
  </div>
</template>

<script>
import AddPanel from "@/components/AddPanel";
import DeletePanel from "@/components/DeletePanel";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import ChangeInformation from "@/components/ChangeInformation";

import { eventBus } from "@/main";

export default {
  data() {
    return {
      isAdd: false,
      isDelete: false,
      isChangeTodo: false,
      modifiedTodo: {},
    };
  },
  created() {
    eventBus.$on("change-information", (todo) => {
      this.isChangeTodo = true;
      this.modifiedTodo = Object.assign({}, todo);
    });
  },
  components: {
    Header,
    SideBar,
    AddPanel,
    DeletePanel,
    ChangeInformation,
  },
};
</script>


<style lang="scss">
#container {
  display: grid;
  grid-template-columns: 30% 70%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.main {
  margin-top: 80px;
  padding-left: 10px;
  text-align: left;
  overflow: scroll;
  overflow-x: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: grid;
  align-content: center;
  justify-content: center;
  &__container {
    position: relative;
    padding: 20px;
    background: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349);
    img:not(.close) {
      margin: auto 30px;
      padding: 10px;
      border: 1px solid rgb(228, 228, 228);
      background-color: rgb(250, 250, 250);
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    input[type="text"]:not(.project) {
      padding: 10px 15px;
      min-width: 400px;
      margin-bottom: 10px;
      display: block;
      border: 1px solid rgb(179, 179, 179);
    }
    .project {
      padding: 10px 15px;
      min-width: 400px;
      margin-bottom: 10px;
      border: 1px solid rgb(179, 179, 179);
      display: inline-flex;
    }
    .vue-swatches__trigger {
      margin-left: 10px;
      transform: translateY(40%);
    }
    .btn {
      padding: 10px 15px;
      margin: auto 10px;
      border: none;
      background: none;
      font-weight: bold;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349);
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      outline: none;
    }
    .addBtn {
      background-color: #f8b500;
      &:hover,
      &:focus {
        background-color: #e6a800;
      }
    }
    .deleteBtn {
      background-color: #f54646;
      &:hover,
      &:focus {
        background-color: #f83333;
      }
    }
    .closeBtn {
      background-color: #f7f7f7;
      &:hover,
      &:focus {
        background-color: #ececec;
      }
    }
  }
}
</style>
