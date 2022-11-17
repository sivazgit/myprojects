// register
function register(){
    uname = reg_name.value
    acno  = reg_acno.value
    pswrd = reg_pswrd.value
    balance = 2000

    // accountdetails object
     acnoDetails = {
        uname,
        acno,
        pswrd,
        balance
     }

     
     if(acno in localStorage){
        alert("already existing account")
        window.location.href = "index.html"
     }
     else{
        // store data in localstorage
        localStorage.setItem(acno,JSON.stringify(acnoDetails))
        alert("registered succesfully")
        window.location.href = "index.html"
     }
}

// login
function login(){
    // 1.fetch input values from html
    acno = login_acno.value
    pswrd = login_pswrd.value

    // 2. verify credentials
    if(acno in localStorage){
        acnoDetails = JSON.parse(localStorage.getItem(acno))
        console.log(acnoDetails.pswrd);
        if(pswrd == acnoDetails.pswrd){
            alert("login successful")
            window.location = "./home.html"
        }
        else{
            alert("incorrect password!!!")
        }

    }
    else{
        alert("account doesnot exist!!!")
    }
}
