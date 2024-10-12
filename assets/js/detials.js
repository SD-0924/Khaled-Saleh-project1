(async()=>{
    let url = new URL(location.href);
    const id = url.searchParams.get("id");
    const response = await fetch(`https://khaled-saleh-project1.onrender.com/topics/${id}`);
    const topic = await response.json();
    let rating = "";
    let rating_counter = topic.rating;
    for (let i = 0; i < 5; i++) {
        if (rating_counter > 1) {
            rating += '<ion-icon name="star"></ion-icon>\n';
        } else {
            rating += '<ion-icon name="star-outline"></ion-icon>\n';
        }
        rating_counter--;
    }
    let subtopics = "";
    topic.subtopics.forEach(subtopic => {
        subtopics += `<li><ion-icon name="checkmark-circle-outline"></ion-icon> ${subtopic}</li>`;
    });
    let content = `
        <section class="main-section position-relative gap-4 flex j-center">
            <div class="article w-50">
                <div class="article-content flex j-between">
                    <div class="article-content-desc">
                        <h3>${topic.category}</h3>
                        <div class="flex a-center gap-2">
                            <h2>${topic.topic}</h2>
                            <p class="topic-title hidden-topic"><span>by</span> <a href="#">${topic.name}</a></p>
                        </div>
                        <div class="rating">
                            ${rating}
                        </div>
                    </div>
                    <div class="topic-body hidden-topic">
                        <button class="btn-add-favourites w-100 flex a-center j-center gap-1">Add to Favourites <ion-icon name="heart-outline"></ion-icon></button>
                    </div>
                </div>
                <div class="description">
                    ${topic.description}
                </div>
            </div>
            <img class="backgroundimg" src="../assets/${topic.image}" alt="">
            <aside class="details-card">
                <div class="card-info-container">
                    <div class="card-info-content">
                        <img class="w-100" src="../assets/${topic.image}" alt="">
                        <div class="card-desc">
                            <p class="topic-title"><span>HTML</span> by <a href="#">${topic.name}</a></p>
                            <div class="topic-body">
                                <p class="topic-question">Interested about this topic?</p>
                                <button class="btn-add-favourites w-100 flex a-center j-center gap-1">Add to Favourites <ion-icon name="heart-outline"></ion-icon></button>
                                <p class="credits">Unlimited Credits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
        <section class="subtopics-section gap-4 flex j-center">
            <div class="subtopics-content w-50">
                <ul class="subtopics-list">
                    <li><h2>HTML Sub Topics</h2></li>
                    ${subtopics}
                  </ul>
            </div>
            <div class="details-card">
            </div>
        </section>
    `
    const container = document.getElementById("main-details");
    container.innerHTML += content;
    addToFavourite(topic);
})()


const addToFavourite = (topic) => {
    const addFavouriteButtons = document.querySelectorAll(".btn-add-favourites");
    addFavouriteButtons.forEach((fav_button)=>{
        fav_button.addEventListener("click",function (event){
            let favourites = localStorage.getItem("favourites") || "[]";
            let items = JSON.parse(favourites);
            if(Array.isArray(items)){
                let item = items.find((item) => item.id == topic.id);
                if(!item){
                    items.push(topic)
                    localStorage.setItem("favourites", JSON.stringify(items));
                }
            }
        });
    })
}

const loadFav = () => {
    loadFavourite("..");
}
