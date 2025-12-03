var mySwiper = new Swiper('#swiper1', {
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


let hostlistcontainerDom=document.querySelector('.hostlist-items');
let booklistArr=``;

                for(let i=1;i<8;i++){
                    bookitem=`<div class="hostlist-item">
                    <div class="hostlist-num">${i}</div>
                    <div class="hostlist-img">
                        <img src="./images/book5.jpg" alt="">
                        <div>《三体》刘慈欣
                            一场科幻的史诗
                            风暴</div>
                    </div>
                </div>`
                    booklistArr+=bookitem;
                }
                hostlistcontainerDom.innerHTML=booklistArr;

let hostlistitemDoms=document.querySelectorAll('.hostlist-item');
for(let i=0;i<hostlistitemDoms.length;i++){
    hostlistitemDoms[i].addEventListener('mouseover',function(){
        hostlistitemDoms[i].style.height='141px';
       hostlistitemDoms[i].style.overflow='visible';
    })
     hostlistitemDoms[i].addEventListener('mouseleave',function(){
    hostlistitemDoms[i].style.overflow='hidden';
    hostlistitemDoms[i].style.height='40px';
    })
}


let bookItemsContainer = document.querySelector(".book-items-container");
let bookItemTemplate = ` <div class="book-item">
                <div class="book-photo">
                    <img src="./images/book3.jpg" alt="">
                </div>
                <img src="./images/limitTime.jpg" alt="" class="Discount">
                <div class="book-item-name">白夜行  东野上吾</div>
                <div class="recommend">
                    <div class="recommend-text">推荐：</div>
                   <div class="pentagram">
                 <img src="./images/五角星.png" alt="">
                       <img src="./images/五角星.png" alt="">
                       <img src="./images/五角星.png" alt="">
                       <img src="./images/五角星.png" alt="">
                       <img src="./images/五角星.png" alt="">
                   </div>
                </div>
                <div class="book-item-price"><div>￥38</div>
                    <div>￥58</div></div>
            </div>`;
let allItemsHTML = ``;
for (let i = 0; i < 10; i++) {
  allItemsHTML += bookItemTemplate;
}
bookItemsContainer.innerHTML = allItemsHTML;


let newbookitemDom=document.querySelector('.newbook-items-container');
let newbookArr='';
for(i=0;i<10;i++){
    newbookArr+=` <div class="newbook-item">
                <img src="${shoplist[i].imgadd}" alt="">
                <div class="newbook-name">${shoplist[i].shopname}</div>
                <div class="newbook-desc">${shoplist[i].shopdesc}</div>
                <div class="newbook-price">
                    <div>${shoplist[i].changeprice}</div>
                    <div>${shoplist[i].beforeprice}</div>
                </div>
            </div>`
}
newbookitemDom.innerHTML=newbookArr;

let recommendbookDom=document.querySelector('.newbook-right-items');
let recommendbookArr=`<div class="recommend-book">
                        <div class="book-num">1</div>
                        <div class="book-name">就喜欢你看不惯我   又不干我</div>
                        <div class="book-desc-container">
                            <img src="./images/book1.jpg" alt="">
                        <div class="book-desc">从你的世界路过
                            入选央视“2014中国好书”的80后作品！十年华语畅销小说，
                            王家卫陈国富倾力推荐， 1500万次转发，超4亿次阅读</div>
                        </div>
                    </div>`;
for(let i=0;i<7;i++){
    recommendbookArr+=`  <div class="book-item-line"></div>
                    <div class="recommend-book">
                        <div class="book-num">${i+2}</div>
                        <div class="book-name">${recommendArr[i].bookName}</div>
                        <div class="book-desc-container">
                            <img src="${recommendArr[i].bookImg}" alt="">
                        <div class="book-desc">${recommendArr[i].bookContent}</div>
                        </div>
                    </div>`
}
 recommendbookDom.innerHTML=recommendbookArr;


 let booknameDoms=document.querySelectorAll('.book-name');
 let bookdescDoms=document.querySelectorAll('.book-desc-container');
 let bookrecommendDoms=document.querySelectorAll('.recommend-book');
 for(let i=0;i<8;i++){   
     bookrecommendDoms[i].addEventListener('mouseover',function(){
        for(let j=0;j<bookrecommendDoms.length;j++){
             booknameDoms[j].style.display='flex';
       bookdescDoms[j].style.display='none';
        }
       booknameDoms[i].style.display='none';
       bookdescDoms[i].style.display='flex';
    })
   }

var mySwiper = new Swiper('#swiper2', {
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

let guesslikeDom=document.querySelector('.guss-like-items');
let guesslikeArr='';
for(i=0;i<12;i++){
    guesslikeArr+=` <div class="newbook-item">
                <img src="${shoplist[i].imgadd}" alt="">
                <div class="newbook-name">${shoplist[i].shopname}</div>
                <div class="newbook-desc">${shoplist[i].shopdesc}</div>
                <div class="newbook-price">
                    <div>${shoplist[i].changeprice}</div>
                    <div>${shoplist[i].beforeprice}</div>
                </div>
            </div>`
}
guesslikeDom.innerHTML=guesslikeArr;

 
