<template>
    <div class="popup">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, World!'
        };
    }
};
</script>

<style scoped>
.popup {
    padding: 20px;
}
</style>