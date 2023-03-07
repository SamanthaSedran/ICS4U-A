<template>
    <div>
        <h1>Hello, {{ username }}. Please enter in 4 8 15 16 23 42, then press execute.</h1>
        <!--That is a Lost reference :) -->
        <button @click="logout">Logout</button>
        <router-link :to="{name: 'invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                username: window.user
            }
        },
        methods:{
            logout(){
                window.user = null;
                this.$router.push({name: 'home'})
            }
        }
    }
</script>