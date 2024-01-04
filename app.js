//d3bae46705bc4b4b85fab511c83df24e
const api_key = 'd3bae46705bc4b4b85fab511c83df24e';
const inputValue = document.querySelector("#search-news")
const btn = document.querySelector(".btn")
console.log(inputValue);
let spinner_border = document.querySelector(".spinner-border");

const getData = async (input) =>{
  spinner_border.style.display = 'none';
  
    spinner_border.style.display = 'block';
    
    const url = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${api_key}`).then(res => res.json())
    
    const card_data = document.querySelector(".card-data");
    card_data.innerHTML = "";
    url.articles.forEach(element => {
      
      spinner_border.style.display = 'none';
        card_data.innerHTML += `
        <div class="card " style="width: 18rem; ">
                    <img src="${element.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">${element.description}</p>
                     
                    </div>
                  </div>
        `
    });
    
    // spinner_border.style.display = "block";
    
} 
window.addEventListener("load",function(){
  getData("beautiful places");
})
// getData()
btn.addEventListener("click", function(){
  // spinner_border.style.display = "block";
  let inputText = inputValue.value
  // spinner_border.style.display = 'block';
    getData(inputText) 
    inputValue.value = "";      
})
function navItem(nav){
  getData(nav)

}