const flexcon = document.querySelectorAll('.container')

flexcon.forEach(grow => {
    grow.addEventListener('click', () => {
        removeActiveClasses()
        grow.classList.add('active')
    })
})

function removeActiveClasses() {
    flexcon.forEach(grow => {
        grow.classList.remove('active')
    })
}