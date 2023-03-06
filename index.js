const openCode = document.querySelector('.open')
const boxResult = document.querySelector('.box')
const eKey = document.querySelector('.key p:last-child')
const eLocation = document.querySelector('.location p:last-child')
const eWhich = document.querySelector('.which p:last-child')
const eCode = document.querySelector('.code p:last-child')
const result = document.querySelector('.result')

document.addEventListener('keydown', e => {
    openCode.classList.add('hide')
    boxResult.classList.remove('hide')
    result.innerText = e.which
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
})