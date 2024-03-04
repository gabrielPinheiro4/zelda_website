<template>
    <div class="jogos_container container">
        <h1>{{ jogosTitulo }}</h1>

        <div class="jogos">
            <div class="d-flex flex-column">
                <div v-for="jogo in listJogos" :key="jogo" class="jogo_link py-5">
                    <router-link
                    :to="{name: 'jogos_link', params: {
                        titulo: jogo.name, 
                        desc: jogo.description, 
                        ano: jogo.released_date,
                        dev: jogo.developer,
                        pub: jogo.publisher
                        }}" 
                    class="d-flex justify-content-between text-decoration-none text-black">
                        <h3>{{jogo.name}}</h3>
                        
                        <div class="data_arrow d-flex gap-5 align-items-center">
                            <p class="mb-0 text-body-tertiary">{{ jogo.released_date.split(',')[1] }}</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <TheLinks/>
        
    </div>
</template>

<script>
import getApi from '@/funcoes'
import { ref, onMounted } from 'vue'
import TheLinks from '@/components/TheLinks.vue'

    export default{
        name: 'JogosView',
        components: {
            TheLinks
        },
        setup() {
            let listJogos = ref([])
            let jogosTitulo = 'Games'
            
            const apiJogos = () => {
                getApi.get('/games')
                .then((res) => {
                    listJogos.value = res.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
            }

            onMounted(apiJogos)
            
            return {
                listJogos,
                jogosTitulo,
            }
        }
    }
</script>

<style lang="scss">
.jogos_container{
    margin-top: 150px;
    h1{
        font-size: 3em;
    }

    .jogos{
        .jogo_link{
            border-bottom: 2px solid #000;
            a{
                transition: .3s;
                h3{
                    font-size: 2em;
                }

                .arrow{
                    transition: .3s;
                }

                &:hover{
                    transform: scale(1.01);
                }
                &:hover .arrow{
                    transform: rotate(-32deg);
                }
            }
        }
}
}

</style>