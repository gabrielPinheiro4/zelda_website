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

    <section class="second_section mt-5">
      <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="ocarina">
            <div class="second_section_image1">
              <img ref="ocarina" src="../assets/ocarina.jpg" alt="">
            </div>
          </div>

          <div class="ocarina2 d-flex flex-column justify-content-between">
            <div class="second_section_image2 align-self-end">
              <img ref="ocarina2" src="../assets/ocarina2.jpg" alt="">
            </div>

            <p class="text-white justify-self-end">Each installment in the 
              franchise introduces players to a new iteration of Hyrule, 
              featuring dungeons, puzzles, and memorable characters. A hallmark 
              of The Legend of Zelda is the exploration of vast, interconnected 
              worlds, often facilitated by Link's signature item, the Master 
              Sword. Time travel, parallel dimensions, and the cyclical nature 
              of the hero's journey are recurring motifs, adding depth to the 
              series' lore.
            </p>
          </div>
        </div>

        <div class="breath_container d-flex justify-content-between flex-wrap">
          <p class="text-white">
            The gameplay is a blend of action, exploration, and puzzle-solving, 
            with a distinctive emphasis on acquiring tools and items to progress
             through the narrative. The musical score, composed by Koji Kondo, 
             is legendary and includes iconic tunes like the "Overworld Theme" 
             and "Zelda's Lullaby."
          </p>

          <div class="breath_img">
            <img ref="botw" src="../assets//botw.jpg" alt="">
          </div>
        </div>

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
    const ocarina = ref(null);
    const ocarina2 = ref(null);
    const botw = ref(null)
    
    const imgWrapperCssSetup = {
      width: 100 + '%',
      height: 500 + 'px',
      position: 'relative',
      overflow: 'hidden',
    };

    const imgContentCssSetup = {
        width: 100 + '%',
        height: 600 + 'px',
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
      parallax(ocarina)
      parallax(ocarina2)
      parallax(botw)
      splitAnimation(homeTitulo)
      splitAnimation(h2Home)
    })

    return {
      imgWrapperCssSetup,
      imgContentCssSetup,
      parallaxHomeImg,
      parallaxAboutImg,
      titleRef,
      h2Ref,
      ocarina,
      ocarina2,
      botw
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

    .second_section{
      background: #121212;
      padding: 300px 0;

      .second_section_image1{
        width: 650px;
        height: 600px;
        position: relative;
        overflow: hidden;

        img{
          max-width: 900px;
          right: -150px;
          height: 800px;
          position: absolute;
        }
      }

      .ocarina2{
        p{
          max-width: 500px;
          font-size: 1.3em;
        }
        .second_section_image2{
          width: 300px;
          height: 180px;
          position: relative;
          overflow: hidden;
        img{
          width: 100%;
          height: 250px;
          position: absolute;
        }
      }
      }

      .breath_container{
        margin-top: 200px;

        p{
          max-width: 500px;
        }
        .breath_img{
          width: 700px;
          height: 643px;
          position: relative;
          overflow: hidden;

          img{
            width: 900px;
            height: 843px;
            right: -100px;
            position: absolute;
          }
        }
      }
      
    }
  }

</style>
