let loginwayDom=document.querySelector('.scan');
let accountlogindom=document.querySelector('.accountlogin');
let  scandom=document.querySelector('.loginway');
let inputlogindom=document.querySelector('.inputlogin');
let textwayDom=document.querySelector('.textway');
loginwayDom.addEventListener('click',function(){
    loginwayDom.style.color='#f60';
    accountlogindom.style.color='#000000';
    inputlogindom.style.display='none';
    scandom.style.display='flex';
    textwayDom.style.display='block';
})
accountlogindom.addEventListener('click',function(){
    accountlogindom.style.color='#f60';
    loginwayDom.style.color='#000000'
     inputlogindom.style.display='block';
    scandom.style.display='none'
    textwayDom.style.display='none';
})
// 去主页
tomainpage=document.querySelector('.btnlogin');
tomainpage.addEventListener('click',function(){
    location.href='./index.html';
})
