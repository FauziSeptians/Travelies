function validate(){
    var nama = document.getElementById("nama-id")
    var email = document.getElementById("email-id")

    console.log("Data Validasi")

// MULAI EDIT DARI SINI
    var flag1 = false
    var flag2 = false
    var flag3 = false
    var flag4 = false
    var flag5 = false
    // VALIDASI UNTUK NAMA
    if(nama.value.length <= 0){
        alert("Please input your name!")
    }else if(nama.value[0] != nama.value[0].toUpperCase()){
        document.getElementById('err-nama').style.display = 'block'
    }else{
        console.log(nama.value)
        document.getElementById('err-nama').style.display = 'none'
        flag1 = true
    }

    // VALIDASI UNTUK EMAIL 
    let emailsplit = email.value.split("@")
    if(!email.value){
        alert("Please input your email address!")
    }else if(!email.value.includes("@") || !emailsplit[1] || !emailsplit[1].includes(".com")){
        document.getElementById('err-email').style.display = 'block'
    }else{
        console.log(email.value)
        document.getElementById('err-email').style.display = 'none'
        flag2 = true
    }

    // VALIDASI PHONE
    let notlp = document.getElementById("tlp-id")
    if(!notlp.value){
        alert("Please input your phone number!")
    }else if(notlp.value[0] != '0'){
        document.getElementById('err-tel').style.display = 'block'
    }else{
        console.log(notlp.value)
        document.getElementById('err-tel').style.display = 'none'
        flag3 = true
    }

    // VALIDASI SERVICES
    let servis = document.getElementById("service-id")
    if(!servis.value){
        document.getElementById('err-service').style.display = 'block'
    }else{
        console.log(servis.value)
        document.getElementById('err-service').style.display = 'none'
        flag4 = true
    }

    // Validasi Massage
    let pesan = document.getElementById("pesan-id")

    if(!pesan.value){
        alert("Masukan Pesanmu untuk kami")
    }else if (pesan.value.length < 50){
        document.getElementById('err-message').style.display = 'block'
    }else{
        console.log(pesan.value)
        document.getElementById('err-message').style.display = 'none'
        flag5 = true
    }

    if ([flag1, flag2, flag3, flag4, flag5].every(flag => flag == true)){
        location.reload()
    }



// MULAI EDIT SAMPE SINI

}