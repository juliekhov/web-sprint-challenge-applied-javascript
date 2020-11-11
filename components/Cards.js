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
const cardsContainer = document.querySelector('.cards-container');

const cardMaker = (articles) => {
    // create 'div'
    const cardDiv = document.createElement('div'); // 1
    // add class 'card'
    cardDiv.classList.add('card');
    // create 'div' 2
    const headline = document.createElement('div'); // 2
    // add class 'headline'
    headline.classList.add('headline');
    // add the headline
    headline.textContent = articles.headline;
    // append headline to cardDiv
    cardDiv.appendChild(headline);
    // create 'div' 3
    const author = document.createElement('div'); // 3
    // add class 'author'
    author.classList.add('author');
    // append author to cardDiv
    cardDiv.appendChild(author);
    // create 'div' 4
    const imgContainer = document.createElement('div'); // 4
    // add class 'img-container'
    imgContainer.classList.add('img-container');
    // append img container to author
    author.appendChild(imgContainer);
    // create 'img' 5
    const authorPhoto = document.createElement('img'); // 5
    // add url for authorPhoto in data obj
    authorPhoto.src = articles.authorPhoto;
    // append authorPhoto to imgContainer
    imgContainer.appendChild(authorPhoto);
    const span = document.createElement('span');
    // add span text
    span.textContent = `By ${articles.authorName}`;
    // append span to author
    author.appendChild(span);

    // return cardDiv
    return cardDiv;
};


axios.get(URL)
    .then(res => {
        // create for loop to iterate over each key in data obj articles to access obj keys
        for (let i in res.data.articles) {
            res.data.articles[i].forEach(item => {
                // create card for each item in array
                const card = cardMaker(item);
                // append each card to card container
                cardsContainer.appendChild(card);
                // add a event listener for click event(s), onclick headline of the article is printed
                card.addEventListener('click', () => {
                    console.log(item.headline);
                })
            });
        }
    })
    .catch(err => {
        console.log(err);
    });

// notes on data object
// key array (before colon)
// articles (key) inside data obj
// value of articles(key) contains {object containing [arrays]}
// Obj key:value pairs, Array 0-length, 
// 5 objs in the data obj
// keys: articles, javascript, jquery, node, technology
// each key contains value holding Array of objects