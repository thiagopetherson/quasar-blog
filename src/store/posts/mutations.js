const SET_POSTS = (state, dados) => {
  state.posts = dados // Alterando o estado (posts)
}

const SET_ARTIGO = (state, dados) => {
  state.artigo = dados // Alterando o estado (artigo)
}

const CLEAR_ARTIGO = (state) => {
  state.artigo = {} // Limpando o estado 'artigo' antes de renderizar
}

// Exportando as Mutations
export {
  SET_POSTS,
  SET_ARTIGO,
  CLEAR_ARTIGO
}
