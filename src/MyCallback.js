//Hello Callback function dengan object tanpa apply
let person = {
    nama : "arief",
    alamat : "ME",
    myBio(namaV,alamatV){
        return namaV + " " + alamatV
    }
}


let getPerson = (nama,alamat,callback,callback2)=>{
    if(typeof callback === 'function'){
       callback2(callback(nama,alamat))
    }
}

let genap = (v)=>{
    console.log(v + " adalah genap ")
}
let ganjil = (v)=>{
    console.log(v + " adalah ganji ")
}

let counter  = (callbackGenap,callbackGanjil)=>{
    for(let i = 0 ; i<10 ; i++){
        if(i % 2 === 0){
           callbackGenap(i)
        }else{
           callbackGanjil(i)
        }
    }
}

counter(genap,ganjil)

getPerson("Hello","World",person.myBio,(data)=>{
    console.log(data)
})
//Hello callback dengan object tanpa apply


//Hello callback dengan object dengan apply
// let readPerson = (nama,alamat,callback,callbackObj)=>{
//     callback.apply(callbackObj,[nama,alamat])
// }
// readPerson("Zack","White",person.myBio,person)
//Hello callback dengan object dengan apply




//Hello Callback function
let readInput = (nama)=>{
    alert('Hello , ' + nama)
}


let prosesInput = (nama,callback)=>{
    if(typeof  callback  === 'function'){
        callback(nama)
    }else{
        console.log('not a function')
    }
}

let submitData =  ()=>{
    let inputNama = document.form.nama.value
    prosesInput(inputNama,readInput)

    return false
}

