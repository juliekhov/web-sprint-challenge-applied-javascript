// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card"> 1
//   <div class="headline">{Headline of article}</div> 2
//   <div class="author"> 3
//     <div class="img-container"> 4
//       <img src={url of authors image} /> 5
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const URL = 'https://lambda-times-api.herokuapp.com/articles';

axios.get(URL)
    .then(res => {
        // create .forEach to access data object, then access array w/ key 'topics'
        res.data.articles.forEach(item => {
            // create 'div'
            const cardDiv = document.createElement('div'); // 1
            // add class 'card'
            cardDiv.classList.add('card');
            // create 'div' 2
            const headlineDiv = document.createElement('div'); // 2
            // add class 'headline'
            headlineDiv.classList.add('headline');
            // create 'div' 3
            const authorDiv = document.createElement('div'); // 3
            // add class 'img-container'
            authorDiv.classList.add('author');
            // create 'div' 4
            const imgDiv = document.createElement('div'); // 4
            // add class 'img-container'
            imgDiv.classList.add('img-container');
            // add text for each item from array

            tab.textContent = item;
            // select 'div.topics'
            const topics = document.querySelector('div.topics');
            // append 'tab' to 'topics'
            topics.appendChild(tab);
        })
    })
    .catch(err => {
        debugger
    });

// notes on data object
// key array (before colon)
// articles (key) inside data obj
// value of articles(key) contains {object containing [arrays]}
// Obj key:value pairs, Array 0-length, 
// 5 objs in the data obj
// keys: articles, javascript, jquery, node, technology
// each key contains value holding Array of objects