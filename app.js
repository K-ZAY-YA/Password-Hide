let t = document.getElementById('pass')
let b = document.getElementById('btn')
let c = document.getElementById('icon')

function hide(){
    if(t.type === 'text'){
        t.type = 'password'
        c.className = 'fa-regular fa-eye-slash'
    } else {
        t.type = 'text'
        c.className = 'fa-solid fa-eye'
    }
}