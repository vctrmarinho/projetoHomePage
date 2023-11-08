function changeMode(){
    
    const page = document.documentElement;
    
    page.classList.toggle('light');

    const imgPrincipal = document.querySelector('#foto img');

    if(page.classList.contains('light')){
        imgPrincipal.setAttribute("src", "./src/light-emoji.jpg");
    }

    else{
        imgPrincipal.setAttribute("src", "./src/dark-emoji.jpg")
    }
}