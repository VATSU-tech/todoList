const header = document.querySelector(".header");
const tacheAfaire = document.querySelector("#tacheAfaire");
const tachesFaites = document.querySelector("#tachesFaites");
const input = document.querySelector("input");
const button = document.querySelector("button");
const checkbox = document.querySelectorAll("btnSupprimer");
const btnSupprimer = document.querySelectorAll(".btnSupprimer");
var idTache = 0;

creeTache = () => {
    if (input.value === "") {
        alert("Entrer une tache !");
    } else {
        const tache = document.createElement("div");
        if (input.value.trim() === "") {
            alert("Veuillez entrer une tâche valide.");
            input.value = "";
        } else {
            const nameTache = input.value.toUpperCase
            tache.innerHTML = `
            <label><input type='checkbox' class='checkbox'><span class='span'>⭕</span>${input.value} <span class='btnSupprimer'>🗑️</span></label>`;
            // tache.style.border = '.5px solid red'
            tacheAfaire.appendChild(tache);
            input.value = "";

            const checkbox = tache.querySelector(".checkbox");
            const suprimer = tache.querySelector(".btnSupprimer");
            const span = tache.querySelector('.span')

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    tachesFaites.appendChild(tache);
                    span.textContent = "✅"
                    span.style.opacity = '1'
                } else {
                    tacheAfaire.appendChild(tache);
                    span.textContent = '⭕'
                    span.style.opacity = '.5'
                }
            });
            suprimer.addEventListener("click", () => tache.remove());
        }
    }
};

button.addEventListener("click", () => creeTache());

//------------------------------------------------------------------
const btnTheme = document.getElementById("theme");

const changerTheme = () => {
    const themeAppliquer = document.documentElement.getAttribute("data-theme");
    const nouveauTheme = themeAppliquer === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("dark-theme", nouveauTheme);
    localStorage.setItem("theme", nouveauTheme);
};

btnTheme.addEventListener("click", changerTheme);

btnTheme.addEventListener("click", () => {
    const themeSauvegarder = localStorage.getItem("theme") || "light";

    if (themeSauvegarder === "dark") {
        document.getElementById("lune").classList.add("themeActive");
        document.getElementById("soleil").classList.remove("themeActive");
    } else {
        document.getElementById("soleil").classList.add("themeActive");
        document.getElementById("lune").classList.remove("themeActive");
    }

    document.documentElement.setAttribute("data-theme", themeSauvegarder);
});

window.addEventListener("DOMContentLoaded", () => {
    const themeSauvegarder = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", themeSauvegarder);

    if (themeSauvegarder === "dark") {
        document.getElementById("lune").classList.add("themeActive");
        document.getElementById("soleil").classList.remove("themeActive");
    } else {
        document.getElementById("soleil").classList.add("themeActive");
        document.getElementById("lune").classList.remove("themeActive");
    }
}); 


