const items = [
  
    {"name": "Sour Assorted Gummy Sharks",
     "image": "https://sweetzandmore.com/cdn/shop/files/rn-image_picker_lib_temp_07c96c72-9e7e-44fa-823a-353973a7999b.jpg?crop=center&height=1200&v=1743362603&width=1200",
     "alt": "Sour Assorted Gummy Sharks ",
     "price": 9.99,
     "instock": true
    },

    {"name": "Marshmellow Gummy Shark",
     "image": "https://m.media-amazon.com/images/I/61+Y+CnemoL._SL1280_.jpg",
     "alt": "Gummy Shark Marsh",
     "price": 8.99,
     "instock": true
    },

    {"name": "Mini Gummy Sharks",
     "image": "https://cdnimg.webstaurantstore.com/images/products/large/611302/2190204.jpg",
     "alt": "Mini Gummy Sharks ",
     "price": 6.99,
     "instock": true
    },    
    
    {"name": "Gummy Frog",
     "image": "https://i.etsystatic.com/20314700/r/il/ea189b/5410146293/il_1080xN.5410146293_l25u.jpg",
     "alt": "Gummy Frog",
     "price": 7.99,
     "instock": true
    },
      
    {"name": "Life Guard Ring Gummy",
     "image": "https://marketingresources.albaneseconfectionery.com/wp-content/uploads/2021/05/50135_1-1250x1250.png",
     "alt": "life guard ring",
     "price": 10.99,
     "instock": true
    },
    
    {"name": "Juice-Filled Gummy Sharks",
     "image": "https://i.pinimg.com/736x/89/63/cc/8963cc3347cea9e5943797e54225ac54.jpg",
     "alt": "gummy shark juice",
     "price": 10.99,
     "instock": true
    },
 
    {"name": "Extra Blue Gummy Shark",
     "image": "https://m.media-amazon.com/images/I/71H0Zj9BVWL._SL1500_.jpg",
     "alt": "blue gummy shark",
     "price": 8.99,
     "instock": true
    },

    {"name": "Gummy Shark Cupcake",
     "image": "https://www.ohmy-creative.com/wp-content/uploads/2023/07/SHARK-CUPCAKES-3.png",
     "alt": "gummy shark cupcake",
     "price": 9.99,
     "instock": true
    },

   {"name": "Gummy Shark Popcorn",
     "image": "https://i.pinimg.com/736x/8e/50/06/8e500618286ac23b8459d25e808f7bee.jpg",
     "alt": "gummy shark popcorn",
     "price": 12.99,
     "instock": true
    },

    {"name": "Gummy Shark Cookie",
     "image": "https://i.pinimg.com/236x/c0/cb/99/c0cb99a487043d7d545a843c0df0dc79.jpg",
     "alt": "gummy shark cookie",
     "price": 8.99,
     "instock": true
    },

   {"name": "Gummy Shark Icecream",
     "image": "https://www.anightowlblog.com/wp-content/uploads/2016/06/Shark-Frenzy-Ice-Cream-3.jpg",
     "alt": "gummy shark icecream",
     "price": 9.99,
     "instock": true
    },

    {"name": "Gummy Shark Drink",
     "image": "https://i.pinimg.com/originals/72/ab/91/72ab91e8b1393b6c251ba0ff1960515e.jpg",
     "alt": "gummy shark drink",
     "price": 8.99,
     "instock": true
    },

    {"name": "Watermelon Gummy Sharks",
     "image": "https://www.hancocks.co.uk/_next/image?url=https:%2F%2Fapi.hancocks.co.uk%2Fmedia%2Fcatalog%2Fproduct%2F3%2F1%2F316543_ravazzi_sour_watermelon_sharks_a.jpg&w=3840&q=75",
     "alt": "gummy shark melon",
     "price": 12.99,
     "instock": true
    },

    {"name": "Melted? Gummy Sharks",
     "image": "https://cdn11.bigcommerce.com/s-riqk6cih6h/images/stencil/1280x1280/products/215/1410/50193_1__29479.1668014904.png?c=1",
     "alt": "gummy shark melt",
     "price": 8.99,
     "instock": true
    },

    {"name": "Giant Gummy Sharks",
     "image": "https://i5.walmartimages.com/seo/Giant-Gummy-Shark-18-oz_79ef1b3b-b6f8-4a9c-a424-f6657b63a060.109d21d54c273479f45a3785f6b58f90.jpeg",
     "alt": "giant gm",
     "price": 18.99,
     "instock": true
    },

    {"name": "Real Gummy Shark",
     "image": "https://media.australian.museum/media/dd/images/mantarcjuvant_big.b8f0cd4.width-1200.46004b0.jpg",
     "alt": "gummy shark real",
     "price": 500.99,
     "instock": false
    },

    {"name": "Sour Gummy Sharks",
     "image": "https://cdn11.bigcommerce.com/s-jzmamplsrc/images/stencil/590x590/products/4044/7518/gummy-sour-sharks-candy__08935.1746997182.jpg?c=1",
     "alt": "gummy shark sour",
     "price": 15.99,
     "instock": true
    },

    {"name": "Freeze Dried Gummy Sharks",
     "image": "https://ca.shopatshowcase.com/cdn/shop/files/HighClose-UpofDriedSharkGummy_1200x.png?v=1711999831",
     "alt": "freeze gummy shark",
     "price": 16.99,
     "instock": true
    },

    {"name": "Assorted Gummy Sharks",
     "image": "https://th.bing.com/th/id/OPHS.2OrKdVuWzRJ4Dg474C474?w=592&h=550&o=5&pid=21.1",
     "alt": "assorted gm",
     "price": 12.99,
     "instock": true
    },

    {"name": "Gummy Sharks",
     "image":"https://theheadnut.com/cdn/shop/products/gummi_sharks.gif?v=1533923761images/gummyshark.png",
     "alt": "gummy shark",
     "price": 10.99,
     "instock": true
    }
];


