document.addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelectorAll('div.nut ul li');
    var slides = document.querySelectorAll('div.slide div');
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {
            var nutnay = this;
            var vitrislide = 0;
            console.log(nutnay.previousElementSibling);
            for (var i = 0; nutnay = nutnay.previousElementSibling; vitrislide++) {
                //chay den khi nut nay  = null thi dung.
                // chay xong lenh nay khi click vao nut ta lay dc vitrislide
            }
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('ra');
            }
            for (var i = 0; i < slides.length; i++) {
                slides[vitrislide].classList.add('ra');
            }
        })
    }
    // Click chuyen slide

    auto();
    function auto() {
        var thoigian = setInterval(function () {
            var slide = document.querySelector('div.slide div.ra');
            var vitrislide = 0;
            for (var i = 0; slide = slide.previousElementSibling; vitrislide++) {
            }
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('ra'); // remove hết những thằng đang có class 'ra'
            }
            if (vitrislide == slides.length - 1) {
                slides[0].classList.add('ra');
                // Thằng này có nghĩa là sau khi tự động chuyển đến slide cuối cùng nó quay lại thằng 0
            }
            else {
                slides[vitrislide].nextElementSibling.classList.add('ra');
                // Đây là then chốt của auto slide nó sẽ chuyển sang cái thằng tiếp theo.
            }
        }, 5000)
        // Tu dong chuyen slide
        for (var i = 0; i < 3; i++) {
            nut[i].addEventListener('click', function () {
                clearInterval(thoigian);
                //Click vào một nút bất kì dừng auto chuyển slide
            })
        }
        // Dung tu dong chuyen slide
    }

    var x = setInterval(function () {
    }, 1000);

}, false)

product = [
    {
        "id": "1",
        "name": "Mô hình Yuumi Hiệu Trưởng Chiến Binh - Battle Principal Yuumi Team Mini - Limited Edition",
        "img": "img/yumi.png",
        "price": "1280000",
        "status": true
    },
    {
        "id": "2",
        "name": "Mô hình VALORANT Phoenix Statue 30cm - Chính hãng Riot Games",
        "img": "img/phoenix.png",
        "price": "5999999",
        "status": true
    },
    {
        "id": "3",
        "name": "Mô hình Xayah & Rakan Unlocked Statue - Mô hình LMHT chính hãng Riot Games",
        "img": "img/xayah-rakan.png",
        "price": "3050000",
        "status": true
    },
    {
        "id": "4",
        "name": "Mô hình VALORANT Jett Statue 29cm - Chính hãng Riot Games",
        "img": "img/jett.png",
        "price": "5999999",
        "status": true
    },
    {
        "id": "5",
        "name": "Mô hình Garen Chibi - GAREN FIGURE",
        "img": "img/2018-09-07-000255648garenbox.jpg",
        "price": "540000",
        "status": true
    },
    {
        "id": "6",
        "name": "Mô hình Kayn Hung Thần Không Gian - ODYSSEY TEAM MINI - KAYN",
        "img": "img/kayn-a1.png",
        "price": "620000",
        "status": true
    },
    {
        "id": "7",
        "name": "Mô hình Seraphine Chibi - K/DA ALL OUT Seraphine Figure - Chính hãng Riot Games",
        "img": "img/seraphine.png",
        "price": "5999999",
        "status": true
    },
    {
        "id": "8",
        "name": "Mô hình Zoe size XL 14cm - ZOE XL FIGURE",
        "img": "img/zoe-1.png",
        "price": "1340000",
        "status": true
    }
]

var productDiv = document.getElementById('product');

function showProduct() {
    for (var i = 0; i < product.length; i++) {
        productDiv.innerHTML += `
            <div class="item">
            <img class="product-img" src="${product[i].img}" alt="" >
            <h2 class="product-name">${product[i].name}</h2>
            <p class="product-price">${product[i].price}</p>
            <p class="product-status">${product[i].status ? "còn hàng" : "hết hàng"}</p>
            <button class="btn-add" id="btn" onclick="addToCart(${product[i].id})">Thêm vào giỏ hàng</button>
            </div>
        `
    }
}

showProduct()

// var btn = document.getElementById('btn');
// function showBtn(){
//     for(var i = 0; i<product.length; i++){
//         if(product[i].status == false){
//             btn.style.display = 'none'
//         }
//         else{
//             btn.style.display = 'block'
//         }
//     }
// }

// showBtn()

var cartData = [];

function addToCart(id) {
    for (var i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            var newProduct = {
                "id": product[i].id,
                "name": product[i].name,
                "img": product[i].img,
                "price": product[i].price,
                "status": product[i].status
            }
        }
    }
    console.log(newProduct);
    alert('Bạn đã thêm sản phẩm thành công vào giỏ hàng')
    cartData.push(newProduct);
    console.log(cartData);
    showCart()
    totalPrice(cartData)
}


function showCart() {
    var tableData = document.getElementById('table-data');
    tableData.innerHTML = " ";
    for (var i = 0; i < cartData.length; i++) {
        tableData.innerHTML += `
       <tr>
            <td>${i + 1}</td>
            <td>${cartData[i].name}</td>
            <td><img src = ${cartData[i].img} </img></td>
            <td>${cartData[i].price}</td>
            <td>${cartData[i].status ? "Còn hàng" : "Hết hàng"}</td>
       </tr>
       `
    }
}

function totalPrice(carts) {
    console.log(carts)
    var total = document.querySelector('#total');
    var totalPrice = carts.reduce(function (accumulator, currentIndex) {
        return accumulator + currentIndex.price
    }, 0);
    total.innerHTML = totalPrice
}

var Show = document.getElementById('show-cart');
var cartDiv = document.getElementById('cart')
Show.onclick = function () {
    if (cartData == "") {
        alert('Giỏ hàng trống !!!')
    } else {
        cartDiv.classList.toggle('show')
        productDiv.classList.toggle('hide')
    }
}

var btnRemove = document.getElementById('remove');
btnRemove.onclick = function remove() {
    cartData.splice(0, cartData.length);
    showCart();
    productDiv.classList.toggle('hide');
    cartDiv.classList.toggle('show');
}

var thanhToan = document.getElementById('thanhToan');
thanhToan.onclick = function () {
    alert('Cảm ơn bạn đã mua hàng');
    cartData.splice(0, cartData.length);
    showCart();
    productDiv.classList.toggle('hide');
    cartDiv.classList.toggle('show');
}

//kiemtra email
// function check() { 
//     var email = document.getElementById('email'); 
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/; 
//     if (!filter.test(email.value)) { 
//              alert('Email sai hãy nhập lại email hợp lệ.\nExample@gmail.com');
//              return false; 
//     }
// }

 
function check() {
    var names = document.getElementById('hoTen');
    var ghichu = document.getElementById('ghichu');
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;
    if (!filter.test(email.value)) {
        alert('Email sai hãy nhập lại email hợp lệ.\nExample@gmail.com');
        return false;
    }
    else if (names.value.trim() == "") {
        alert("Dữ liệu tên sai")
    }
    else if(ghichu.value.length > 200){
        alert('Dữ liệu ghi chú sai')
    }
    else {
        alert('Bạn đã đăng kí thằng công')
    }
}