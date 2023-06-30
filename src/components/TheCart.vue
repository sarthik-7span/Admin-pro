<template>
    <div >
        <h1>Card Detail</h1>
        <ul class="card">
            <li>{{ cart.id }}</li>
            <li>{{ cart.password }}</li>
            <li>{{ cart.username }}</li>
            <router-link to="/">Go To Home</router-link>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            cart:[]
        }
    },
    async mounted() {
        let prams = this.$route.params.id
        const data = await axios.get(`http://localhost:3000/users/${prams}`)
        this.cart = data.data
        console.log(this.cart)
    }
}
</script>
<style>
.card{
    background-color: aqua;
    width: 600px;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
}
.card li{
    font-size: 25px;
}
</style>