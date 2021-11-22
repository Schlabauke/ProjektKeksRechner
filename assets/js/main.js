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
let cookieRatio = document.getElementById("cookieRatio")



let giveMeCookies = () => {
    if (pal.value == .95) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * .95 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * .95 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else if (pal.value == 1.2) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * 1.2 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * 1.2 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else if (pal.value == 1.5) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * 1.5 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * 1.5 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else if (pal.value == 1.7) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * 1.7 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * 1.7 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else if (pal.value == 1.9) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * 1.9 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * 1.9 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else if (pal.value == 2.2) {
        if (men.checked === true) {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + menCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + menCookies() * 2.2 + " kcal"
            cookieRatio.innerHTML = cookieRatioMen() + " Kekse "
        } else {
            outPutKcal.innerHTML = "Dein Grundumsatz beträgt: " + womenCookies() + " kcal"
            outPutCookies.innerHTML = "Dein Gesamumsatz beträgt: " + womenCookies() * 2.2 + " kcal"
            cookieRatio.innerHTML = cookieRatioWomen() + " Kekse "
        }
    } else {
        outPutCookies.innerHTML = "Keksemenge kann nicht berechnet werden."
    }

}
let menCookies = () => {
    return (664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)).toFixed(2)
}
let womenCookies = () => {
    return (655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value).toFixed(2))
}
let cookieRatioMen = () => {
    return (menCookies() / 60).toFixed(2)
}
let cookieRatioWomen = () => {
    return (womenCookies() / 60).toFixed(2)
}