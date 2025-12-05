let likeshopDoms = document.querySelector('.guess-like-list');
let shoplistArr = ``;
for (let i = 0; i < 5; i++) {
    shoplistArr += ` <div class="shop-items">
                    <img src="${guessshopArr[i].shopimg}" alt="" class="shop-img">
                    <img src="./images/limitTime.jpg" alt="" class="discount">
                    <div class="likeshop-name">${guessshopArr[i].shopname}</div>
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
                <div class="likeshop-price">${guessshopArr[i].sellprice} <span>${guessshopArr[i].beforeprice}</span></div>
                </div>`
}
likeshopDoms.innerHTML = shoplistArr;


// 购物车算账功能
// 用户选择商品，就将商品信息获取到，然后将其加入到购物车

// 商品列表的Doms
let shopitemDoms = document.querySelectorAll('.shop-items');
// 在购物车的商品的Dom
let shopdescDom = document.querySelector('.shop-item-container');
// 第一个全选按钮
let selectallDom = document.querySelector('.selecta-all-icon');
// 第二个全选按钮
let selectall2Dom = document.querySelector('.select-allshop');
let carshopList = [];
let shopcar = '';
// 监听点击事件
for (let i = 0; i < shopitemDoms.length; i++) {
    shopitemDoms[i].addEventListener('click', function () {
        shopcar = ` <div class="shop-desc">
           <input type="checkbox" class="select-shop">
            <div class="shop-photo">
                <img src="${guessshopArr[i].shopimg}" alt="">
            </div>
            <div class="shop-name">${guessshopArr[i].shopname}</div>
            <div class="shop-price2">${guessshopArr[i].sellprice}</div>
               <div class="control-less">-</div>
            <div class="control-num">${guessshopArr[i].shopnumber}</div>
             <div class="control-add">+</div>
             <div class="pricesum">${guessshopArr[i].sellprice * guessshopArr[i].shopnumber}</div>
            <div class="control-delete">
                <div class='deletebtn'>删除</div>
                <div>移动到我的关注</div>
            </div>
        </div> `
        for (let j = -1; j < carshopList.length; j++) {
            if (carshopList.indexOf(shopcar) != -1) {
                index = carshopList.indexOf(shopcar);
                let shopnum = document.querySelectorAll('.control-num');
                let sellprice = document.querySelectorAll('.shop-price2');
                let priceSum = document.querySelectorAll('.pricesum');
                shopnum[index].innerHTML = Number(shopnum[index].innerHTML) + 1;
                priceSum[index].innerHTML = Number(sellprice[index].innerHTML) * Number(shopnum[index].innerHTML);
                break;
            }
            else if (j >= carshopList.length - 1) {
                selectallDom.checked = false;
                selectall2Dom.checked = false;
                carshopList.push(shopcar);
                shopdescDom.insertAdjacentHTML('beforeend', shopcar);
                break;
            }
        }
    })
}


//已经选中的商品个数的Dom
let alreadyselectDom = document.querySelector('.alredy-selectshop span')
//总价
let sumpriceDom = document.querySelector('.sumprice span');
// 购物车商品容器
let shopitemDom = document.querySelector('.shop-item-container');
//删除选择商品
let delselectDom = document.querySelector('.delete-select');
// 记录选择个数
let selectshop = 0;
// 记录总价格
let summoney = 0;
sumpriceDom.innerHTML = summoney;
alreadyselectDom.innerHTML = selectshop;


