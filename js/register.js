let verifyDom = document.querySelector('.verify-content');
let verifyArr = 'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let verifyList = []; 
function verify() {
    verifyList.length = 0; 
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * verifyArr.length);
        verifyList.push(verifyArr[randomIndex]);
    }
    verifyDom.innerHTML = verifyList.join('');
}
verify();
verifyDom.addEventListener('click', verify);

// 去登录界面
tologin=document.querySelector('.tologin span');
tologin.addEventListener('click',function(){
    location.href='./login.html';
})
// 注册完成
let registerover=document.querySelector('.registerbtn');
    registerover.addEventListener('click',function(){
           alert('注册完成');
            location.href='./login.html';
})

