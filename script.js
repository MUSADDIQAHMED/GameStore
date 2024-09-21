let topElement=document.getElementById("container")

fetch("https://musaddiqahmed.github.io/GameStore/data.json")
.then(Response=>Response.json())
.then((value)=>{
    let info= '';
    value.map((game)=>{
        info += `
            <div class="card">
                <img src="${game.url}" alt="">
                <h1>${game.title.slice(0,32)}...</h1>
                <p>${game.genre} <span>${game.mode}</span></p>
                <b>${game.edition}</b>
                <h4>${game.platform} <span>${game.publisher}</span></h4>
                <div class="sale">
                    <button type="button" class="oprice">₹ ${game.oprice}/-</button>
                    <button type="button" class="off">${game.offer}% off</button>
                </div>
                <div class="btns">
                    <button type="button" class="price">₹ ${game.dprice}/-</button>
                    <button type="button" class="rate"><i class="fa-solid fa-star"> </i> ${game.rating} </button>
                </div>
            </div>
        `

    })
    topElement.innerHTML=info
})

            // Get the search bar element
    const searchBar = document.getElementById('searchBar');

    // Listen for input in the search bar
    searchBar.addEventListener('input', function() {
        // Get the search term and convert it to lowercase
        const filter = searchBar.value.toLowerCase();
        
        // Get all card elements
        const cards = document.querySelectorAll('.card');

        // Loop through each card
        cards.forEach(card => {
            // Check if the card's text includes the search term
            if (card.textContent.toLowerCase().includes(filter)) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    });