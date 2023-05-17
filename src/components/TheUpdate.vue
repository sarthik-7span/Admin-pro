<template>
    <div>
        <form @submit.prevent="Update" class="login-form">
            <h2 class="title">Update</h2>
            <div class="field-wrap">
                <label for="id">Id:</label>
                <input type="text" id="id" v-model="localdataObj.id" required>
            </div>
            <div class="field-wrap">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="localdataObj.username" required>
            </div>
            <div class="field-wrap">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="localdataObj.password" required>
            </div>
            <div class="field-wrap">
                <button type="submit" class="button">Update</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {

    data() {
        return {
            localdataObj: []
        }
    },
    methods: {
        async Update() {
            let prams = this.$route.params.id
            const update = await axios.put(`http://localhost:3000/users/${prams}`, {
                id: this.localdataObj.id,
                username: this.localdataObj.username,
                password: this.localdataObj.password
            })
            if (update.status ===200) {
                this.$router.push("/")
            }
        }
    },
    async mounted() {
        let prams = this.$route.params.id
        const update = await axios.get(`http://localhost:3000/users/${prams}`)
        this.localdataObj = update.data
        console.log(this.localdataObj)
    }
}
</script>