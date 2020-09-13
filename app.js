const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      newTodo: '',
      todos: []
    },
    methods:
    {
        addTodo(){
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            console.log(this.newTodo);

            this.newTodo = '';
        }
    }
  })
 
