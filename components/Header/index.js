// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerDiv = document.querySelector('.header')
console.log(headerDiv);

const headerCont = document.querySelector('.header-container')
console.log (headerCont);
// we looped through the data and created panels for each content and title

const headingText = "Lambda Times"
headerCont.appendChild(Header(headingText))







function Header(headingText) {

      //define new elements
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerText = document.createElement('h1');
  const headerTemp = document.createElement('span');
 
  // Setup structure of elements
  header.appendChild(headerDate);
  header.appendChild(headerText);
  header.appendChild(headerTemp);
  
  // set class names
  header.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');
  
  //tc 
  headerText.textContent = headingText;
  headerDate.textContent = '11/1/2019';



return header; 
}





//const infoUrl = '11/1/2019';
