import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const HTTPClient = axios.create({
  baseURL: 'http://viladosilicio.com.br/wp-json/wp/'
})

export { HTTPClient }
