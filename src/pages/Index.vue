<template>
  <q-page class="container">
    <div class="row q-col-gutter-sm">
      <div class="col-3 col-sm-4" v-for="post in posts" :key="post.id">
        <q-card class="my-card" style="min-height: 21rem">
          <q-img :src="post.jetpack_featured_media_url" style="max-height: 200px" />

          <q-card-section>
             {{ post.title.rendered }}
          </q-card-section>

          <div class="absolute-bottom">
            <q-btn color="secondary" class="full-width" @click="detalhar(post.id)">Detalhar</q-btn>
          </div> <!-- post.content.rendered -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex' // Importando o mapeamento da action

export default {
  name: 'PageIndex',
  mounted () {
    this.CLEAR_ARTIGO() // Limpando o Componente
    this.$q.loading.show() // Chamando o loading
    this.setPosts() // Disparando o método da Action
      .then(() => {
        this.$q.loading.hide() // Tirando o loading
      })
  },
  computed: {
    ...mapState('Posts', ['posts']) // Jogando os estados aqui
  },
  methods: {
    ...mapActions('Posts', ['setPosts']), // Jogando os métodos da Actions aqui
    ...mapMutations('Posts', ['CLEAR_ARTIGO']), // Jogando os métodos do Mutation aqui dentro
    detalhar (id) {
      this.$router.push({ name: 'detalhar', params: { id: id } })
    }
  }
}
</script>
