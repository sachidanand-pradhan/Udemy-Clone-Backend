console.log("cart script is running");
var total = 0;

let courseCart = document.getElementById("courseCart");
courseCart.innerText = null;

// add(cart);
async function loadCart() {
    // data = JSON.parse(data);
    createCarousel();

    let cookie = document.cookie;
    let data;

    if (!cookie || cookie.length <= 1) {
        data = JSON.parse(localStorage.getItem('udemyCart'));
        console.log("local stroage data in loadCart", data);
    } else {
        cookie = cookie.split('=');
        let token = cookie[1];

        data = [];

        let res = await makeRequest(token);
        console.log("res in cart page is:", res);

        if (res[0].cartItems.length !== 0) { data = res[0].cartItems }
        console.log("cart Item in cart page is :", data);
    }

    if (!data || data.length == 0) {
        courseCart.innerText = data.length + " Courses in Cart";

        const cartItems = document.getElementById("items_inCart")
        const cartSummary = document.getElementById("cartSummary");
        cartSummary.style.display = 'none';
        // console.log(cartItems);

        var img = document.createElement("img");
        img.src = "https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg";
        img.className = 'm-auto'

        var para = document.createElement("p")
        para.textContent = "Your cart is empty. Keep shopping to find a course";
        para.className = 'm-auto';
        para.style.width = 'fit-content';

        let keepShopping = document.createElement("div");
        keepShopping.innerText = "Keep Shopping";
        keepShopping.className = '0 p-4 m-auto text-white bg-purple-800 my-10';
        keepShopping.style.width = 'fit-content';
        keepShopping.onclick = () => { window.location.href = '/home' };

        cartItems.append(img, para, keepShopping)
        // var p_item = document.getElementById("coursenum")
        // p_item.textContent = `${total} Courses in the cart`;
    }
    else {

        add(data);

    }
    function add(data) {
        // console.log("hii"+data);
        var d = document.getElementById("items_inCart");

        data.forEach((el) => {
            courseCart.innerText = data.length + " Courses in Cart";

            let div = document.createElement("div");
            div.setAttribute('class', 'flex border p-2');
            div.width = 'fit-content';

            let left = document.createElement("div");
            left.className = 'text-right';

            let mid = document.createElement("div");
            // mid.className 

            let right = document.createElement("div");
            right.className = 'text-right px-2';

            left.style.width = "30%";
            // left.style.border = "2px solid black";
            left.style.marginLeft = "5px";

            mid.style.width = "55%";
            mid.style.margin = "0px 10px";
            // mid.style.border = "2px solid black";

            right.style.width = "11%";
            right.style.margin = "0px 10px";
            // right.style.border = "2px solid black";

            let img = document.createElement("img");
            img.src = el.image;
            left.append(img);
            img.style.width = "100%";
            img.setAttribute('class', 'cursor-pointer')

            let p = document.createElement("p");
            p.innerText = el.title;
            p.setAttribute('class', 'font-bold cursor-pointer h-6 overflow-hidden');

            let author = document.createElement("p");
            author.innerText = el.author;
            author.setAttribute('class', 'lg:flex text-sm text-gray-800 m-0 hidden cursor-pointer h-4 overflow-hidden');

            let ratingDiv = document.createElement("div");
            ratingDiv.className = 'flex  py-2';

            if (el.rating >= 4.8) {
                let bestSeller = document.createElement('div');
                bestSeller.setAttribute('class', 'text-sm w-max px-1 font-semibold mr-3');
                bestSeller.style.background = '#eceb98';
                bestSeller.style.color = '#3d3c0a';
                bestSeller.innerText = 'Bestseller';
                ratingDiv.append(bestSeller);
            }

            let rating = document.createElement("p");
            rating.innerText = el.rating;
            rating.className = 'text-xs text-orange-400 font-bold pt-1';

            let stars = document.createElement('div');
            stars.setAttribute('class', 'flex w-max h-max mx-1.5 my-0 inline-block right-4 pt-1');
            stars.innerHTML = `<img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5'/>
                       <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5'/>
                       <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5'/>
                       <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5'/>
                       <img src="https://img.icons8.com/color/14/000000/star-half-empty.png" class='h-4 w-3.5'/>`

            let noOfRatings = document.createElement('p');
            noOfRatings.setAttribute('class', 'text-xs text-gray-500 my-0 pt1');
            noOfRatings.innerHTML = '(118,644)';

            ratingDiv.append(rating, stars, noOfRatings);

            let hoursAndLectures = document.createElement('p');
            hoursAndLectures.textContent = '30 total hours • 380 lectures • All Levels';
            hoursAndLectures.className = 'text-xs text-gray-700';

            let idDiv = document.createElement('p');
            idDiv.innerText = el._id;
            idDiv.className = 'hidden courseId';

            mid.append(p, author, ratingDiv, hoursAndLectures, idDiv);

            let priceDiv = document.createElement('div');
            priceDiv.className = 'flex text-right justify-end';

            let price = document.createElement("p");
            price.innerText = "₹" + el.price;
            price.setAttribute('class', 'font-bold text-lg m-0 p-0');

            let tag = document.createElement('div');
            tag.className = 'mt-2 pl-1'
            tag.innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/16/000000/external-tag-interface-kiranshastry-solid-kiranshastry.png"/>'
            priceDiv.append(price, tag);

            let oldprice = document.createElement("p");
            oldprice.innerText = "₹" + 1055;
            oldprice.setAttribute('class', 'line-through text-md text-gray-800 m-0 mr-2 p-0');

            let removeDiv = document.createElement('div');
            removeDiv.className = 'mr-4 w-44 text-right';

            let remove = document.createElement('p');
            remove.innerHTML = 'Remove';
            remove.className = 'text-purple-500  w-full cursor-pointer text-sm';

            let saveForLater = document.createElement('p');
            saveForLater.innerHTML = 'Save For Later';
            saveForLater.className = 'text-purple-500  w-full cursor-pointer text-sm';

            let moveToWishlist = document.createElement('p');
            moveToWishlist.innerHTML = 'Move To Wishlist';
            moveToWishlist.className = 'text-purple-500 w-full cursor-pointer text-sm';
            removeDiv.append(remove, saveForLater, moveToWishlist);
            remove.addEventListener('click', removeCourse);

            async function removeCourse(event) {
                let child = event.target.parentNode.parentNode;
                let data;

                let cookie = document.cookie;


                if (!cookie || cookie.length <= 1) {
                    data = JSON.parse(localStorage.getItem('udemyCart'));

                    cart = data.filter((item) => {
                        if (item.title != el.title) return item;
                    })

                    localStorage.setItem('udemyCart', JSON.stringify(cart));
                    child.remove();
                } else {
                    let idOfProduct = child.querySelector('.courseId').textContent;
                    // console.log("the id in the child is :", idOfProduct);

                    cookie = cookie.split('=');
                    // console.log("docum.cookie", cookie);

                    let token = cookie[1];

                    let res = await makeRequest(token);
                    // console.log("the produt data in carousel addd to cart is ", p);

                    let userId = res[0]._id;
                    // console.log("userId in add to cart :", userId);

                    let out = await fetch(`http://localhost:2345/login/updateCart/${userId}`, {
                        method: "DELETE",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({
                            productId: idOfProduct
                        })
                    })

                    out = await out.json();
                    console.log("out in addtocart is", out);

                    cart = out.cartItems;
                }

                let tot = cart.reduce(price_sum, 0);
                console.log(tot);

                let TotalPrice = document.getElementById("TotalPrice");
                TotalPrice.querySelector('#old').textContent = `₹${tot}`;

                let courseCart = document.getElementById("courseCart");
                courseCart.innerText = `${cart.length} courses in Cart`;

                window.location.href = '/cart';
            }

            right.append(priceDiv, oldprice);
            div.append(left, mid, removeDiv, right);
            d.append(div);
        });

        var tot = data.reduce(price_sum, 0);
        console.log(tot);

        document.getElementById('old').textContent = `₹${tot}`;
    }
}


