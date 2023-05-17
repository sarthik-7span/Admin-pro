<template>
    <div>
        <h1>Home</h1>
        <router-link to="/update">Update date</router-link><br/>
        <a @click="remove()" class="logout">Logout</a>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Password</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in username" :key="x.id">
                    <td>{{ x.id }}</td>
                    <td>{{ x.username }}</td>
                    <td>{{ x.password }}</td>
                    <td><router-link :to='"/update/"+ x.id'>update</router-link></td>
                    <td><button @click="deletes(x.id)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: [],
        };
    },
    async mounted() {
        let x = localStorage.getItem("user-info")
        if (!x) {
            this.$router.push({name:"TheSignup"})
        }
        
        let getdata = await axios.get("http://localhost:3000/users")
        this.username = getdata.data
    },
    methods: {
        async deletes(x) {
            await axios.delete(`http://localhost:3000/users/${x}`)
            const updated = await axios.get("http://localhost:3000/users")
            this.username = updated.data
        },
        remove() {
            localStorage.removeItem("user-info")
            this.$router.push("/login")
        }
    }
};
</script>
<style>
tr,th,td,table{
    border: 1px solid black;
    border-collapse: collapse;
}
td{
    padding: 10px;
}
.logout{
    cursor: pointer;
    background-color: green;
    color: white;
    padding: 10px;
    display: inline-block;
}
</style>