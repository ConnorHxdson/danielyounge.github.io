// Hide both sections on page load
window.onload = function () {
    document.getElementById("newContent").style.display = "none";
    document.getElementById("filterContent").style.display = "none";
};

/* 
   SHOW / HIDE FILTER MENU
*/
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    // Hide add form if open
    newForm.style.display = "none";

    // Toggle filter form
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

/* 
   SHOW / HIDE ADD FORM
*/
function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    // Hide filter form if open
    filterForm.style.display = "none";

    // Toggle add form
    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

/* 
   FILTER ARTICLES
*/
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }

    });
}

/* 
   ADD NEW ARTICLE
*/
function addNewArticle() {

    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    if (title === "" || text === "") {
        alert("Please enter both title and text.");
        return;
    }

    let type = "";
    let markerText = "";

    if (opinionRadio.checked) {
        type = "opinion";
        markerText = "Opinion";
    } else if (recipeRadio.checked) {
        type = "recipe";
        markerText = "Recipe";
    } else if (lifeRadio.checked) {
        type = "update";
        markerText = "Update";
    } else {
        alert("Please select an article type.");
        return;
    }

    // Create article
    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="#">Read more...</a></p>
    `;

    document.getElementById("articleList").appendChild(newArticle);

    // Clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    // Re-apply filter so new article respects checkbox state
    filterArticles();
}
