// let nama = "ichsan"

// if(nama){
//     console.log("benar");
// } else {
//     console.log("salah");
// }


// Function

// function bilangan(bil1, bil2, bil3) {

//     let hasil = bil1 + bil2 + bil3



//     // return hasil
//     console.log(hasil)
// }
// bilangan(20,50,20)

// -------------------------------------------------------------

function submitData(){
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == ''){
        return alert('Nama wajib diisi')
    } else if (email == '') {
        return alert('Email wajib diisi')
    } else if (phone == '') {
        return alert('Nomor wajib diisi')
    } else if (subject == '') {
        return alert('Subject wajib diisi')
    } else if (message == '') {
        return alert('Message wajib diisi')
    }

    let emailReceiver = 'akyuc2@gmail.com'

    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;

    a.click() // untuk menjalankan tag anchor

    let dataObject = {
        namaBelakang: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    }
}
