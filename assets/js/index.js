
CacheStorage.bind()




function CheckCorrect(e){
    e.preventDefault()
    if (document.getElementById("need").value == "25/04/2025"){
        window.location.href = "/letter.html"
        console.log("preesed true")
    }
    console.log('f',document.getElementById("need").value)
}

document.getElementById("submit_1").addEventListener("click", CheckCorrect);
