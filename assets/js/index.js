(async () => {
    const url = new URL(location.href);
    const searchParams = new URLSearchParams();
    let sort = url.searchParams.get("sort");
    let filter = url.searchParams.get("filter");
    let query = url.searchParams.get("q");
    if(sort){
        searchParams.append("_sort",sort);
        document.getElementById("sort-list").value = sort;
    }
    if(filter){
        document.getElementById("filter-list").value = filter;
    }
    if(filter && query) searchParams.append(filter,query)
    document.getElementById("search-query").value = query;
    const response = await fetch(`https://khaled-saleh-project1.onrender.com/topics?${searchParams.toString()}`);
    const topics = await response.json();
    document.getElementById("result").textContent = topics.length;
    const container = document.getElementById("main-cards-container");
    topics.forEach(topic => {
        let rating = "";
        let rating_counter = topic.rating;
        for (let i = 0; i < 5; i++) {
            if (rating_counter > 1) {
                rating += '<ion-icon name="star"></ion-icon>';
            } else {
                rating += '<ion-icon name="star-outline"></ion-icon>';
            }
            rating_counter--;
        }
        const card = `
        <div class="card">
            <a href="./pages/details.html?id=${topic.id}">
                <div class="card-image">
                    <img src="./assets/${topic.image}" alt="HTML Icon">
                </div>
                <div class="card-content">
                    <h2>${topic.category}</h2>
                    <h3>${topic.topic}</h3>
                    <div class="rating">
                        ${rating}
                    </div>
                    <p class="author">Author: ${topic.name}</p>
                </div>
            </a>
        </div>
        `
        container.innerHTML += card;
    });
})();

const loadFav = () => {
    loadFavourite(".");
}

