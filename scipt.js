function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length <= 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto")



        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'modelo/bebemasc.png')


            } else if (idade > 5 && idade <= 10) {
                img.setAttribute('src', 'modelo/criançamasc.png')
            } else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'modelo/adolescentemasc.png')
            } else if (idade > 18 && idade < 55) {
                img.setAttribute('src', 'modelo/homem.png')
            } else {
                img.setAttribute('src', 'modelo/velho.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'


            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'modelo/bebefem.png')

            } else if (idade > 5 && idade <= 10) {
                img.setAttribute('src', 'modelo/criançafem.png')
            } else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'modelo/adolescente.png')
            } else if (idade > 18 && idade < 55) {
                img.setAttribute('src', 'modelo/mulher.png')
            } else {
                img.setAttribute('src', 'modelo/velha.png')

            }

        }

        res.innerHTML = `Detectamos ${gênero} com idade  de ${idade} anos. `
        res.appendChild(img)


    }
}
