<template>

<div class="card_personagem rounded-4 p-5">
    <h3>{{name}}</h3>

    <div class="personagem_text pt-5">
        <p>{{description}}</p>

        <div class="genero_raca">
            <p v-if="gender != null">Gender: {{gender}}</p>
            <p v-if="race != null">Race: {{race}}</p>
        </div>
        
    </div>
</div>

</template>

<script>
export default{
    name: 'CharacterCard',
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        }
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