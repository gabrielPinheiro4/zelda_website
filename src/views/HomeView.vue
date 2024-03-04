<template>
  <div class="home">
    <section class="first_part">
      <div 
      class="img_home_wrapper rounded-5 rounded-top-0" 
      :style="imgWrapperCssSetup">

        <img 
        ref="parallaxHomeImg" 
        :style="imgContentCssSetup" 
        class="parallax-content" 
        src="../assets/zeldaHome.jpg">
      </div>

      <div class="container d-flex flex-column text_home mt-5">

        <p 
        class="align-self-end text-body-tertiary home_desc">
        This website is made for student purposes only, enjoy
      </p>

        <h1 class="home_title"
        ref="titleRef"
        >
        The most complete website about The Legend of Zelda
      </h1>
      </div>
    </section>

    <section class="container about">
      <h2 class="h2Ref" ref="h2Ref">What is The Legend of Zelda ?</h2>

      <div :style="imgWrapperCssSetup" class="about_img_wrapper">
        <img 
        :style="imgContentCssSetup" 
        ref="parallaxAboutImg" 
        src="../assets/logo.jpeg">
      </div>

      <div class="text_about mt-5">
        <p>
          The Legend of Zelda franchise is a globally renowned and beloved 
          series of action-adventure video games, created by Nintendo. Debuting 
          in 1986, the franchise has since become an iconic and enduring part of 
          the gaming landscape. Led by the creative genius of game designer 
          Shigeru Miyamoto and Takashi Tezuka, The Legend of Zelda series is 
          celebrated for its captivating storytelling, innovative gameplay 
          mechanics, and the richly detailed fantasy world of Hyrule.
        </p>

        <p>
          At the heart of the series is the recurring protagonist, Link, who 
          embarks on a heroic quest often triggered by the kidnapping of 
          Princess Zelda and the nefarious plans of the primary antagonist, 
          Ganon. The narrative is steeped in themes of courage, wisdom, and 
          power, symbolized by the iconic Triforce.
        </p>
      </div>
    </section>

    <div class="container">
      <TheLinks/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, } from 'vue';
import SplitType from 'split-type'
import { parallax, splitAnimation } from '../funcoes.js'
import TheLinks from '@/components/TheLinks.vue';


export default {
  name: 'HomeView',
  components: {
    TheLinks
  },

  setup(){
    const titleRef = ref(null)
    const h2Ref = ref(null)
    const parallaxHomeImg = ref(null);
    const parallaxAboutImg = ref(null);
    
    const imgWrapperCssSetup = {
      width: 100 + '%',
      height: 500 + 'px',
      position: 'relative',
      overflow: 'hidden',
    };

    const imgContentCssSetup = {
        width: 100 + '%',
        height: 800 + 'px',
        position: 'absolute'
    };
    
    onMounted(() => {
      const homeTitulo = new SplitType(
        `.${titleRef.value.className}`, {types: 'char, words'}
      );
      const h2Home = new SplitType(
        `.${h2Ref.value.className}`, {types: 'char, words'}
      );

      parallax(parallaxAboutImg)
      parallax(parallaxHomeImg)
      splitAnimation(homeTitulo)
      splitAnimation(h2Home)
    })

    return {
      imgWrapperCssSetup,
      imgContentCssSetup,
      parallaxHomeImg,
      parallaxAboutImg,
      titleRef,
      h2Ref
    };
    
  },
}
</script>

<style lang="scss">
  .home{
    h1, h2{
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      .char{
        transform: translateY(115px);
      }
    }
    h1{
      max-width: 800px;
      font-size: 4em;
    }

    p{
      font-size: 1.5em;
    }

    .home_desc{
      max-width: 314px;
    }

    .about{
      margin-top: 300px;

      h2{
        font-size: 3em;
      }
    }
  }

</style>
