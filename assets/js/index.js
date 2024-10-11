(async () => {
    const response = await fetch("http://localhost:3000/topics");
    const topics = await response.json();
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

loadFavourite(".");
