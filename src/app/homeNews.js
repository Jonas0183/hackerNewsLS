import img from './img/grayarrow.gif';

export const loadNews = (content, storageKey) => {
    const newsLocalStorage = localStorage.getItem(storageKey);
    const parsedNews = JSON.parse(newsLocalStorage);
    let newsHTML = "";

    for(const item of parsedNews) {
        const hightLight = item.newHightLight;   
        const newLink = item.newLink;
        newsHTML +=
        `<div class="newLine1">
            <div class="rank">
                1.
            </div>
            <div class="arrow">
                <img src=${img}></a>
            </div>
            <div class="newTittle">${hightLight}</div>
            <div class="newSource"><a href="${newLink}">(${newLink})</div>
        </div>
        <div class="newLine2">xxx points by isp xx minutes ago | hide | xx comments</div>`;
    }
    
    content.innerHTML = newsHTML;
}
