function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value == 0) {
        alert('[erro] digite um numero!')
    } else {
        let c = 1
        let n = Number(num.value)
        tab.innerHTML = ``
        while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
        }
    }
}