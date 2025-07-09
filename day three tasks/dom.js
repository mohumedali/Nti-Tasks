let div = document.createElement("div")
let list = document.createElement("ul")
let img1 = document.createElement("img")
let img2 = document.createElement("img")
img1.setAttribute("src","dom.jpg")
img2.setAttribute("src","dom.jpg")

let arr = ["Memo","Photo","Article","About","contact"]
for(let i = 0 ; i < 5 ; i++){
let li = document.createElement("li")
let link  = document.createElement("a")
link.setAttribute("href","#")
    li.appendChild(link);
    link.textContent=arr[i]
    list.appendChild(li);
}

div.appendChild(list);
div.style.cssText=`
        position :absolute;
        top : 50%;
        left : 50%;
        transform:translate(-50%,-50%)
`
img1.style.cssText = `
        position :absolute;
        top : 10%;
        right : 10%;
   
`
img2.style.cssText=`
        position :absolute;
        bottom : 10%;
        left : 10%;
       
`
// div.appendChild(img1)
// div.appendChild(img2)
document.body.appendChild(img1)
document.body.appendChild(img2)
document.body.appendChild(div);
