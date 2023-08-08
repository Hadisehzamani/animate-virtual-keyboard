window.addEventListener('keydown', function(e){
    let title = this.document.querySelector('.title')
    if(e.code == 'Backspace'){
        let currentText = title.innerHTML
        title.innerHTML = currentText.slice(0, -1)
    }else {
        title.innerHTML += e.key
    }

    let userKey = e.key.toUpperCase()
    let userKeyId = this.document.getElementById(userKey)
    
    userKeyId.classList.add('hit')
    userKeyId.addEventListener('animationend', function(){
        userKeyId.classList.remove('hit')
    })

    
})

