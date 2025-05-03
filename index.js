const cards = document.querySelectorAll(".images");

cards.forEach(card => {
    card.addEventListener('click', () =>
    {
        cards.forEach(c => c.classList.remove(".active"));
        card.classList.add("active");
    })
    
});