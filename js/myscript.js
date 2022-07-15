let myUrls=["url('images/blog1.jpg')","url('images/blog2.jpg')","url('images/blog3.jpg')"]
let myDiv=document.getElementById('test')
let counter=0;



function changeBG(){

    myDiv.style.backgroundImage =myUrls[counter] ; 
    myDiv.style.backgroundRepeat = "no-repeat";
    myDiv.style.backgroundSize = "cover";

    if(counter==2){
        counter=0;
    }else{
        counter++;

    }
  
}
setInterval(changeBG,3000)





