console.log("cart script is running");
var total = 0;

let courseCart = document.getElementById("courseCart");
courseCart.innerText = null;

// add(cart);
function loadCart(input) {
    // data = JSON.parse(data);
    createCarousel(input);
    let data = JSON.parse(localStorage.getItem('udemyCart'));
    console.log("data in loadCart", data);

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
        keepShopping.className = 'bg-purple-800 p-4 m-auto text-white my-10';
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
            div.setAttribute('class', 'flex m-2 border ');
            div.width = 'fit-content';

            let left = document.createElement("div");
            let mid = document.createElement("div");
            let right = document.createElement("div");


            left.style.width = "30%";
            // left.style.border = "2px solid black";
            left.style.marginLeft = "5px";

            mid.style.width = "60%";
            mid.style.marginLeft = "5px";
            // mid.style.border = "2px solid black";


            right.style.width = "10%";
            right.style.margin = "5px";
            // right.style.border = "2px solid black";

            let img = document.createElement("img");
            img.src = el.image;
            left.append(img);
            img.style.width = "100%";
            img.setAttribute('class', 'cursor-pointer my-4  ')

            let p = document.createElement("p");
            p.innerText = el.name;
            p.setAttribute('class', 'font-bold cursor-pointer');

            let title = document.createElement("p");
            title.innerText = el.title;
            title.setAttribute('class', 'lg:flex hidden cursor-pointer');

            let author = document.createElement("p");
            author.innerText = el.author;

            let rating = document.createElement("p");
            rating.innerText = el.rating + " ⭐⭐⭐⭐⭐";

            mid.append(p, title, author, rating);


            let price = document.createElement("p");
            price.innerText = "Rs " + el.price;
            price.setAttribute('class', 'font-bold');
            let oldprice = document.createElement("p");
            // text-decoration: line-through;
            oldprice.innerText = "₹" + 1055;
            oldprice.setAttribute('class', 'line-through');

            let removeDiv = document.createElement('div');
            removeDiv.className = 'm-4 w-48';
            let remove = document.createElement('p');
            remove.innerHTML = 'Remove';
            remove.className = 'text-purple-500  cursor-pointer text-sm';

            let saveForLater = document.createElement('p');
            saveForLater.innerHTML = 'Save For Later';
            saveForLater.className = 'text-purple-500  cursor-pointer text-sm';

            let moveToWishlist = document.createElement('p');
            moveToWishlist.innerHTML = 'Move To Wishlist';
            moveToWishlist.className = 'text-purple-500 cursor-pointer text-sm';

            removeDiv.append(remove, saveForLater, moveToWishlist);
            remove.addEventListener('click', removeCourse);
            function removeCourse(event) {
                let child = event.target.parentNode;

                let cart = data.filter((item) => {
                    if (item.title != el.title) return item;
                })
                localStorage.setItem('udemyCart', JSON.stringify(cart));
                child.remove();

                let tot = cart.reduce(price_sum, 0);
                console.log(tot);

                let TotalPrice = document.getElementById("TotalPrice");
                TotalPrice.querySelector('#old').textContent = `Rs. ${tot}`;

                let courseCart = document.getElementById("courseCart");
                courseCart.innerText = `${cart.length} courses in Cart`;
                window.location.href = '/cart';
            }
            right.append(price, oldprice);
            div.append(left, mid, removeDiv, right);
            d.append(div);
        });

        var tot = data.reduce(price_sum, 0);
        console.log(tot);

        document.getElementById('old').textContent = `Rs ${tot}`;
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
        TotalPrice.querySelector('#new').textContent = "Rs" + sum;
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

