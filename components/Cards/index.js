// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
   const newArt = ArticleCard(response.data.articles);
   console.log(newArt);
    entryPointTwo.appendChild(newArt) 
   
  })

 const entryPointTwo = document.querySelector("body");
 
 
 cardArray = ['https://lambda-times-backend.herokuapp.com/articles'];
 console.log(cardArray);
 var merged = [].concat.apply([], cardArray);

console.log(merged);
 
 
 
 cardArray.forEach(user => {
     axios.get(user)
         .then(response =>{
            //response.Object.entries.forEach(card)
           const newArt = ArticleCard(response.data.articles)
           
           entryPointTwo.appendChild(newArt)

         })
 })


 function ArticleCard(data) {
    const newArt = document.createElement("div"),
          headlineDiv = document.createElement("div"),
          authorDiv = document.createElement('div'),
          imgDiv = document.createElement("div"),  
          newImage = document.createElement('img'), 
          authorSpan = document.createElement('span');
          
          newArt.appendChild(headlineDiv);
          newArt.appendChild(authorDiv);
          newArt.appendChild(imgDiv);
          imgDiv.appendChild(newImage);
          newArt.appendChild(authorSpan);
          
   
    newImage.src = `${data.authorPhoto}`
    headlineDiv.textContent = `${data.headline}`;
    authorSpan.textContent = `By: ${data.authorName}`
    

    newArt.classList.add('card'),
    headlineDiv.classList.add("headline"),
    authorDiv.classList.add("author"),
    imgDiv.classList.add("img-container");
  
     
    return newArt;
 }
  



