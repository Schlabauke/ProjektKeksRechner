/* Grundumsatz bei Männern (Kalorien je Tag)
664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
Grundumsatz bei Frauen (Kalorien je Tag)
655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz
! Das Ergebnis wird in Kilokalorien ausgegeben. */
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let age = document.getElementById("age")
let men = document.getElementById("men")
let women = document.getElementById("women")
let pal = document.getElementById("pal")
let outPutKcal = document.getElementById("outputKcal")
let outPutCookies = document.getElementById("outputCookies")



let giveMeCookies = () => {
    if (pal.value == .95) {
        console.log("Wuhuuu")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * .95 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * .95 + " Kekse"
        }
    } else if (pal.value == 1.2) {
        console.log("Nur Sitzen und Liegen")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * 1.2 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * 1.2 + " Kekse"
        }
    } else if (pal.value == 1.5) {
        console.log("Yeah!")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * 1.5 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * 1.5 + " Kekse"
        }
    } else if (pal.value == 1.7) {
        console.log("Kekse")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * 1.7 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * 1.7 + " Kekse"
        }
    } else if (pal.value == 1.9) {
        console.log("Puhhh")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * 1.9 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * 1.9 + " Kekse"
        }
    } else if (pal.value == 2.2) {
        console.log("I've must have called a thousand times")
        if (men.checked === true) {
            outPutKcal.innerHTML = menCookies() + " Kekse"
            outPutCookies.innerHTML = menCookies() * 2.2 + " Kekse"
        } else {
            outPutKcal.innerHTML = womenCookies() + " Kekse"
            outPutCookies.innerHTML = womenCookies() * 2.2 + " Kekse"
        }
    } else {
        outPutCookies.innerHTML = "Keksemenge kann nicht berechnet werden."
    }

}
let menCookies = () => {
    return ((664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)).toFixed(2))
}
let womenCookies = () => {
    return ((655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value).toFixed(2)))
}
