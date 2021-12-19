async function getWishlist() {
    let cookie = document.cookie;

    if (cookie.length <= 1) {
        courseCart.innerText = data.length + " Courses in Cart";

        const cartItems = document.getElementById("wishlist")
        // const cartSummary = document.getElementById("cartSummary");
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
        let parent = document.getElementById("displayDiv");
        
        cookie = cookie.split('=') ;

        let token = cookie[1];

        let datas = await makeRequest(token);
        
        datas = datas[0].wishList;
        console.log("data in wishlist Page is:", datas);

        parent.innerHTML = "";
        datas.forEach((el) => {
            let div = document.createElement("div");
            div.setAttribute('class', 'mx-4 my-4 h-52 truncate border transform hover:scale-105 transition cursor-pointer');
            div.addEventListener("click", () => {
                console.log("el", el._id);
                window.location.href = `/desc/${el._id}`;
            })
            let divRating = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p");
            p.setAttribute("class", "font-bold ml-2")
            let t = document.createElement("p");
            t.setAttribute("class", "ml-2");
            let rating = document.createElement("p");
            rating.innerText = el.rating;
            rating.setAttribute("class", "ml-2");
            let stat = document.createElement("p");
            stat.innerText = "⭐⭐⭐⭐⭐";
            stat.setAttribute("class", "mr-2 text-sm")

            divRating.append(rating, stat);
            divRating.setAttribute("class", "flex justify-between");

            img.src = el.image;
            p.innerText = el.name;
            t.innerText = el.title;
            div.append(img, p, t, divRating);
            parent.append(div);

        })
    }
}

