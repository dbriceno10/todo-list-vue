<template>
  <div class="todos">
    <h1>Lista de Tareas</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Añadir nueva tarea" />
      <button type="submit">Añadir</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="liContainer">
          <p @click="checkTodo(index)" :class="{ completed: todo.check }">{{ todo.todo }}</p>
          <button @click="removeTodo(index)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SweetAlert from './SweetAlert';
import ToastifyAlert from './ToastAlert';




export default {
  data() {
    const data = {
      newTodo: '',
      todos: []
    }
    return data
  },
  created() {
    this.loadTodos();
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ todo: this.newTodo, check: false });
        this.newTodo = '';
        this.saveTodos();
        ToastifyAlert({ text: 'Tarea Guardada' })
      } else {
        ToastifyAlert({ text: 'La tarea debe ser válida', type: 'warning' })
      }
    },
    checkTodo(index) {
      const todo = this.todos?.find(function (e, i) {
        return i === index
      })
      if (todo) {
        todo.check = !todo.check
        this.todos[index] = todo
        this.saveTodos()
      }
    },
    removeTodo(index) {
      SweetAlert({
        title: 'Eliminar Tarea',
        text: 'Desea eliminar la tarea?',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        icon: 'warning'
      }).then((result) => {
        if (result.isConfirmed) {
          this.todos.splice(index, 1);
          this.saveTodos();
          ToastifyAlert({ text: 'Tarea Eliminada', type: 'info' })
        }
      })
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    },
  },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>