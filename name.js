const start = document.getElementById('start')
const user= document.getElementById('userName')
var userName = ''


start.addEventListener('click',()=>{
    userName=user.value
    localStorage.setItem('userName',userName)
    console.log(userName)
    window.location.href = "quiz.html"
})
