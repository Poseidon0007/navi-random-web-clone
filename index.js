let butt=document.getElementById("but");
butt.addEventListener("click",addtext);
var count=0;
function addtext(){
    count++;
    let html=` <p class="get">So, if you are planning to apply for a ₹20 lakh home loan, understand your ₹20 lakh home loan EMI first to better manage your finances.

                How to calculate? You can use a home loan EMI calculator to estimate your monthly repayment obligations.</p>`
    if(count%2==1){document.querySelector("#add").innerHTML=document.querySelector("#add").innerHTML+html;
}
if(count%2==0){document.querySelector("#add").innerHTML=document.querySelector("#add").innerHTML-html;

}

}
