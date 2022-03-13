const btns = [document.querySelector('#cricket'), document.querySelector('#hockey'), document.querySelector('#yoga')];
const btnDisplay = [document.querySelector('#cricket-contain'), document.querySelector('#hockey-contain'), document.querySelector('#yoga-contain')];
console.log(btnDisplay)
// console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btnDisplay.forEach((open) => {
            console.log(e.target.className)
            console.log(open.classList.contains(e.target.className))
            let x = e.target.classList[4]
            console.log(x)
            if (open.classList.contains(e.target.className)){
                open.style = "display: block;"
            }
            else {
                open.style = "display: none;"
            }
        })
    })
})