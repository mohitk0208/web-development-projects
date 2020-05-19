
const qr = new QRCode(document.getElementById("qr-code"),"mohit kumar");
;

function generateNewQR() {
    const value = document.getElementById("qr-value").value;

    document.getElementById("qr-code").classList.add("qr-code-reveal");
    
    document.getElementById("qr-code").style.opacity = "1";

    qr.clear();
    qr.makeCode(value);
    document.querySelector(".qr-code-reveal img").style.display ="inline";
}