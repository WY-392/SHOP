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
// // 去主页
// tomainpage=document.querySelector('.btnlogin');
// tomainpage.addEventListener('click',function(){
//     location.href='./index.html';
// })


let loginBtnDom=document.querySelector('.btnlogin');
// 登录时输入的电话号码
let usernameDom=document.querySelector('.username')
// 登录时输入的密码
let userpsdDom=document.querySelector('.userpsd')

let checkboxDom=document.querySelector('.loginAgreement input')
 username=JSON.parse(localStorage.getItem('userInfo'))
let  flag=false
let loginuser=JSON.parse(localStorage.getItem('loginuser'))
loginBtnDom.addEventListener('click',function(){
    if(username==''){
        alert('您未注册账号');
    }else{
            for(let i=0;i<username.length;i++){
          if(usernameDom.value.trim()==username[i].phone.trim()){
           if(userpsdDom.value.trim()==username[i].password.trim()){
loginuser[0].username=usernameDom.value
localStorage.setItem('loginuser',JSON.stringify(loginuser));
             flag=true
        }
        }else{
            continue
        }
        if(flag==true){
            break
        }
    }
    if(checkboxDom.checked==false){
   alert('请同意服务协议');
    }else{
  if(flag==true){
        location.href='./index.html'
    }else if(flag==false){
        alert('账号或密码错误');
        userpsdDom.value=''
    }
    }
    }
  
})

