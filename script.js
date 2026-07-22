/* =====================================
   Atlantic Coast Mortgage
   Mortgage News & Insights Hub
===================================== */



// ================================
// Hero Button Smooth Scroll
// ================================


const updateButton = document.querySelector(".hero .primary-btn");


if(updateButton){

    updateButton.addEventListener("click", function(e){

        e.preventDefault();

        document
        .querySelector("#updates")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}





// ================================
// Mortgage News Data
// (Will be replaced by AI Agent)
// ================================


const mortgageNews = [


{
    title:"Mortgage Rates Remain a Market Focus",

    description:
    "Mortgage professionals continue monitoring inflation data, Federal Reserve decisions, and bond market movement.",

    category:
    "Interest Rates"

},



{
    title:"Housing Inventory Shows New Trends",

    description:
    "Housing supply and affordability continue influencing buyer demand across the country.",

    category:
    "Housing Market"

},



{
    title:"Artificial Intelligence in Mortgage Lending",

    description:
    "AI automation is improving processing times, borrower communication, and operational efficiency.",

    category:
    "Technology"

}

];






// ================================
// Load News Articles
// ================================


function displayNews(news){


const container =
document.querySelector(".news-grid");



if(!container){

    return;

}



container.innerHTML="";



news.forEach(article => {


const card=document.createElement("div");


card.className="news-card";



card.innerHTML=`

<div class="news-image"></div>


<h3>
${article.title}
</h3>


<p>
${article.description}
</p>


<a href="#">
${article.category} →
</a>

`;



container.appendChild(card);



});


}





// Load Initial Articles

displayNews(mortgageNews);







// ================================
// Add Date Display
// ================================


const today =
new Date();



const formattedDate =
today.toLocaleDateString();



const dateElement =
document.createElement("p");



dateElement.innerHTML =
"Last Updated: " + formattedDate;



dateElement.style.textAlign="center";

dateElement.style.marginTop="20px";

dateElement.style.color="#555";



const updatesSection =
document.querySelector("#updates");



if(updatesSection){

updatesSection.appendChild(dateElement);

}








// ================================
// Future AI News Agent Connection
// ================================


// Later this function will:
//
// 1. Connect to news API
// 2. Send articles to AI
// 3. Generate summaries
// 4. Update website automatically
// 5. Commit changes to GitHub
//
// Example:
//
// fetch("/api/news")
// .then(response=>response.json())
// .then(data=>{
//     displayNews(data);
// });



console.log(
"Mortgage News Hub Loaded Successfully"
);
