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
import {ref} from 'vue'
import {useRouter} from 'vue-router'
    export default{
        setup(){
            const username = ref(window.user)
            const router = useRouter()
            const logout = ()=>{
                window.user = null
                router.push({name: 'home', query:{logout: null}})
            }
            return{username, logout}
        }
    }
</script>