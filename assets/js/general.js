const darkModeButton = document.getElementById("dark-mode");
darkModeButton.addEventListener("click",function (event){
    document.body.classList.toggle('dark-mode');
})

const favouriteButton = document.getElementById("favourite-button");

favouriteButton.addEventListener("click",function (event){
    document.getElementById("favourite-bar").classList.toggle("hide");
});

const loadFavourite = (path)=>{
    let favourites = localStorage.getItem("favourites") || "[]";
    let items = JSON.parse(favourites);
    if(Array.isArray(items)){
        let content = "";
        items.forEach((item)=>{
            let rating = "";
            let rating_counter = item.rating;
            for (let i = 0; i < 5; i++) {
                if (rating_counter > 1) {
                    rating += '<ion-icon name="star"></ion-icon>';
                } else {
                    rating += '<ion-icon name="star-outline"></ion-icon>';
                }
                rating_counter--;
            }
            content += `
                <div class="card">
                    <div class="card-image small">
                        <img src="${path}/assets/${item.image}" alt="CSS Icon">
                    </div>
                    <div class="card-content small">
                        <h2>${item.topic}</h2>
                        <div class="rating m-t-0">
                            ${rating}
                        </div>
                    </div>
                </div>
            `
        })
        let container = document.getElementById("favourite-container");
        container.innerHTML += content;
    }
}