const cart= []
function inject(item) {
const container = document.querySelector(".container"); 
/* query the container using adjacent html push card into container */

const html = `<div class ="card" data-title= "${item.name}" >
  <h2 class="card__heading">${item.name}</h2><img src="${item.image}">
  <h3> $${item.price} </h3>
  <button class="buy" data-title="${item.name}">BUY</button>
</div>`
container.insertAdjacentHTML('afterbegin', html);
}

items.forEach((item) => inject(item))

function addToCart() {
  const buttons = document.querySelectorAll("button");
  //create array if we need more than forEach
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) => btn.addEventListener("click", function(event) {
    const product = event.target.closest(".card").getAttribute("data-title")
    const purchased= items.find((item) => item.name === product)
   console.log(purchased)
    injecttocart(purchased,btnArray);
  }))

  //find the item in the array
  //take that object and push into cart
}
addToCart();

function injecttocart(item,btnArray) {
const cartItems = document.querySelector(".cart_items"); 
btnArray.forEach((btn) => btn.addEventListener("click", function(event) {
  const title = event.target.dataset.title;
  const item = items.find(item => item.name === name);
}));
const html = `<div class ="cart_items">
  <h2 class="card__heading">${item.name}</h2>
  <h3> $${item.price}</h3>
</div>`
cartItems.insertAdjacentHTML('afterbegin', html);
}

function filterItems(name) {
  const display = document.querySelector(".filter");
  display.innerHTML = ""; 
  const filterItems = items.filter((item) => item.name === name);
  console.log(filterItems)
 
}

filterItems('Gummy Frog');
//document.querySelector(".gummy").addEventListener("click", function())
function filterItems(price) {
  const display = document.querySelector(".filter");
  display.innerHTML = ""; 
  const filterItems = items.filter((item) => item.price === price);
  console.log(filterItems)
  filterItems.forEach((item) => 
  display.insertAdjacentHTML(
      "afterbegin",
      `<div class="item-card" ">
       <h3>${item.price}</h3>
       <p>price:${item.price}</p>
      </div>`
    )
  );
}

function filterItems(price) {
  const display = document.querySelector(".filter");
  display.innerHTML = ""; 
  const filterItems = items.filter((item) => item.price === price);
  console.log(filterItems)
  filterItems.forEach((item) => 
  display.insertAdjacentHTML(
      "afterbegin",
      `<div class="item-card" ">
       <h3>${item.price}</h3>
       <p>price:${item.price}</p>
      </div>`
    )
  );
}

function filterItems(instock) {
  const display = document.querySelector(".filter");
  display.innerHTML = ""; 
  const filterItems = items.filter((item) => item.instock === instock);
  console.log(filterItems)
  filterItems.forEach((item) => 
  display.insertAdjacentHTML(
      "afterbegin",
      `<div class="item-card" ">
       <h3>${item.instock}</h3>
       <p>price:${item.instock}</p>
      </div>`
    )
  );
}

filterItems('Gummy Frog');
/* document.querySelector(".gummy").addEventListener("click", function(event) {
    const product = event.target.closest(".card").getAttribute("data-title");
    const purchased= items.find((item) => item.price === product);})
 */