
var len = document.querySelectorAll(".btn").length;

for(var i = 0; i < len; i++){
    var btn = document.querySelectorAll("button")[i];
    btn.addEventListener('click', music);

    function music(){
        var InnerTxt = this.innerHTML;
        
        switch (InnerTxt) {
            case "Kuch Baaqi Hai":
                var audio = new Audio("./Music/Kuch Baaki Hai.mp3");
                audio.play();
                break;
            
            case "Savera Ho Rha":
                var audio = new Audio("./Music/Savera Ho Raha.mp3");
                audio.play();
                break;

            case "Mere Liye Tm Sufi Ho":
                var audio = new Audio("./Music/Mere Liye Tum Sufi Ho.mp3");
                audio.play();
                break;

            case "Hum Kho Gaye Kaha":
                var audio = new Audio("./Music/Hum Kho Gaye Kahaan.mp3");
                audio.play();
                break;
            
            default:
                break;
        }
    }
}