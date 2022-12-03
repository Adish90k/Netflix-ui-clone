const arrow1=document.querySelectorAll('.arrow');
const movie_list=document.querySelectorAll(".movie-list")
 
arrow1.forEach((arrow,i)=>{
    let clickCounter=0;
    const itemNumber=movie_list[i].querySelectorAll("img").length
 arrow.addEventListener("click",()=>{   
      clickCounter++;    
      if(itemNumber -(4 + clickCounter)>=0){
          movie_list[i].style.transform=`translateX(${
            movie_list[i].computedStyleMap().get("transform")[0].x.value-300
           }px)`
      }
      else{
          movie_list[i].style.transform="translateX(0)";
          clickCounter=0;
      }
     console.log("hhh");
 })
 console.log(movie_list);
})
const toggle=document.querySelector('.slider');
const mainnav=document.querySelector('.mainnavbar')
console.log(mainnav);
console.log(toggle);
let f=1;
toggle.addEventListener('click',()=>{
    if(f==1){
    console.log("hello world");
    mainnav.style.backgroundColor='black'  
     f=0;  
    }
     else if(f==0){
        console.log("hello world");
        mainnav.style.backgroundColor=' rgba(135, 135, 135, 0.301)' 
        f=1; 
    }
})
