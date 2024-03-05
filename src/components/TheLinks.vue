<template>
    <div class="links d-flex justify-content-between">
        <router-link to="/personagens">Explore characters</router-link>
        <router-link to="/jogos">Explore games</router-link>
    </div>
</template>

<script>
    export default{
        name: 'TheLinks'
    }
</script>

<style lang="scss">
    .links{
        margin-top: 300px;
        font-size: 3em;

        a{
            color: #000;

            &:hover{
                color: #4c4c4c;
            }
        }
    }
</style>