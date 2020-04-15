const anchorLink = document.querySelectorAll("a[href^='#']");



function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute("href");
    const scrollToElement = document.querySelector(targetID);
    scrollToElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}


for (let i = 0; i < anchorLink.length; i++) {
    anchorLink[i].addEventListener("click", smoothScroll);
}



/////////
var gr = document.getElementById("ga_ran")
let pro = document.getElementById("product")
let buy = document.getElementById('buy')
let buyy = document.getElementById('buyy')
let src, name, price, x;





let product = [{
        name: "Gà Rán",
        price: "25.000",
    },
    {
        name: "Mì Ý",
        price: "35.000",
    }, {
        name: "Hamburger",
        price: "50.000",
    }, {
        name: "Cơm",
        price: "20.000",
    }, {
        name: "Sushi",
        price: "27.000",
    }, {
        name: "Temaki",
        price: "55.000",
    }, {
        name: "Gà nướng tiêu",
        price: "36.000",
    }, {
        name: "Gà chiên nước mắm",
        price: "45.000",
    }, {
        name: "Kem",
        price: "10.000",
    },
]

let combo = [{
        name: "Combo1",
        price: "65.000",
    },
    {
        name: "Combo2",
        price: "80.000",
    }, {
        name: "Combo3",
        price: "60.000",
    }, {
        name: "Combo4",
        price: "75.000",
    },
    {
        name: "Combo5",
        price: "90.000",
    }, {
        name: "Combo6",
        price: "88.000",
    }
]

function findProduct(productName) {
    return product.find(item => {
        return productName === item.name
    })

}
// set for combo
function findCombo(productName) {
    return combo.find(item => {
        return productName === item.name
    })

}

function checkId(productName) {
    return product.find(item => {
        return productName === item.name
    })

}







function renderForm(x, src, name, price) {

    let htmlContent = `<div style="background-color: #ffde94;" id="table">
<div style=" display: flex;justify-content:flex-end; id="table">
<button type="button" class="btn btn-danger" onclick="myf(${x})">X</button>
</div>
<div class="container">
<div class="row">
        <div class="col-lg-6">
            <img src="${src}" >
            <h3 style="text-align:center">${name}  <span> :₫${price}</span></h3>
        </div>
        <div class="col-lg-6">
        <div class="form-group">
                <label for="">Your Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="Full Name" aria-describedby="helpId">
            </div>
            <div class="form-group">
                <label for="">Your address </label>
                <input type="text" name="" id="" class="form-control" placeholder="Address" aria-describedby="helpId">
            </div>
            <div class="form-group">
                <label for="">Your Phone</label>
                <input type="text" name="" id="" class="form-control" placeholder="Phone" aria-describedby="helpId">
            </div>
            <button type="button" class="btn btn-danger" onclick="addToCart()">Add To Cart</button>
            <button type="button" class="btn btn-warning" onclick="buyIt()">Buy It</button>
        </div>
    </div>
    </div>
</div>
  
`
    return htmlContent
}

// function renderCart(name, number) {
//     // 
//     let htmlContent = `<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title">${name}:<span>${number} </span>Product</h5> 
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//             </div>
//              <div class="modal-body">
//                 Thank you for Ordering. Enjoy your meal
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
//                 <button type="button" class="btn btn-warning"  onclick="buyNow()">BuyNow</button>
//             </div> 
//         </div>
//     </div>
// </div>`
//     return htmlContent
// }
function renderCart(name, number, total) {
    // 
    let htmlContent = `<div class="modal fade" id="modelId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title"> Thank you for Ordering. Enjoy your meal</h6> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
             <div class="modal-body">
             ${name}:<span>${number} </span>Product
                
            </div>
            <div class="modal-footer">
            <h5 class="mr-auto">Total:₫${total}.000</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-warning "   onclick="buyNow()">BuyNow</button>
            </div> 
        </div>
    </div>
</div>`
    return htmlContent
}

