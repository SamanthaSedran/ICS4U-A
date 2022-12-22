<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}
        <i @click="$emit('delete-task', id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default{
    name:'Task-1',
    props:{
        task: Object,
    },
}
</script>

<style scope>
.fas{
    color:red
}

.reminder{
    color: blue;
}
</style>