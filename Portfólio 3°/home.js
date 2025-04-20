function redirectAtivs(){

    window.location.href = "atividades.html"
}

function redirectContate(){

    window.location.href = "contate.html"
}

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')

        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.cardCurriculo')

elements.forEach((element) => myObserver.observe(element))

///////////////////////////////////////////////////////////

const meuObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')

        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elemento = document.querySelectorAll('.portfoliosAntigos')

elemento.forEach((element) => myObserver.observe(element))