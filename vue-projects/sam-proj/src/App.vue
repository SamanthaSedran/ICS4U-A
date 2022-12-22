<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask"/>
    <div v-if="showAddTask">
      <AddTask @add-task="addTask"/>
      
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'


export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
    
  },
  data(){
    return{
      tasks: [],
      showAddTask: false,

    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      if(confirm('Are you sure?')){
      this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    }
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Go to LOST Fan Convention',
        day: 'April 8th at 15:16pm',
        reminder: false,
      },
      {
        id: 2,
        text: 'Push Button in Swan Again',
        day: 'Every 108 minutes',
        reminder: true,
      },
      {
        id: 3,
        text: 'Send an email to producers to convince them to do a LOST spin-off',
        day: 'Daily 6:00am',
        reminder: false,
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
