<template>
    <div>
        <form @submit.prevent="signup" class="login-form" autocomplete="off">
            <h2 class="title">SignUp</h2>
            <div class="field-wrap">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="field-wrap">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="field-wrap">
                <button type="submit" class="button">Signup</button>
            </div>
        </form>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async signup() {
            const sign = await axios.post("http://localhost:3000/users", {
                username: this.username,
                password: this.password,
            })
            console.log(sign)
             if (sign.status === 201) {
                localStorage.setItem("user-info", JSON.stringify(sign.data))
                this.$router.push({ name: 'TheHome' })
            }
        }
    }
};
</script>