// local storage

// to get data from local storage - getItem(key:string)
var uname = localStorage.getItem("username")
console.log(uname);
head1.innerHTML = `welcome ${uname}`

function logout(){
    // to remove data from local storage - removeItem()
    localStorage.removeItem("username")
    window.location = "dom2.html"
}