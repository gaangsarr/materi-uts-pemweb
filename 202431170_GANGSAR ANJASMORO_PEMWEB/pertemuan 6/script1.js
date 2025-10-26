function cek(){
    var value = document.getElementById('price').value;

    if (isNaN(value)){
        var report = "WARNING: BUKAN ANGKA";
        alert(report);
    } else {
        if (value <= 80){
            var hasil = value * 1.11;
            alert("Hasil: " + hasil);
        } else {
            alert('PRICE LEBIH DARI 80')
        }
    }
}

function check_range(){
    var value = document.getElementById('price').value;
    var paragraph_list = document.getElementsByTagName("p");
    var first_paragraph = paragraph_list[0];
    var display;

    if (value > 80){
        display = 'block';
    } else {
        display = 'none';
    }
    
    first_paragraph.style.display = display;
}