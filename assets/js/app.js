// Water flow
const fromPump       = document.getElementById("fromPump")
const outside        = document.getElementById("outside")
const toTheBarrel    = document.getElementById("toTheBarrel")
const level          = document.getElementById("level")
const barrLevel      = document.getElementById("barrLevel")
// Valves
const topVal         = document.getElementById("topVal")
const topValCheck    = document.getElementById("topValCheck")
const botVal         = document.getElementById("botVal")
const botValCheck    = document.getElementById("botValCheck")
// Pump
const pumpCheck      = document.getElementById("pumpCheck")
const pumpLed        = document.getElementById("pumpLed")
const pumpBlades     = document.getElementById("pumpBlades")

const stylesBarrel   = document.getElementById("stylesBarrel")
const stylesWaterIn  = document.getElementById("stylesWaterIn")
const stylesWaterOut = document.getElementById("stylesWaterOut")

topVal.addEventListener('click' , function () {
    if (topValCheck.checked === false) {
        topValCheck.checked = true
        topVal.style.animation = "bot-val-open .5s linear 1 forwards"
    } else if(topValCheck.checked === true){
        topValCheck.checked = false
        topVal.style.animation = "bot-val-close .5s linear 1 forwards"
    }
})

botVal.addEventListener('click', function () {
    if (botValCheck.checked === false){
        botValCheck.checked = true
        botVal.style.animation = "bot-val-open .5s linear 1 forwards"
        waterInTheBarrel()
    } else if (botValCheck.checked === true) {
        botValCheck.checked = false
        botVal.style.animation = "bot-val-close .5s linear 1 forwards"
        waterBack()
    }
})

pumpBlades.addEventListener('click', function () {
    if(pumpCheck.checked === false){
        pumpCheck.checked = true
        pumpLed.style.background = "rgb(26,255,0)"
        pumpBlades.style.animation = "blades-fury 1s linear infinite"
    } else if(pumpCheck.checked === true) {
        pumpCheck.checked = false
        pumpLed.style.background = "rgb(255, 0, 0)"
        pumpBlades.style.animationPlayState = "paused"
    }
})

setInterval(function () {
    if(botValCheck.checked === true) {
        if(pumpCheck.checked === false){
            fromPump.style.animationPlayState = "paused"
            waterReceive()
        } else if(pumpCheck.checked === true){
            fromPump.style.animation = "pumped-up 3s linear 1 forwards"
            if(topValCheck.checked === true){
                pauseWaterLevels()
            } else if (topValCheck.checked === false && outside.offsetWidth === 85){
                waterReceive()
            }
        }
    } else if (botValCheck.checked === false){
        if(pumpCheck.checked === false){
            pauseWaterLevels()
            fromPump.style.animationPlayState = "paused"
        } else if (pumpCheck.checked === true){
            if(barrLevel.offsetHeight > 0){
                if(outside.offsetWidth === 85){
                    pauseWaterLevels()
                } else {
                    waterLess()
                    fromPump.style.animation = "pumped-up 3s linear 1 forwards"
                }
            }
        }
    }

    if(level.offsetHeight <= 43){
        level.style.background = "rgb(25, 255, 0)"
    } else if (level.offsetHeight >= 44 && level.offsetHeight <= 85){
        level.style.background = "rgb(255,183,0)"
    } else if (level.offsetHeight >= 86){
        level.style.background = "rgb(255,0,0)"
    }

    if(fromPump.offsetHeight >= 223){
        if(barrLevel.offsetHeight <= 0){
            topWaterBack()
        }
        if(topValCheck.checked === true){
            if(pumpCheck.checked === true && barrLevel.offsetHeight > 0){
                waterOutside()
            } else if(pumpCheck.checked === false && outside.offsetWidth === 85){
                outside.style.animationPlayState = "paused"
            }
        } if (topValCheck.checked === false){
            topWaterBack()
        }
    }
}, 40)

function pauseWaterLevels() {
    barrLevel.style.animationPlayState = "paused"
    level.style.animationPlayState = "paused"
}

