const main = document.getElementById("mainTheme")
const blackWhite = document.getElementById("blackWhite")
const darkTheme = document.getElementById("darkTheme")
const hider = document.getElementById("hider")
const choseTheme = document.getElementById("choseTheme")

const theme = document.getElementById("themeStyles")

// Noti
const clickObj = document.getElementById("clickObj")
const circle1 = document.getElementById("circle1")
const circle2 = document.getElementById("circle2")
const circle3 = document.getElementById("circle3")
const okBtn = document.getElementById("okBtn")

okBtn.addEventListener('click',function () {
    clickObj.style.display = "none"
    circle1.style.display = "none"
    circle2.style.display = "none"
    circle3.style.display = "none"
})

main.addEventListener('click', function () {
    hider.style.display = "none"
    choseTheme.style.display = "none"
    blackWhite.classList.remove("chosen")
    darkTheme.classList.remove("chosen")
    main.classList.add("chosen")
    theme.innerHTML = ":root {\n" +
        "  --wrapper-border: url(\"data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: rgb(154, 154, 154); stroke-width: 6; stroke-dasharray: 20 20'/></svg>\");\n" +
        "  --blades-image: url(\"../../resourсes/вентилятор.svg\");\n" +
        "  --struct-background: url(\"../../resourсes/стена.svg\");\n" +
        "  --floor-image: url(\"../../resourсes/кирпич.svg\");\n" +
        "  --val-image: url(\"../../resourсes/вентель.svg\");\n" +
        "  --pump-image: url(\"../../resourсes/насос.svg\");\n" +
        "  --wrapper-bg-color: rgba(231, 220, 208, 0.2);\n" +
        "  --barr-watercolor: rgba(209, 209, 255, 0.5);\n" +
        "  --water-color: rgb(209, 209, 255);\n" +
        "  --main-border-color: #656565;\n" +
        "  --pump-light-color: #d03c3c;\n" +
        "  --main-text-color: #656565;\n" +
        "}"
})
blackWhite.addEventListener('click', function () {
    hider.style.display = "none"
    choseTheme.style.display = "none"
    main.classList.remove("chosen")
    darkTheme.classList.remove("chosen")
    blackWhite.classList.add("chosen")
    theme.innerHTML = ":root {\n" +
        "  --wrapper-border: url(\"data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: black; stroke-width: 6; stroke-dasharray: 20 20'/></svg>\");\n" +
        "  --blades-image: url(\"../../resourсes/вентилятор ЧБ.svg\");\n" +
        "  --struct-background: url(\"../../resourсes/стена ЧБ.svg\");\n" +
        "  --floor-image: url(\"../../resourсes/кирпич ЧБ.svg\");\n" +
        "  --val-image: url(\"../../resourсes/вентель ЧБ.svg\");\n" +
        "  --pump-image: url(\"../../resourсes/насос ЧБ.svg\");\n" +
        "  --wrapper-bg-color: #fff;\n" +
        "  --barr-watercolor: rgba(147, 147, 147, 0.5);\n" +
        "  --water-color: rgb(147, 147, 147);\n" +
        "  --main-border-color: #000000;\n" +
        "  --main-text-color: #000000;\n" +
        "}"
})
darkTheme.addEventListener('click', function () {
    hider.style.display = "none"
    choseTheme.style.display = "none"
    main.classList.remove("chosen")
    blackWhite.classList.remove("chosen")
    darkTheme.classList.add("chosen")
    theme.innerHTML = ":root {\n" +
        "  --wrapper-border: url(\"data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: rgb(218, 218, 218) ; stroke-width: 6; stroke-dasharray: 20 20'/></svg>\");\n" +
        "  --blades-image: url(\"../../resourсes/вентилятор.svg\");\n" +
        "  --struct-background: url(\"../../resourсes/стена dark.svg\");\n" +
        "  --floor-image: url(\"../../resourсes/кирпич.svg\");\n" +
        "  --val-image: url(\"../../resourсes/вентель.svg\");\n" +
        "  --pump-image: url(\"../../resourсes/насос.svg\");\n" +
        "  --wrapper-bg-color: #363333;\n" +
        "  --barr-watercolor: rgba(91, 105, 144, 0.5);\n" +
        "  --water-color: rgb(91, 105, 144);\n" +
        "  --main-border-color: #656565;\n" +
        "  --main-text-color: #656565;\n" +
        "}"
})

