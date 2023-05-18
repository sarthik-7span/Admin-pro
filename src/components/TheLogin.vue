<template>
    <div>
        <form @submit.prevent="login" class="login-form">
            <h2 class="title">Login karo bhai electro</h2>
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

<style>
.error-message {
    color: red;
    margin-top: 10px;
}

.login-form {
    background-color: orange;
    padding: 40px;
    max-width: 500px;
    margin: auto;
    box-shadow: 0px 0px 9px #00000091;
    border-radius: 13px;
}

.button {
    padding: 10px 39px;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: none;
    outline: none;
    border: 2px solid black;
    background: white;
    font-weight: 600;
}

.button:hover {
    background: red;
    color: white;
}

label {
    font-size: 25px;
}

.field-wrap input {
    padding: 10px;
    margin-left: 20px;
    border: none;
    font-size: 18px;

}

.field-wrap+.field-wrap {
    margin-top: 20px;
}

.title {
    font-size: 50px;
}</style>