//小计的计算
shopitemDom.addEventListener('click', function (event) {
    let target = event.target;
    let shopnumDoms = document.querySelectorAll('.control-num');
    let shoppricesumDoms = document.querySelectorAll('.pricesum');
    let shoppriceDoms = document.querySelectorAll('.shop-price2');


    if (target.classList.contains('control-add')) {
        let alladdbtn = Array.from(document.querySelectorAll('.control-add'));
        let selectshopBtnDoms = document.querySelectorAll('.select-shop');
        let shoppriceDoms = document.querySelectorAll('.shop-price2');
        index = alladdbtn.indexOf(target)
        shopnumDoms[alladdbtn.indexOf(target)].innerHTML++;
        shoppricesumDoms[index].innerHTML = Number(shoppriceDoms[index].innerHTML) * Number(shopnumDoms[index].innerHTML);
        if (selectshopBtnDoms[index].checked == true) {
            sumpriceDom.innerHTML = Number(sumpriceDom.innerHTML) + Number(shoppriceDoms[index].innerHTML);
        }
    }
    if (target.classList.contains('control-less')) {
        let selectshopBtnDoms = document.querySelectorAll('.select-shop');
        let shoppriceDoms = document.querySelectorAll('.shop-price2');
        let alladdbtn = Array.from(document.querySelectorAll('.control-less'));
        index = alladdbtn.indexOf(target)
        shopnumDoms[alladdbtn.indexOf(target)].innerHTML--;
        if (shopnumDoms[index].innerHTML < 1) {
            shopnumDoms[index].innerHTML = 1;

            shoppricesumDoms[index].innerHTML = shoppricesumDoms[index].innerHTML;
        } else {

            shoppricesumDoms[index].innerHTML = shoppricesumDoms[index].innerHTML - Number(shoppriceDoms[index].innerHTML);
        }
        if (selectshopBtnDoms[index].checked == true) {
            sumpriceDom.innerHTML = Number(sumpriceDom.innerHTML) - Number(shoppriceDoms[index].innerHTML);
        }
    }

    // 删除按钮
    if (target.classList.contains('deletebtn')) {
        let shopdescDoms = document.querySelectorAll('.shop-desc');
        console.log(shopdescDoms);
        let selectshopDoms = document.querySelectorAll('.select-shop');
        let alladdbtn = Array.from(document.querySelectorAll('.deletebtn'));
        let sumpriceDoms = document.querySelectorAll('.pricesum');
        index = alladdbtn.indexOf(target);
        shopdescDoms[index].remove();
        carshopList.splice(index, 1);
        if (selectshopDoms[index].checked == true) {
            sumpriceDom.innerHTML = sumpriceDom.innerHTML - sumpriceDoms[index].innerHTML;
            alreadyselectDom.innerHTML = alreadyselectDom.innerHTML - 1;
        }
    }

    if (target.classList.contains('select-shop')) {
        let allselectbtn = Array.from(document.querySelectorAll('.select-shop'));
        let selectshopBtnDoms = document.querySelectorAll('.select-shop');
        index = allselectbtn.indexOf(target);
        if (selectshopBtnDoms[index].checked == false) {
            selectallDom.checked = false;
            selectall2Dom.checked = false;
        }
        for (let j = 0; j < selectshopBtnDoms.length; j++) {
            selectshopBtnDoms[j].addEventListener('click', function () {
                for (let i = 0; i < selectshopBtnDoms.length; i++) {
                    if (selectshopBtnDoms[i].checked == false) {
                        console.log(1);
                        break;
                    } else if (i >= (selectshopBtnDoms.length - 2)) {
                        console.log(2);
                        selectallDom.checked = true;
                        selectall2Dom.checked = true;
                    }
                }
            })
        }
    }
})
// 删除选择商品
delselectDom.addEventListener('click', function () {
    let selectshopBtnDoms = document.querySelectorAll('.select-shop');
    let shoppriceDoms = document.querySelectorAll('.pricesum');
    let alreadyselDom = document.querySelector('.alredy-selectshop span');
    let shopdescDoms = document.querySelectorAll('.shop-desc');
    for (let i = selectshopBtnDoms.length - 1; i >= 0; i--) {
        if (selectshopBtnDoms[i].checked == true) {
            carshopList.splice(i, 1);
            shopdescDoms[i].remove();
            summoney = summoney - Number(shoppriceDoms[i].innerHTML);
            sumpriceDom.innerHTML = Number(sumpriceDom.innerHTML) - Number(shoppriceDoms[i].innerHTML);
            alreadyselDom.innerHTML = Number(alreadyselDom.innerHTML) - 1;
            selectallDom.checked = false;
            selectall2Dom.checked = false;
        }

    }
})

// 第一个全选按钮
selectallDom.addEventListener('click', function () {
    // 获取所有在购物车input框节点
    let selectshopDoms = document.querySelectorAll('.select-shop');
    //  获取所有加入购物车商品的价格
    let shopmoneyDoms = document.querySelectorAll('.pricesum');
    //  第二个全选按钮也变true
    selectall2Dom.checked = selectallDom.checked;
    // 计算总价
    for (let i = 0; i < selectshopDoms.length; i++) {
        if (selectshopDoms[i].checked == false) {
            selectshop = selectshopDoms.length;
            selectshopDoms[i].checked = selectallDom.checked;
            summoney += Number(shopmoneyDoms[i].innerHTML);
            sumpriceDom.innerHTML = summoney;
        }
        sumpriceDom.innerHTML = summoney;
        alreadyselectDom.innerHTML = selectshop;
    }
    if (selectallDom.checked == true) {
        alreadyselectDom.innerHTML = selectshop;
    }


    if (selectallDom.checked == false) {
        for (let i = 0; i < selectshopDoms.length; i++) {
            selectshopDoms[i].checked = selectallDom.checked;
            summoney = 0;
            selectshop = 0;
        }
    }
    sumpriceDom.innerHTML = summoney;
    alreadyselectDom.innerHTML = selectshop;
});


shopitemDom.addEventListener('mouseover', function () {
    let selectshopDoms = document.querySelectorAll('.select-shop');
    let shopmoneyDoms = document.querySelectorAll('.pricesum');
    for (let i = 0; i < selectshopDoms.length; i++) {
        selectshopDoms[i].addEventListener('change', function () {
            //    遍历复选框，为true就加上价格
            summoney = 0;
            selectshop = 0;
            for (let i = 0; i < selectshopDoms.length; i++) {
                if (selectshopDoms[i].checked == true) {
                    selectshop++;
                    summoney += Number(shopmoneyDoms[i].innerHTML);
                }
            }
            sumpriceDom.innerHTML = summoney;
            alreadyselectDom.innerHTML = selectshop;
        })
    }
})



