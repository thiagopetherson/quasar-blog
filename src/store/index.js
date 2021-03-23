import Vue from 'vue' // Importando o Vue
import Vuex from 'vuex' // Importando o Vuex

import Posts from './posts' // Importando o módulo

Vue.use(Vuex)

// Store é uma função que está dentro de Vuex. Estamos criando essa função construtora passando um objeto...
// Objeto esse que passa os parâmetros para configurarmos o Vuex

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Posts
    }
  })

  return Store
}
