'use stratic'

 async function buscarImagens(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

async function criarImagem(){
    
    const main = document.getElementById('main')
    main.innerHTML = ''
    const raca = document.getElementById('racaInput').value

    const fotos = await buscarImagens(raca)

    fotos.forEach((url) => {
        const img = document.createElement('img')
        img.src = url

        main.appendChild(img)
    })

}