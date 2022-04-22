const para = document.querySelectorAll("p");

para.forEach( par => {
    const paraText = par.innerText;
    
    if (paraText.includes("error")) {
        par.classList.add("error");
    } else if(paraText.includes("success")){
        par.classList.add("success");
    }

    console.log(par);
});