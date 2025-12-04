let menuItemDoms = document.querySelectorAll('.menu-item')
let menuTitleDoms = document.querySelectorAll('.menu-title')
let menuContentDoms = document.querySelectorAll('.menu-content')
var mySwiper = new Swiper('.swiper', {
    // 水平切换
    direction: 'horizontal',
    // 循环模式
    loop: true,
    // 自动播放（配置延迟时间）
    autoplay: {
        delay: 1500, // 1500毫秒切换一次
        disableOnInteraction: false, // 可选：用户操作后是否继续自动播放
    },
    // 分页器配置
    pagination: {
        // 分页器容器选择器
        el: '.swiper-pagination',
        // 允许点击分页器切换
        clickable: true,
        // 自定义分页器内容（渲染为数字）
        renderBullet: function (index, className) {
            // 返回数字按钮的HTML结构，index从0开始，所以+1显示第1/2/3页
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    // 前进/后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
for (let i = 0; i < menuItemDoms.length; i++) {
    //移入
    menuItemDoms[i].addEventListener('mouseover', function () {
        menuTitleDoms[i].className = 'menu-title menu-title-active'
        menuContentDoms[i].style.display = 'block'

    //移除
    menuItemDoms[i].addEventListener('mouseout',function(){
        menuTitleDoms[i].className = 'menu-title'
        menuContentDoms[i].style.display = 'none'
    })
})
}
  var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
     autoplay: {
    delay: 1000,//1秒切换一次
  },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })        

  // 电子书 手风琴效果
let topListItemDoms = document.querySelectorAll('.toplist-item');
let bookNameDoms = document.querySelectorAll('.toplist-bookname');
let bookDescDoms = document.querySelectorAll('.toplist-bookdesc');
for(let i=0;i<topListItemDoms.length;i++){
    topListItemDoms[i].addEventListener('mouseover',function(){
            for(let j=0;j<bookDescDoms.length;j++){
                bookDescDoms[j].style.display='none';
                bookNameDoms[j].style.display='block';
            }

             bookDescDoms[i].style.display='flex';
            bookNameDoms[i].style.display='none';
    })
}

let asiderDom = document.querySelector('.asider');
let bodyDom = document.body;
let htmlDom = document.documentElement;
window.addEventListener('scroll',function(){
    // 通过body标签 和 html标签  获取滚动条距离顶部的位置
    let top = bodyDom.scrollTop || htmlDom.scrollTop;  
    if(top>1081){
        asiderDom.style.display = 'block';
    }else{
         asiderDom.style.display = 'none';
    }
})

// 通过js设置 默认图片的展示 根据循环设置位置 y轴偏移
let asideIconDoms = document.querySelectorAll('.aside-icon')
for(let i=0;i<asideIconDoms.length;i++){
    asideIconDoms[i].style.background = `url('./img/floor.png') 0 ${i * -40}px`
}

let asideItemDoms = document.querySelectorAll('.aside-item');
let asideTextDoms = document.querySelectorAll('.aside-text');
for(let i=0;i<asideItemDoms.length;i++){
    asideItemDoms[i].addEventListener('mouseover',function(){
        asideIconDoms[i].style.background = `url('./img/floor.png')  40px ${i * -40}px #93d46f` 
        asideTextDoms[i].style.display = 'block'

    })
     asideItemDoms[i].addEventListener('mouseleave',function(){
        asideIconDoms[i].style.background = `url('./img/floor.png')  0 ${i * -40}px`
        asideTextDoms[i].style.display = 'none'
    })
      asideItemDoms[i].addEventListener('click',function(){
        console.log(asideItemDoms[i].dataset.id);
        let idName  = asideItemDoms[i].dataset.id
        // 页面跳转 加maodian
        location.href='#'+idName;
    })
}

let backTopBtn = document.querySelector('.topback');
let bodyDom1 = document.body;
let htmlDom1 = document.documentElement;
backTopBtn.addEventListener('click',function(){
    //   获取html body 的 dom节点，修改 `scrolltop =0`
    let top = bodyDom1.scrollTop||htmlDom1.scrollTop;
    let timer = setInterval(function(){
        top = top-100;
        bodyDom1.scrollTop=top;
        htmlDom1.scrollTop = top;   
        if(top<0){
            clearInterval(timer)
        }
    },150)

})

//跳转到购物车
let carBtn = document.querySelector('.car-btn');
carBtn.addEventListener('click', function () {
    window.location.href = 'car.html';
});


//登陆
let loginBtn = document.querySelector('.login');
loginBtn.addEventListener('click', function () {
    window.location.href = 'login.html';
});
//注册
let registerBtn = document.querySelector('.register');
registerBtn.addEventListener('click', function () {
    window.location.href = 'register.html';
});
//商品列表
let mouseItems = document.querySelectorAll('.mouseList-items')
for(let i = 0;i<mouseItems.length;i++){
   mouseItems[i].addEventListener('click', function () {
    window.location.href = 'goodsList.html';
});
}
//商品详情
let limiItems = document.querySelectorAll('.humidifier-items')
for(let i = 0;i<limiItems.length;i++){
   limiItems[i].addEventListener('click', function () {
    window.location.href = 'goodsInfo.html';
});
}


// 操作侧边点击跳转的显隐
let asiderDoms = document.querySelector('.asider');
let topSearchDom = document.querySelector('.top-search')
let bodyDoms = document.body;
let htmlDoms = document.documentElement;
// 当滚动条滚动到了某一个位置 修改aslder的样式为显示
window.addEventListener('scroll',function(){
    // 获取滚动条距离顶部的位置
    // 通过body标签 和 html标签  获取滚动条距离顶部的位置
    let top = bodyDoms.scrollTop || htmlDoms.scrollTop;  

    // 操作电子书旁边的楼层跳转显示隐藏  
    if(top>1081){
        asiderDoms.style.display = 'block';
    }else{
         asiderDoms.style.display = 'none';
    }
    // 操作顶部搜索框的显示隐藏 >500
    if(top>500){
        topSearchDom.style.height = '70px'
         topSearchDom.style.borderBottom = '1px solid #f60'
    }else{
         topSearchDom.style.height = '0'
           topSearchDom.style.borderBottom='none'
    }
    
})


//    两个输入框的值 是同步的    只要有一个 发生变化 另一个输入框值 要进行同步
// let searchInp = document.querySelector('#search');
// let searchInp1 = document.querySelector('#search1');
// searchInp.addEventListener('input',function(){
//     searchInp1.value =  searchInp.value;
// })
// searchInp1.addEventListener('input',function(){
//     searchInp.value =  searchInp1.value;
// })

let asideitemDoms=document.querySelectorAll('.aside-item');
for(let i=0;i<asideItemDoms.length;i++){
    let itemid=asideitemDoms[i].dataset.id;
    location.href='#'+itemid;
}
document.querySelector('.bookinto').addEventListener('click',function(){
    location.href='goodsInfo.html';
})