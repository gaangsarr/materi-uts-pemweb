function validate(){
    var value = document.getElementById('price').value;

    if (isNaN(value)){
        var report = "WARNING: BUKAN ANGKA";
        alert(report);
    } else {
        var report = "ANGKA";
        alert(report);
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
    console.log(value)
}

function hitungPajak(){
    var value = document.getElementById('price').value;

    if (value <= 80){
        var hasil = value * 1.11;
    } else {
        alert('PRICE LEBIH DARI 80')
    }
    
    
    alert("Hasil: " + hasil);
    console.log(value)
}