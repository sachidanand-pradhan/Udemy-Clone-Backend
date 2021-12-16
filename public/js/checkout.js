    
    import navbar from './components/header.js';
    import footerComp from './components/footer.js';


    let promise = new Promise((resolve, reject) => {
        let headerDiv = document.getElementById('header');
        let footerDiv = document.getElementById("footerPart");

        headerDiv.innerHTML = navbar();
        footerDiv.innerHTML = footerComp();

        resolve('Navbar imported');
    });
    promise.then((res) => {
        addFunctionalityToNavbar();
    })

    function makePayment() {
        setTimeout(function () {

            alert("Congratulations! your payment is successfully paid");
            window.location.href = "home.ejs";
        }, 1000);
    }