function price_sum(ac, el) {
    return ac + el.price;
}


let promocode = document.getElementById("promocode").value;
// console.log(promocode);
const applied = document.getElementById("applid");
// console.log(applied);
applied.addEventListener("click", () => {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.display = "none";
    applied.style.display = 'none';
})


function discount() {
    let data = JSON.parse(localStorage.getItem("udemyCart"));
    let coupon = document.getElementById("promocode");
    console.log(coupon.value);

    let tot = data.reduce(price_sum, 0);
    console.log(tot);


    if (coupon.value == "masai10") {
        alert('10% discount has been applied');
        var sum = Math.ceil(tot - (tot * 0.10));
        TotalPrice.querySelector('#old').style.textDecoration = 'line-through';
        TotalPrice.querySelector('#new').textContent = "₹" + sum;
        let update = document.getElementById("update");
        update.innerText = null;

        update.append("coupon code is applied");
        update.style.color = "green";
    } else {
        let update = document.getElementById("update");
        update.innerText = null;
        update.append("Coupon Code Not Valid!");
        update.style.color = "red";
        return;
    }

}


// <-----------  popup option for signup ------------->

var cross1 = document.getElementById('cross')
cross1.addEventListener('click', hiddenkaro)

var popupBox = document.getElementById('popupBox')



//  var showbtn = document.getElementById('showbtn')
//   showbtn.addEventListener('click',showkaro)

var checkoutBtn = document.getElementById('checkout');
checkoutBtn.onclick = () => {
 showkaro();
}


var cross1 = document.getElementById('cross1')
cross1.addEventListener('click', hiddenkaro)

var popupBox = document.getElementById('popupBox');


function showkaro() {
    let cookie = document.cookie;
    console.log("cookie in wishlist in carousel.js is:", cookie);

    if(cookie.length <= 1)  popupBox.setAttribute('class', 'flex backdrop-filter backdrop-brightness-50 cursor-pointer fixed w-full h-full justify-center');
    else {
        window.location.href = '/checkout'
    }
    // console.log("showkaro working");
}

function hiddenkaro() {
    popupBox.setAttribute('class', 'hidden')
}