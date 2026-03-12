async function getNews(){

const url = "https://hn.algolia.com/api/v1/search?query=startup";

const res = await fetch(url);

const data = await res.json();

console.log("data:", data);

showNews(data.hits);

}

function showNews(news){

const container = document.getElementById("news-container");

container.innerHTML="";

news.forEach(function(item){

const div = document.createElement("div");
div.classList.add("news");

div.innerHTML = `
<h3>${item.title}</h3>
<p>Author: ${item.author}</p>
<a href="${item.url}" target="_blank">Read More</a>
`;

container.appendChild(div);

});

}

getNews();
