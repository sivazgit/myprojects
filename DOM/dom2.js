function login(){
    
    // local storage
    // 1. store data in local storage - setItem(key:string,value:string)
    user = uname.value
    localStorage.setItem("username",user)
    window.location = "./dom3.html"
}