
let imgBox = document.getElementById( 'imgBox' );
let qrImage = document.getElementById( 'qrImage' );
let qrText = document.getElementById( 'qrText' );

function generateQR(){
    if(qrText.value.length>0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        imgBox.classList.add("show-img")
    }else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
}

function downloadQR(){
    var qrCode = document.querySelector("img")
    if(qrText.value.length>0){
        var link = document.createElement('a');
        link.href = qrCode.src;
        link.download = 'qr-code.png';
        fetch(qrCode.src)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          link.href = url;
          link.click();
          window.URL.revokeObjectURL(url);
        })
    }else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
}