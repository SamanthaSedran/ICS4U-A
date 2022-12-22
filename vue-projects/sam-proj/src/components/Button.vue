<template>
    <button @click="onClick()" :style="{background: color}">{{ text }}</button>
</template>

<script>
export default{
    name:'Button-1',
    props:{
        text: String,
        color: String
    },
    methods:{
        onClick(){
            this.$emit('button-click')
        }
    }
}
</script>