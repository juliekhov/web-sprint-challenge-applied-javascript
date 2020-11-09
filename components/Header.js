// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create 'div'
    const header = document.createElement('div');
    // add class 'header'
    header.classList.add('header');
    // create 'span'
    const date = document.createElement('span');
    // add class 'date'
    date.classList.add('date');
    // add text including 'MARCH 28, 2020'
    date.textContent = 'MARCH 28, 2020';
    // create 'h1'
    const title = document.createElement('h1');
    // add text 'Lambda Times'
    title.textContent = 'Lambda Times';
    // create span
    const temp = document.createElement('span');
    // add text '98°'
    temp.textContent = '98°';

    // append 'date' to 'header'
    header.appendChild(date);
    // append 'title' to 'header'
    header.appendChild(title);
    // append 'temp' to 'header'
    header.appendChild(temp);
    return header;

};

// select 'div.header-container'
const headerContainer = document.querySelector('div.header-container');
// append 'Header' fctn to 'div.header-container'
headerContainer.appendChild(Header());