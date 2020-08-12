<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
      <!-- conditional where if the todo item is complete, then add the class 'is-complete' to then style it with a line through the item--> 
        <input type="checkbox" v-on:change="markComplete"> <!--v-on directive is used here-->
        <p>{{todo.title}}</p>
        <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
      markComplete(){
        this.todo.completed = !this.todo.completed;
      }
    }
}
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>