<template>
<div>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/create">Post Book</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/account">My Account</router-link>
    </nav>

<slot />

</div>
</template>

<script>
export default
{
    name: 'DefaultLayout'
}
</script>
 

<style scoped>
nav{
    display: flex;
    justify-content: space-evenly;
}

a{
    text-decoration-line: none;
}
</style>