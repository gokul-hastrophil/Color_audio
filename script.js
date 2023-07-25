const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(0, 247, 255)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpEju7LmcBaLHIcGbX12xDBzeCySE2_IqXg&usqp=CAU')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Thatti ulla yaaru paar.."
    }, 800)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(238, 255, 0, 0.3), rgb(16, 204, 229)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRX5KXNJh3tdeBuQFLRx3qeUDVnOOuyeDTA&usqp=CAU')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Thatti vitta thaaru maaru..!"
    }, 900)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0, 18, 0, 0.3), rgb(255, 255, 255)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g1ORtsd9-QWDcdQBHXheTvarNA3Lz6dwvw&usqp=CAU')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Thatti ulla yaaru paar..!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(18, 0, 0, 0.3), rgb(249, 244, 248)18),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnxzBvk96EJPg2G5G8m-Hb-m5OigpBFR99A&usqp=CAU')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Thala Ajith"
    }, 800)
    
}

setInterval(changeText, 1000)
const bgAudio = document.getElementById("bgAudio");

        // Play the audio
        function playAudio() {
            bgAudio.play();
        }

        // Pause the audio
        function pauseAudio() {
            bgAudio.pause();
        }

        // Stop the audio and reset it to the beginning
        function stopAudio() {
            bgAudio.pause();
            bgAudio.currentTime = 0;
        }