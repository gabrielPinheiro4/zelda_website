<template>
    <div class="jogos_link container">
        <h1>{{$route.params.titulo}}</h1>
        <h4 class="text-body-tertiary">{{ $route.params.ano }}</h4>

        <div class="desc_game mt-5">
            <p class="desc">{{$route.params.desc}}</p>
            <p>Developer: {{ $route.params.dev }}</p>
            <p>Publisher: {{ $route.params.pub }}</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'JogosLinkView',
    

    setup(){
        
    }
}
</script>

<style lang="scss">
.jogos_link{
    margin-top: 150px;
    .desc_game{
        .desc{
            font-size: 1.5em;
        }
    }
}
</style>