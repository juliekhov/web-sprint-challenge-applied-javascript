// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const URL = 'https://lambda-times-api.herokuapp.com/topics';

axios.get(URL)
    .then(res => {
        // create .forEach to access data object, then access array w/ key 'topics'
        res.data.topics.forEach(item => {
            // create 'div'
            const tab = document.createElement('div');
            // add class 'tab'
            tab.classList.add('tab');
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