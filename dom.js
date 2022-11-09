
// function gambar(){
//     const imgg = document.getElementById("img1");
    
//     const gambar = document.createElement('img');
//     gambar.setAttribute("src",imgg);

//     const tampil = document.getElementById("basket");
//     tampil.appendChild(imgg);

// }

// function gambar(namafile){
//     const gambar = document.createElement('img');
//     gambar.setAttribute("src",namafile);

//     const tampil = document.getElementById("basket");
//     tampil.appendChild(gambar);

    
// }
/*
function hapus(){
    var apus = document.getElementById('basket');
    apus.removeChild(apus.childNodes[2])
}
/*
function gambar3(){
    const gambar = document.createElement('img');
    gambar.setAttribute("src","./thumbnails/flo3.jpg");

    const tampil = document.getElementById("basket");
    tampil.appendChild(gambar);
}

document.getElementById("img1").onclick = function(){gambarr()};
*/

// function gambar(ini){
//     var gambar = document.createElement('img');
//     var imgs = document.getElementById(ini);
//     gambar.setAttribute(imgs);
//     var masuk = document.getElementById("basket");
//     masuk.appendChild(gambar);
// }

function background() {
    var warna = prompt("input your color"+"");

    var background = document.getElementById('bd')
    background.setAttribute('style','background-color:'+warna);
}

function ubahwarna() {
    var wrn = prompt("input your color"+"");

    var tulisan = document.getElementById("text1");
    tulisan.setAttribute("style","color:"+wrn);
}

function hapus(id){
    const apus = document.getElementById(id);
    apus.remove();

    const hitung = document.getElementById('basket').children.length -1;
    document.getElementById('basketstat').innerHTML = "The flower basket currently contains "+hitung+ " flowers.";
}

function gambar(id,src){
    const hitung = document.getElementById('basket').children.length -1;
    const imgs = document.createElement('img');
    imgs.setAttribute('id',hitung);
    imgs.setAttribute('onclick','hapus(id)')
    imgs.setAttribute('src',src);
    const masuk = document.getElementById('basket');
    masuk.appendChild(imgs);

    
    document.getElementById('basketstat').innerHTML = "The flower basket currently contains "+hitung+ " flowers.";
}