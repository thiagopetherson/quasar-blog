import { HTTPClient } from 'boot/axios'

// Alterando o valor de um estado (posts)
const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('v2/posts')
      .then((resposta) => {
        commit('SET_POSTS', resposta.data) // Alterando o estado através da mutation (SET_POSTS)
        resolve(resposta.data)
      })
      .catch((erro) => {
        console.log(erro)
        reject(erro)
      })
  })
}

// Alterando o valor de um estado (artigo)
const setArtigo = ({ commit }, id) => {
  console.log(id)
  return new Promise((resolve, reject) => {
    HTTPClient.get(`v2/posts/${id}`)
      .then((resposta) => {
        commit('SET_ARTIGO', resposta.data) // Alterando o estado através da mutation (SET_POSTS)
        resolve(resposta.data)
      })
      .catch((erro) => {
        console.log(erro)
        reject(erro)
      })
  })
}

// Exportando as Actions
export {
  setPosts,
  setArtigo
}
