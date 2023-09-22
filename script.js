function contar () {

    let tinicio = window.document.getElementById('txtinicio')
    let tfim = window.document.getElementById('txtfim')
    let tpasso = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')
    

    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `<p>Contando...<br></p>`
        let inicio = Number(tinicio.value)
        let fim = Number(tfim.value)
        let passo = Number(tpasso.value)
        if (passo <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            //contagem crescente
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449}`
        }
    }
        res.innerHTML += `\u{1F3C1}`
    }
}   