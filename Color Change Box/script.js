const block1=document.getElementById("one")
block1.addEventListener("click",()=>
{block1.style.backgroundColor="red"}
);

const block2=document.getElementById("second")
block2.addEventListener("click",()=>
{block2.style.backgroundColor="green"}
);

const block3=document.getElementById("third")
block3.addEventListener("click",()=>
{block3.style.backgroundColor="blue"}
);

const block4=document.getElementById("fourth")
block4.addEventListener("click",()=>
{block4.style.backgroundColor="pink"}
);

const heading=document.getElementById("heading")
const button=document.getElementById("button")

button.addEventListener("click",()=>

    {  const name=document.getElementById("forname").value
    heading.innerHTML="HELLO "+name+"!!";
})