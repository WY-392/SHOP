var mySwiper = new Swiper('.swiper', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: {
    delay: 1500,
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

let dataItem = JSON.parse(localStorage.getItem('hopelist')) || [];
let loginuser = JSON.parse(localStorage.getItem('loginuser')) || [];
let welcomeDom=document.querySelector('.welcomeuser')
let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
localStorage.setItem('userInfo',JSON.stringify(userInfo))
loginuser=JSON.parse(localStorage.getItem('loginuser'))||[{
    username:''
}];
localStorage.setItem('loginuser',JSON.stringify(loginuser))
if(loginuser[0].username==''){
 welcomeDom.innerHTML='未知用户' 
   
}else{
    welcomeDom.innerHTML=loginuser[0].username;
    
}



let bookclassDoms = document.querySelectorAll('.bookclass');
let classspecificDom = document.querySelector('.class-specific');

for (let i = 0; i < bookclassDoms.length; i++) {
  bookclassDoms[i].addEventListener('mouseover', function () {
    classspecificDom.className = 'class-specific-active';
    bookclassDoms[i].className = 'bookclassactive';
  })
  bookclassDoms[i].addEventListener('mouseleave', function () {
    classspecificDom.className = 'class-specific';
    bookclassDoms[i].className = 'bookclass';
  })
}

let itemDoms = document.querySelectorAll('.siderbar-item');
let sidericonDoms = document.querySelectorAll('.siderbar-icon');
for (let i = 0; i < itemDoms.length; i++) {
  sidericonDoms[i].style.background = `url(../images/floor.png) 0px  ${-(i * 40)}px`;
}

let siderbardom = document.querySelector('.sidebar');
let htmldom = document.documentElement;
let bodydom = document.body;
let topsearch = document.querySelector('.top-search');
let searchdoms = document.querySelector('.search');
window.addEventListener('scroll', function () {
  let y = htmldom.scrollTop | bodydom.scrollTop;

  if (y > 1200) {
    siderbardom.style.display = `block`;
    searchdoms.style.position = 'fixed';
    searchdoms.style.top = '-4px';
    searchdoms.style.left = '0';
    searchdoms.style.zIndex = '99999'
    searchdoms.style.marginTop = '0';
    topsearch.style.height = '70px';


  } else {
    siderbardom.style.display = `none`;
    searchdoms.style.position = 'relative';
    topsearch.style.height = '0';
    searchdoms.style.top = '0';
  }
})

let textdoms = document.querySelectorAll('.siderbar-text');
for (let i = 0; i < itemDoms.length; i++) {
  itemDoms[i].addEventListener('mouseover', function () {
    textdoms[i].style.display = 'block';
    sidericonDoms[i].style.background = `url(../images/floor.png) #93d46f 40px ${-(i * 40)}px`;
  })
  itemDoms[i].addEventListener('mouseleave', function () {
    textdoms[i].style.display = 'none';
    sidericonDoms[i].style.background = `url(../images/floor.png)  0 ${-(i * 40)}px`;
  })
  itemDoms[i].addEventListener('click', function () {
    let itemid = itemDoms[i].dataset.id;
    location.href = '#' + itemid;
  })
}

let gototop = document.querySelector('.gototop');

gototop.addEventListener('click', function () {
  let top = htmldom.scrollTop | bodydom.scrollTop;
  let timer = setInterval(function () {
    top = top - 100;
    htmldom.scrollTop = top;
    bodydom.scrollTop = top;
    if (top < 0) {
      clearInterval(timer);
    }
  }, 10)
})


let booklistDoms = document.querySelectorAll('.bookcontent');
let bookintroduceDoms = document.querySelectorAll('.bookintroduce');
let booklistitemDoms = document.querySelectorAll('.booklist-item');
console.log(booklistDoms);
console.log(bookintroduceDoms);
for (let i = 0; i < bookintroduceDoms.length; i++) {
  booklistitemDoms[i].addEventListener('mouseover', function () {
    bookintroduceDoms[i].style.display = 'flex';
    booklistDoms[i].style.display = 'none';
    this.style.cursor = "pointer";
  })
  booklistitemDoms[i].addEventListener('mouseleave', function () {
    bookintroduceDoms[i].style.display = 'none';
    booklistDoms[i].style.display = 'flex';
  })
}
// 去登录
let tologin=document.querySelector('.login span:nth-child(3)');
tologin.addEventListener('click',function(){
  location.href='./login.html';
})
// 去注册
let toregister=document.querySelector('.login span:nth-child(4)');
toregister.addEventListener('click',function(){
  location.href='./register.html';
})
// 去图书详情
let tolookbook=document.querySelector('.class-top span:nth-child(1)');
tolookbook.addEventListener('click',function(){
  location.href='./goodsInfo.html';
})
// 去商品列表
let togoodslist=document.querySelector('.shop-list .shop-del:nth-child(1)');
togoodslist.addEventListener('click',function(){
  location.href='./goodsList.html';
})
// 去购物车
let gotocar=document.querySelector('.shopcar');
gotocar.addEventListener('click',function(){
  location.href='./car.html';
})