function waterReceive() {
    pauseWaterLevels()
    let barrLevelNow = barrLevel.offsetHeight
    let levelNow = level.offsetHeight
    let secondsLeftBarr = 10
    let secondsLeftLevel = 10
    levelNow = Math.round(levelNow)

    stylesBarrel.innerHTML = "@keyframes level-up {\n" +
        "    from {\n" +
        "        height: "+ levelNow +";\n" +
        "    }\n" +
        "    to {\n" +
        "        height: 130px;\n" +
        "    }\n" +
        "}" + "@keyframes barr-filling {\n" +
        "  from {height: "+ barrLevelNow +";}\n" +
        "  to {height: 170px;}\n" +
        "}"

    barrLevel.style.animation = "barr-filling "+ secondsLeftBarr +"s linear 1 forwards"
    level.style.animation = "level-up "+ secondsLeftLevel +"s linear 1 forwards"
}

function waterLess() {
    pauseWaterLevels()
    let barrLevelNow = barrLevel.offsetHeight
    let levelNow = level.offsetHeight
    barrLevelNow = barrLevelNow.toFixed(2)
    levelNow = levelNow.toFixed(2)
    let secondsLeftBarr = 10
    let secondsLeftLevel = 10

    stylesBarrel.innerHTML = "@keyframes level-down {\n" +
        "    from {\n" +
        "        height: "+ levelNow +"px;\n" +
        "    }\n" +
        "    to {\n" +
        "        height: 0;\n" +
        "    }\n" +
        "}" + "@keyframes barr-devastation {\n" +
        "    from {height: "+ barrLevelNow +"px;}\n" +
        "    to {height: 0;}\n" +
        "}"

    barrLevel.style.animation = "barr-devastation "+ secondsLeftBarr +"s linear 1 forwards"
    level.style.animation = "level-down "+ secondsLeftLevel +"s linear 1 forwards"
}

function waterBack() {
    toTheBarrel.style.animationPlayState = "paused"
    let waterNow = toTheBarrel.offsetWidth
    waterNow = Math.round(waterNow)
    let secondsLeftWaterBack = 1
    stylesWaterIn.innerHTML = "@keyframes bot-water-back {\n" +
        "    from {width: "+ waterNow +"px;}\n" +
        "    to {width: 160px;}\n" +
        "}"
    toTheBarrel.style.animation = "bot-water-back "+ secondsLeftWaterBack +"s linear 1 forwards"
}

function waterInTheBarrel() {
    toTheBarrel.style.animationPlayState = "paused"
    let waterNow = toTheBarrel.offsetWidth
    waterNow = Math.round(waterNow)
    let secondsLeftWaterBack = 1
    stylesWaterIn.innerHTML = "@keyframes bot-water-in-barrel {\n" +
        "  from {width: "+ waterNow +"px;}\n" +
        "  to {width: 255px;}\n" +
        "}"
    toTheBarrel.style.animation = "bot-water-in-barrel "+ secondsLeftWaterBack +"s linear 1 forwards"
}

function waterOutside() {
    outside.style.animationPlayState = "paused"
    let outsideWaterNow = outside.offsetWidth
    outsideWaterNow = Math.round(outsideWaterNow)
    let secondsLeftTopWaterBack = 4
    stylesWaterOut.innerHTML = "@keyframes water-outside {\n" +
        "  from {width: "+ outsideWaterNow +"px;}\n" +
        "  to {width: 382px;}\n" +
        "}"
    outside.style.animation = "water-outside "+ secondsLeftTopWaterBack +"s linear 1 forwards"
}

function topWaterBack() {
    outside.style.animationPlayState = "paused"
    let outsideWaterNow = outside.offsetWidth
    outsideWaterNow = Math.round(outsideWaterNow)
    let secondsLeftTopWaterBack = 4
    stylesWaterOut.innerHTML = "@keyframes water-outside-back {\n" +
        "  from {width: "+ outsideWaterNow +"px;}\n" +
        "  to {width: 85px;}\n" +
        "}"
    outside.style.animation = "water-outside-back "+ secondsLeftTopWaterBack +"s linear 1 forwards"
}