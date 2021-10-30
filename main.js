const header = document.querySelector('.header') //pobieranie elementu
const themeIcon = document.querySelector('.theme')

console.log("Witaj! Widzę, że znalazłeś ukrytą wiadomość dla elity ^^ Właśnie rozpoczęłeś gre, oto twoje następne zadanie 💻🧮: 01001110 01100001 01110000 01101001 01110011 01111010 00100000 01100100 01101111 00100000 01101101 01101110 01101001 01100101 00100000 01101110 01100001 00100000 01100100 01101001 01110011 01100011 01101111 01110010 01100100 01111010 01101001 01100101 00100000 01110111 01101001 01100001 01100100 01101111 01101101 01101111 11000101 10011011 11000100 10000111 00100000 00100010 01000110 01010011 01001111 01000011 01001001 01000101 01010100 01011001 00100000 00100001 01010011 01010100 01000001 01010010 01010100 00100010 ")

if (localStorage.getItem("theme") == "dark") {  //sprawdzanie domyslnego motywu
    header.classList.replace("light", "dark")
}

setTimeout(() => { //zmiana po czasie, dodawanie przejscia
    header.setAttribute("style", "transition: background 0.5s;")
}, 500)

const theme = () => { //zmienianie klasy
    if (header.classList.contains("dark")) {
        header.classList.replace("dark", "light")
        localStorage.setItem("theme", "light")
        themeIcon.innerHTML = '<i class="bx bx-brightness-half"></i>'
        themeIcon.style.background = '#000000' //ciemny
    } else {
        header.classList.replace("light", "dark")
        localStorage.setItem("theme", "dark")
        themeIcon.innerHTML = '<i class="bx bxs-brightness-half"></i>'
        themeIcon.style.background = '#ffffff' //jasny
    }
}