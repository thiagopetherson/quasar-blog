<template>
  <q-page padding>
      <span class="text-h2">{{ artigo.title.rendered }}</span>
      <div class="row">
          <div class="col" v-html="artigo.content.rendered">

          </div>
      </div>

      <q-page-sticky position="top-right" :offset="[18, 18]"> <!-- Botão de fala -->
          <button style="background-color: red; color: white; font-weight: bold" @click="sintetizarFala()">OUÇA A PALAVRA</button> <!-- Com q-btn o Speech não estava funcionando -->
      </q-page-sticky>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Detalhar',
  data () {
    return {
      id: 0 // Pegando o parâmetros id da rota
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.setArtigo(this.id) // Disparando a Action no momento que a página estiver sendo carregada
  },
  computed: {
    ...mapState('Posts', ['artigo'])
  },
  methods: {
    ...mapActions('Posts', ['setArtigo']),
    sintetizarFala () { // Método para capturar a fala
      this.$speechTalk(window.getSelection().toString()) // Utilizando o Prototype que está em speech.js
    }
  }
}
</script>
