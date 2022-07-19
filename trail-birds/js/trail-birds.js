///////////////////////// selectors
const falconCallBtn = document.querySelector('#falcon-call-btn')
const falconCall = document.querySelector('#falcon-call')


///////////////////////// functions


///////////////////////// event listeners
falconCallBtn.addEventListener('click', () => {
    falconCall.play()
})