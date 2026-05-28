document.addEventListener("DOMContentLoaded", () => {

    const boutonMenu = document.querySelector(".deroulant > a");
    const sousMenu = document.querySelector(".sous-menu");

    console.log(boutonMenu);
    console.log(sousMenu);

    boutonMenu.addEventListener("click", (event) => {

        console.log("clic détecté");

        event.preventDefault();

        sousMenu.classList.toggle("actif");

    });

});