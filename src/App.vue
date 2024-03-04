<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/">Zelda Insider</router-link>

      <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/jogos">Games</router-link>
          <router-link 
          class="nav-link" 
          to="/personagens">
          Characters
        </router-link>
        </div>
      </div>
      
    </div>
</nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root { 
  scroll-behavior: auto !important; 
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000;
  }
}
</style>
