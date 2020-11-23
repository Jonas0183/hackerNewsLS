var content = document.getElementById('loadNews');
const newsLocalStorage = localStorage.getItem('news');
const parsedNews = JSON.parse(newsLocalStorage);
const inner = ``;
loadNews = () => {
    for(var item in parsedNews) {
        const hightLight = item.newHightLight     
        const newLink = item.newLink;
        content += inner.innerHtml;
        inner.innerHTML =
        `<div class="newLine1">
            <div class="rank">
                1.
            </div>
            <div class="arrow">
                <img src="../src/img/grayarrow.gif"></a>
            </div>
            <div class="newTittle">${hightLight}</div>
            <div class="newSource"><a href="${newLink}">(${newLink})</div>
        </div>
        <div class="newLine2">xxx points by isp xx minutes ago | hide | xx comments</div>`;
    }
}