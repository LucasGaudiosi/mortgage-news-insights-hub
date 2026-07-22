// Mortgage News & Insights Hub
// JavaScript Functions


// Hero Button Scroll Function

const exploreButton = document.querySelector(".hero button");


exploreButton.addEventListener("click", function () {

    document
        .querySelector("#updates")
        .scrollIntoView({
            behavior: "smooth"
        });

});




// Future Automated News Feed

const newsContainer = document.querySelector(".news-container");


// Example structure for future AI news agent

function loadNewsArticles(articles) {


    newsContainer.innerHTML = "";


    articles.forEach(article => {


        const newsCard = document.createElement("article");

        newsCard.classList.add("news-card");


        newsCard.innerHTML = `

            <h3>${article.title}</h3>

            <p>
                ${article.description}
            </p>

            <span>
                ${article.date}
            </span>

        `;


        newsContainer.appendChild(newsCard);


    });


}



// Sample data (will later be replaced by automated agent/API)

const sampleNews = [

    {
        title: "Mortgage Rates Hold Steady",
        description:
        "Mortgage markets continue monitoring inflation data and Federal Reserve decisions.",
        date:
        "Updated Today"
    },


    {
        title: "Housing Inventory Trends",
        description:
        "New housing supply continues influencing affordability and buyer demand.",
        date:
        "Updated Today"
    },


    {
        title: "AI Transforming Mortgage Lending",
        description:
        "Automation and artificial intelligence are improving borrower experiences.",
        date:
        "Updated Today"
    }

];



// Load sample news

loadNewsArticles(sampleNews);
