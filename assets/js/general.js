const darkModeButton = document.getElementById("dark-mode");
darkModeButton.addEventListener("click",function (event){
    document.body.classList.toggle('dark-mode');
})

const favouriteButton = document.getElementById("favourite-button");

favouriteButton.addEventListener("click",function (event){
    document.getElementById("favourite-bar").classList.toggle("hide");
})
