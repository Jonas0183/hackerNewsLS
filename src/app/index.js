import './css/style.scss';
import { loadNews } from "./homeNews";
import { loadNew } from "./addNews";

window.onload = () => { 
    const content = document.getElementById('homeNews');
    if (content)
        loadNews(content, "news");
    const btnLoad = document.getElementById('btnLoad');
    if (btnLoad)
        btnLoad.addEventListener('click', loadNew);
}