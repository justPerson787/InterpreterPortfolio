function readMore(field) {
    let moreText = document.querySelector(`.resume-field[data-field="${field}"] .more`); 
    let btnText = document.querySelector(`.resume-field[data-field="${field}"] .more-button`);  
            
    if (btnText.textContent == "Подробнее") {
        moreText.style.display = "block";
        btnText.textContent = "Свернуть";
        
    } else  {
        btnText.textContent = "Подробнее";
        moreText.style.display = "none";        
    }
}