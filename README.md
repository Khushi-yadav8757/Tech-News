# 🚀 Startup News Web App

## 📌 Project Description

This project is a simple **JavaScript web application** that fetches startup-related news using the **Hacker News Algolia API** and displays the results dynamically on a web page.

The application uses **Fetch API**, **async/await**, and **DOM manipulation** to retrieve and display news articles.

🔗 **API Used:**
https://hn.algolia.com/api/v1/search?query=startup

---

# ✨ Features

* 📡 Fetches startup news from Hacker News API
* 📰 Displays news title and author
* 🔗 Provides a link to read the full article
* ⚡ Dynamic content loading using JavaScript
* 🎨 Simple and clean user interface

---

# 🛠 Technologies Used

* 🌐 HTML
* 🎨 CSS
* ⚡ JavaScript
* 📡 Fetch API
* 🧩 DOM Manipulation

---

# 📁 Project Structure

```
startup-news-app
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚙️ How It Works

1️⃣ The JavaScript file sends a request to the **Hacker News API**.

2️⃣ The API returns the data in **JSON format**.

3️⃣ The data is converted into **JavaScript objects**.

4️⃣ The `showNews()` function dynamically creates HTML elements.

5️⃣ The news articles are displayed on the webpage.

---

# 💻 JavaScript API Example

```javascript
async function getNews(){

const url = "https://hn.algolia.com/api/v1/search?query=startup";

const res = await fetch(url);

const data = await res.json();

console.log("data:", data);

showNews(data.hits);

}
```

---

# 🎯 Learning Objectives

This project helps in understanding:

* 📡 How APIs work
* ⚡ Fetch API in JavaScript
* 🔄 Async and Await
* 📦 JSON data handling
* 🧩 DOM manipulation

---

# 🖥 Output

The webpage displays a list of **startup-related news articles** including:

* 📰 Title
* 👤 Author name
* 🔗 Link to read the full article

Users can click **Read More** to open the original news article.

---

# 👩‍💻 Author

**Name:** Khushi Yadav
🎓 B.Tech Computer Science
🏫 Dr. APJ Abdul Kalam Technical University (AKTU)

---

⭐ This project is created as a **JavaScript assignment to practice API integration and DOM manipulation.**
