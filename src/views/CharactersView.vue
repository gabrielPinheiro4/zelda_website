<template>

<div class="personagens container">
    <h1>Characters</h1>

    <div class="personagnes_cards row d-flex flex-wrap">
        <div class="col-xl-4 mt-4"
        v-for="personagem in personagensList" :key="personagem">
            <CharacterCard v-bind="personagem"/>
        </div>
    </div>
</div>

</template>

<script>
import { ref, onBeforeMount } from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import getApi from '@/funcoes';

export default{
    name: 'CharactersView',
    components: {
        CharacterCard
    },
    setup(){
        let personagensList = ref([]);

        const personagens = getApi.get('/characters')
        .then((res) => {
            personagensList.value = res.data.data;
        })
        .catch((error) => {
            console.log(error);
        })

        onBeforeMount(() => personagens)

        return {
            personagensList,
            personagens
        }
    }

}

</script>

<style lang="scss">

.personagens{
    margin-top: 150px;
}

</style>
