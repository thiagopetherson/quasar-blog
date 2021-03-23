import { Loading, QSpinnerAudio } from 'quasar' // Importando o Loading e o Spinner de audio

export default async ({ Vue }) => {
  Vue.prototype.$speechTalk = (text) => {
    const speech = new SpeechSynthesisUtterance() // SpeechSynthesisUtterance é a webapi que utilizaremos
    speech.lang = 'pt-BR' // Linguagem da Webapi
    speech.text = text // Texto que receberá
    speech.volume = '1' // Volume
    speech.rate = 1 // Velocidade
    speech.pitch = 1 // Velocidade da voz

    // Para toda hora que dispararmos, ler um load
    setTimeout(() => {
      window.speechSynthesis.speak(speech)
    }, 300)

    // Quando a fala iniciar, o que quero que aconteça
    speech.addEventListener('start', () => {
      Loading.show({
        delay: 0,
        spinner: QSpinnerAudio, // Tipo de animação no loading
        backgroundColor: 'secondary'
      })
    })

    // Quando a fala parar, o que quero que aconteça
    speech.addEventListener('end', () => {
      Loading.hide() // Ocultando o loading
    })
  }
}
