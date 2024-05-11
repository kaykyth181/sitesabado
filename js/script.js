//linha
/*comentario*/


//vai até o index e pega o toggleTheme
const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

// querySelectorAll pega todos os elementos com o nome
const accordionHeader = document.querySelectorAll(".accordion-header");

const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");
    
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

//fim do toggle-theme



