function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora <= 12) {
        // Caso seja de manha
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(147, 147, 233)'
    } else if (hora < 18) {
        // Caso seja de tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(148, 119, 156)'
    } else {
        // Caso seja de noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(56, 51, 58)'
    }
}
