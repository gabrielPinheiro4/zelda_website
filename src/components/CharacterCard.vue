<template>

<div class="card_personagem rounded-4 p-5">
    <h3>{{nome}}</h3>

    <div class="personagem_text pt-5">
        <p>{{descricao}}</p>

        <div class="genero_raca">
            <p v-if="genero != null">Gender: {{genero}}</p>
            <p v-if="raca != null">Race: {{raca}}</p>
        </div>
        
    </div>
</div>

</template>

<script>
export default{
    name: 'CharacterCard',
    props: {
        nome: String,
        descricao: String,
        genero: String,
        raca: String
    }
}
</script>

<style lang="scss">
.card_personagem{
    border: 1px solid #cecece;
    height: 620px;
    transition: .3s;
    &:hover{
        transform: scale(1.02);
    }
}
</style>