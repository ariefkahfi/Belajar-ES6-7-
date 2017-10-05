"use strict";

//Hello Callback function dengan object tanpa apply
var person = {
    nama: "arief",
    alamat: "ME",
    myBio: function myBio(namaV, alamatV) {
        return namaV + " " + alamatV;
    }
};

var getPerson = function getPerson(nama, alamat, callback, callback2) {
    if (typeof callback === 'function') {
        callback2(callback(nama, alamat));
    }
};

var genap = function genap(v) {
    console.log(v + " adalah genap ");
};
var ganjil = function ganjil(v) {
    console.log(v + " adalah ganji ");
};

var counter = function counter(callbackGenap, callbackGanjil) {
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            callbackGenap(i);
        } else {
            callbackGanjil(i);
        }
    }
};

counter(genap, ganjil);

getPerson("Hello", "World", person.myBio, function (data) {
    console.log(data);
});
//Hello callback dengan object tanpa apply


//Hello callback dengan object dengan apply
// let readPerson = (nama,alamat,callback,callbackObj)=>{
//     callback.apply(callbackObj,[nama,alamat])
// }
// readPerson("Zack","White",person.myBio,person)
//Hello callback dengan object dengan apply


//Hello Callback function
var readInput = function readInput(nama) {
    alert('Hello , ' + nama);
};

var prosesInput = function prosesInput(nama, callback) {
    if (typeof callback === 'function') {
        callback(nama);
    } else {
        console.log('not a function');
    }
};

var submitData = function submitData() {
    var inputNama = document.form.nama.value;
    prosesInput(inputNama, readInput);

    return false;
};