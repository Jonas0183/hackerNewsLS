const inputHightlight = document.getElementById('hightLight');
const inputAuthor = document.getElementById('author');
const inputLink = document.getElementById('link');
const inputSource = document.getElementById('source');

export const loadNew = () =>{
    const hightlight = inputHightlight.value;
    const author = inputAuthor.value;
    const link = inputLink.value;
    const source = inputSource.value;
    if(hightlight && author && link && source){
        const newNew = [ 
            {"newHightLight" : hightlight},
            {"newAuthor" : author},
            {"newLink" : link },
            {"newSource" : source}       
        ]
        const newsArray = JSON.parse(localStorage.getItem("news") || "[]");
        newsArray.push(newNew);
        localStorage.setItem("news" ,JSON.stringify(newsArray));
        
    }else{
        window.alert("Rellena correctamente todos los campos.");
    }
};

