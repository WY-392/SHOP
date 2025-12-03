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
for (let i = 0; i < 5; i++) {
    allItemsHTML += bookItemTemplate;
}
bookItemsContainer.innerHTML = allItemsHTML;


let trendingitemDom = document.querySelector('.trending-booklist');
let trendingarr = `<div class="trending-booklist-item">
                <img src="./images/book4.png" alt="">
                <div class="trending-item-line"></div>
            </div>`;
let alltrending = ` <div class="trending-firstitem">
                <div class="trending-top">看了又看</div>
            <img src="./images/book4.png" alt="">
            <div class="trending-line"></div>
            </div>`;
for (let i = 0; i < 6; i++) {
    alltrending += trendingarr;
}
trendingitemDom.innerHTML = alltrending;


let allEvaluationlistdom = document.querySelector('.allEvaluation-list');
let Evaluationcontent = ` <div class="allEvaluation-content">
                    <!-- 评论时间 -->
                    <div class="allEvaluation-time">
                        <div>
                          <img src="./images/full星星.png" alt="">
                            <img src="./images/full星星.png" alt="">
                            <img src="./images/full星星.png" alt="">
                            <img src="./images/full星星.png" alt="">
                            <img src="./images/full星星.png" alt="">
                        </div>
                        <div>下单后五天评论</div>
                        <div>2016-08-11</div>
                    </div>
                    <div class="allEvaluation-content-text">书的质量不错，很新，一点放久的潮味或臭味都没有，内容也值得一看，关
                        键是价格真给力</div>
                    <div class="allEvaluation-user">
                        <div>万毅</div>
                        <div>金牌会员</div>
                        <div>来自手机端</div>
                    </div>
                </div>
                <div class="allEvaluation-line"></div>`;
let allEvaluationarr = ``;
for (let i = 0; i < 12; i++) {
    allEvaluationarr += Evaluationcontent;
}
allEvaluationlistdom.innerHTML = allEvaluationarr


//星星动态渲染
let startcontainerDom = document.querySelector('.start-container');
let fullstarDom = document.querySelector('.fullstar');
startcontainerDom.addEventListener('mouseover', function (event) {
    let x = event.layerX;
    fullstarDom.style.width = x+'px';
})
startcontainerDom.addEventListener('click', function (event) {
    let x = event.layerX;
    fullstarDom.style.width = x+'px';
})

let positiveDom=document.querySelector('.positive-rating-container');
let positiveArr2=`<div class="positive-rating">
                    <div>${positiveArr[0].nicePositive}%</div>
                    <div>好评度</div>
                </div>
                <div class="progress-bar-container">
                    <div class="positive-review">好评（${positiveArr[0].nicePositive}%)
                        <div class="progress-nice"><div></div></div>
                        
                    </div>
                    <div class="positive-review">中评（${positiveArr[0].publicPositive}%)
                         <div class="progress-public"><div></div></div>
                    </div>
                    <div class="positive-review">差评（${positiveArr[0].badPositive}%)
                         <div class="progress-bad"><div></div></div>
                    </div>
                </div>`
                positiveDom.innerHTML=positiveArr2;

let progressnicebar=document.querySelector('.progress-nice>div');
let progresspublicbar=document.querySelector('.progress-public>div');
let progressbadbar=document.querySelector('.progress-bad>div');

progressnicebar.style.width=(positiveArr[0].nicePositive)/100*150+'px';
progresspublicbar.style.width=(positiveArr[0].publicPositive)/100*150+'px';
progressbadbar.style.width=(positiveArr[0].badPositive)/100*150+'px';

// 图片选项卡
let mainimgDom=document.querySelector('.main-img');
let imgcontentDom=document.querySelector('.img-content');
let prvimgDom=document.querySelector('.prv-img');
let nextimgDom=document.querySelector('.next-img');
let imglist='';
let imgcontent='';
for(let i=0;i<shopdel.length;i++){
    imglist+=`<img src="${shopdel[i]}" alt="" class="mainitem">`
      imgcontent+=`<img src="${shopdel[i]}" alt="" class="imgcontent">`
    }
 mainimgDom.innerHTML=imglist;
  imgcontentDom.innerHTML=imgcontent;

  let mainimgDoms=document.querySelectorAll('.mainitem');
  let imgcontentDoms=document.querySelectorAll('.imgcontent');

// 默认选中第一张，显示第一张
  mainimgDoms[0].style.display='block';
    imgcontentDoms[0].style.border='2px soild #f60'
 let imgindex=0;
    // 移动上去显示对应图片
for(let i=0;i<imgcontentDoms.length;i++){
      imgcontentDoms[i].addEventListener('mouseover',function(){
        imgindex=i;
    activeimgstyle(imgindex);
  })
}


// 监听上一张和下一张的click事件
let prvimg=document.querySelector('.prv-img');
let nextimg=document.querySelector('.next-img');
prvimg.addEventListener('click',function(){
    imgindex--;
    if(imgindex<0){
        imgindex=imgcontentDoms.length-1;
    }
     activeimgstyle(imgindex);
})
nextimg.addEventListener('click',function(){
    imgindex++;
    if(imgindex>imgcontentDoms.length-1){
        imgindex=0;
    }
     activeimgstyle(imgindex);
})

function activeimgstyle(imgindex){
    for(let j=0;j<mainimgDoms.length;j++){
        mainimgDoms[j].style.display='none';
        imgcontentDoms[j].style.border='none';
    }
    mainimgDoms[imgindex].style.display='block';
    imgcontentDoms[imgindex].style.border='2px solid #f60'
}