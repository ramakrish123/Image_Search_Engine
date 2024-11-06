const accesskey="V3n0dpb8rP0pcvIyeADRArkIlcfoeU0bJA7HT1M5gTo";

const searchForm=document.getElementById("search-form")
const searchBox=document.getElementById("search-box")
const searchresult=document.getElementById("search-result")
const showMoreBtn=document.getElementById("show-more-btn");



let keyword="";
let page=1;
async function searchImages() {
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
    if(page===1){
        searchresult.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchresult.append(imageLink);
        
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})