function contar () {
    let incio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    
    if (incio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('[erro] Faltam dados')
    } else {
        let i = Number(incio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }

}