function renderSearch(picture, name, price) {
    // 
    let htmlContent = `<div class="modal fade" id="modelId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="display:inline-block">
            <div class="modal-header">
                <h6 class="modal-title"> Welcome To Veronicas</h6> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <img src="${picture}" style="width:200px" >
             <span class="modal-body" style="font-size:30px">:
             ${name}     
           </span>
            <div class="modal-footer">
            <h5 class="mr-auto">Price:₫${price} </h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-warning "   onclick="buyNow()">BuyNow</button>
            </div> 
        </div>
    </div>
</div>`
    return htmlContent
}

let cart = document.getElementById('cart')
console.dir(cart)

var count = 0
var check0 = document.getElementById('check0')
var check = [];
var checkPrice = [];
var xem = document.getElementById('xem')
let modelId = document.getElementById('modelId')


function puss(name, price) {
    check.push(name)
    checkPrice.push(price)
}


var menu = document.getElementsByClassName('box')
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function render() {

        productID = menu[i].id
        item = findProduct(productID)
        name = item.name;
        price = item.price;
        src = (menu[i].childNodes[1].src);
        x = 'buy'
        const htmlContent = renderForm(x, src, name, price)
        buy.innerHTML = htmlContent;
        buy.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })



    })

    function myf(x) {
        x.innerHTML = ''

    }


    function buyIt() {
        alert("Thanks You Ordering")
    }

    function addToCart() {
        count++;
        cart.innerHTML = count;
        console.log(productID);
        puss(productID, price)

    }



}
let j = 0;
var man = document.getElementsByClassName('boxx')
for (let i = 0; i < man.length; i++) {
    man[i].addEventListener('click', function render() {

        productID = man[i].id
        item = findCombo(productID)
        name = item.name;
        price = item.price;
        x = 'buyy'

        src = (man[i].childNodes[1].src)

        const htmlContent = renderForm(x, src, name, price)
        buyy.innerHTML = htmlContent;
        buyy.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })

    })

    function myf(x) {
        x.innerHTML = ''

    }



    function buyIt() {
        alert("Thanks You Ordering")


    }


    var total = 0;


    function addToCart() {
        count++
        cart.innerHTML = count
        console.log(price)
        puss(productID, price)

        for (j; j < checkPrice.length; j++) {
            total += parseInt(checkPrice[j])

        }
        console.log(j)

    }


}

check0.addEventListener('click', function() {



    // let count = 0;

    // for (let i = 0; i < check.length; i++) {
    //     if (check[i] === check[i])
    //         count++
    // }


    // Number(checkPrice)



    console.log(checkPrice)
    console.log(total)
    xem.innerHTML = renderCart(check, count, total)




})

function addcart() {
    checkPrice = [];
    total = 0;
    count = 0;
    cart.innerHTML = count;
    check = [];
    console.log(total)


}

function buyNow() {
    alert('Successful Order')
    addcart();
    j = 0;
    console.log(j)


}




var feed = 'feedBack';
var feedback = localStorage.getItem(feed);
var feedBack;

if (feedback) {
    feedBack = JSON.parse(feedback);
} else {
    feedBack = [];
}


var addBtn = document.getElementById('add-btn');



function addItem() {
    var input = document.getElementById('feed');
    var newFeed = input.value;
    feedBack.push(newFeed);
    input.value = '';
    localStorage.setItem(feed, JSON.stringify(feedBack))
    alert('Thanks you for FeedBack')

}

if (document.getElementById("ten").innerHTML = localStorage.getItem("users")) {
    document.getElementById('ss').style.display = 'none'
}

function log() {
    firebase.auth().signOut().then(function() {
        window.location = "./index.html"
        localStorage.clear()
        document.getElementById('ss').style.display = 'block'


    }, function(error) {
        throw new Error("Failed")

    });
}



var inputSearch = document.getElementById('input-search')
var formSearch = document.getElementById('formSearch')


var search = document.getElementById('search')
search.addEventListener('click', function(e) {
    var item = checkSearch(inputSearch.value)
    xem.innerHTML = renderSearch(item.picture, item.second_name, item.price)

})