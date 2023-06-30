<template>
    <div>
        <form @submit.prevent="login" class="login-form">
            <h2 class="title">Login</h2>
            <div class="field-wrap">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="field-wrap">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="field-wrap">
                <button type="submit" class="button">Login</button>
            </div>
        </form>
        <router-link to="/signup">Sign UP</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            const login = await axios.get(`http://localhost:3000/users?email=${this.username}&password=${this.password}`)
            console.log(login.data[0])
            if (login.status === 200 && login.data.length > 0) {
                localStorage.setItem("user-info",JSON.stringify(login.data[0]))
                this.$router.push({name:'TheHome'})
            }
        }
    },
    mounted() {
        const localdata = localStorage.getItem("user-info")
        if (localdata) {
            this.$router.push("/")
        }
    }
};
</script>
