import './css/style.scss';
import './addNews.js';
import './homeNews'
window.onload = () => { 

    loadNews();
    btnLoad.addEventListener('click', loadNew);
}