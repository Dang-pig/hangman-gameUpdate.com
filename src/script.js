//hint
let hin

function hint(word) {
    hin = word.split("")[1]
}

function showHint() {
    document.getElementById(hin).click()
}

//img
let img = new Image()
let imgNum = 9
let imgCont = document.getElementById('img')
str = '<img class="img" src="images/' + imgNum + '.png" alt="' + imgNum + '">'
imgCont.innerHTML = str

//live
let lives = 19
let liveSpan = document.getElementById("lives")

function live() {
    liveSpan.innerText = lives
    checkLive()
}

function checkLive() {
    if (lives <= 9) {
        imgNum = lives
        str = '<img align="center" class="img" src="images/' + imgNum + '.png" alt="' + imgNum + '">'
        imgCont.innerHTML = str
        checkLose()
    }
}

//other
let wordLett = "a"

//words
let words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie']

//creat button
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alparr = alphabet.split("");
let r = 0
let g = 255
let b = 0
let r2 = 0
let g2 = 255
let b2 = 0

//main
main()

function main() {
    rand()
    for (let a = 0; a < 17; a++) {
        rgb(true, "b", a)
    }
    for (let a = 17; a < 26; a++) {
        rgb(false, "g", a)
    }
    live()
}

function rgb(add, co, a) {
    if (add == true) {
        if (co == "r") {
            r = r2
            r2 += 15
        } else if (co == "g") {
            g = g2
            g2 += 15
        } else {
            b = b2
            b2 += 15
        }
    } else {
        if (co == "r") {
            r = r2
            r2 -= 15
        } else if (co == "g") {
            g = g2
            g2 -= 15
        } else {
            b = b2
            b2 -= 15
        }
    }
    addButt(r, g, b, r2, g2, b2, a)
}

function addButt(r, g, b, r2, g2, b2, a) {
    const alpha_butt = document.getElementById("alpha-butt")
    alpha_butt.innerHTML += `<button id=${alparr[a]} class="butt2" style="background-image: linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r2}, ${g2}, ${b2}));font-color:linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r2}, ${g2}, ${b2})) ; border-radius: 2mm; border-image: linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r2}, ${g2}, ${b2}));"  onclick="buttClick('${alparr[a]}')"/>${alparr[a]}</button>&nbsp;`
}

//random word
function rand() {
    let numWord = Math.round(Math.random() * words.length, 1)
    let word = words[numWord - 1]
    words.splice(numWord - 1, 1) //delete the choosen word
    creatUnLine(word)
    hint(word)
    return word
}

//creat _
function creatUnLine(word) {
    let divWord = document.getElementById("guest")
    let numChar = word.split("")
    let x = 0
    for (let i = 0; i < numChar.length; i++) {
        divWord.innerHTML += '<span class="nonSele" style="color: red; font-size:100px;" id="' + x + '-char">_ </span>'
        x++
    }
    createClue(word)
    takeWord(word)
}

//createClue
function createClue(numChars) {
    let firstChar = numChars[0]
    document.getElementById("clue").innerHTML += " The first character is <span style='font-size: xx-large'>" + firstChar.toUpperCase() + "</span>"
}

//buttClick
let numLetGuessing = 0
let rights = new Audio()
let wrong = new Audio()
let plWrong = true
rights.src = "audio/haoHan.mp3"
wrong.src = "audio/doAnHai.mp3"

function takeWord(word) {
    wordLett = word
}

function buttClick(lett) {
    document.getElementById("ins").style.display = "none"
    let wordArr = wordLett.split("")
    numLetGuessing = 0
    for (let n = 0; n < wordArr.length; n++) {
        if (lett == wordArr[numLetGuessing]) {
            document.getElementById(numLetGuessing + "-char").innerText = lett
            document.getElementById(lett).disabled = true
            rights.play()
            plWrong = false
        }
        numLetGuessing++
    }
    checkWin(wordArr)
    playWrong(lett)
    plWrong = true
}

function playWrong(lett) {
    document.getElementById(lett).disabled = true
    if (plWrong) {
        wrong.play()
        lives -= 1
        live()
    } else {
        return
    }
}

//check win and lose
function checkWin(wordArr) {
    for (let i = 0; i < wordArr.length; i++) {
        if (document.getElementById(i + "-char").innerText == "_ ") {
            return false
        }
    }
    for (let i = 0; i < 26; i++) {
        document.getElementById(alparr[i]).disabled = true
    }
    document.getElementById("livesDiv").innerHTML += "<br><span class='title'>YOU WIN</span>"
}

function checkLose() {
    if (lives <= 0) {
        document.getElementById("livesDiv").innerHTML += "<br><span class='title'>YOU LOSE</span>"
        for (let i = 0; i < 26; i++) {
            document.getElementById(alparr[i]).disabled = true
        }
    }
}