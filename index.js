const items = [
    {"name": "Gummy Sharks",
     "image": " images/gummyshark.png",
     "alt": "gummy shark",
     "price": "10.99",
     "instock": true
    },

    {"name": "Assorted Gummy Sharks",
     "image": "images/assorted.png",
     "alt": "assorted gm",
     "price": "12.99",
     "instock": true
    },

    {"name": "Mustelus antarcticus",
     "image": "images/real.png",
     "alt": "gummy shark real",
     "price": "500.99",
     "instock": false
    },

    {"name": "Sour Gummy Sharks",
     "image": "images/sour.png",
     "alt": "gummy shark sour",
     "price": "15.99",
     "instock": true
    },

    {"name": "Freeze Dried Gummy Sharks",
     "image": "images/freezedried.png",
     "alt": "freeze gummy shark",
     "price": "16.99",
     "instock": true
    },

    {"name": "Giant Gummy Sharks",
     "image": "images/giant.png",
     "alt": "giant gm",
     "price": "18.99",
     "instock": true
    },

    {"name": "Melted? Gummy Sharks",
     "image": "images/melted.png",
     "alt": "gummy shark melt",
     "price": "8.99",
     "instock": true
    },

    {"name": "Watermelon Gummy Sharks",
     "image": "images/watermelon.png",
     "alt": "gummy shark melon",
     "price": "12.99",
     "instock": true
    },

    {"name": "Gummy Shark Drink",
     "image": "images/drink.png",
     "alt": "gummy shark drink",
     "price": "8.99",
     "instock": true
    },

    {"name": "Gummy Shark Icecream",
     "image": " images/icecream.png",
     "alt": "gummy shark icecream",
     "price": "9.99",
     "instock": true
    },

    {"name": "Gummy Shark Cookie",
     "image": "images/cookie.png",
     "alt": "gummy shark cookie",
     "price": "8.99",
     "instock": true
    },

       
    {"name": "Gummy Shark Popcorn",
     "image": "images/popcorn.png",
     "alt": "gummy shark popcorn",
     "price": "12.99",
     "instock": true
    },

       
    {"name": "Gummy Shark Cupcake",
     "image": "images/cupcake.png",
     "alt": "gummy shark cupcake",
     "price": "9.99",
     "instock": true
    },

       
    {"name": "Extra Blue Gummy Shark",
     "image": "images/extra.png",
     "alt": "blue gummy shark",
     "price": "8.99",
     "instock": true
    },

       
    {"name": "Juice-Filled Gummy Sharks",
     "image": "images/juicefilled.png",
     "alt": "gummy shark juice",
     "price": "10.99",
     "instock": true
    },

    {"name": "Life Guard Ring Gummy",
     "image": "images/lifering.png",
     "alt": "life guard ring",
     "price": "10.99",
     "instock": true
    },

    {"name": "Gummy Frog",
     "image": "images/frog.png",
     "alt": "Gummy Frog",
     "price": "7.99",
     "instock": true
    },

    {"name": "Mini Gummy Sharks",
     "image": "images/mini.png",
     "alt": "Mini Gummy Sharks ",
     "price": "6.99",
     "instock": true
    },

    {"name": "Marshmellow Gummy Shark",
     "image": "images/marshmellow.png",
     "alt": "Gummy Shark Marsh",
     "price": "8.99",
     "instock": true
    },

    {"name": "Sour Assorted Gummy Sharks",
     "image": "images/assortedsour.png",
     "alt": "Sour Assorted Gummy Sharks ",
     "price": "9.99",
     "instock": true
    },
];

function inject(item) {
const container = document.querySelector(".container"); 
/* query the container using adjacent html push card into container */

const html = `<div class ="card">
  <h2 class="card__heading">${item.name}</h2><img src="${item.image}">
  <h3> $${item.price} </h3>
  <button class="buy">BUY</button>
</div>`
container.insertAdjacentHTML('afterbegin', html);

}

inject(items[0])
items.forEach((item) => inject(item))

function addToCart() {
  const buttons = document.querySelectorAll("button");
  //create array if we need more than forEach
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) => btn.addEventListener("click", function (event) {
    comsole.log(event.target.textContent);
    console.log(event.target.closest("display-card"));
  
  }))

  console.log(buttons);

  //find the item in the array
  //take that object and push into cart
}
addToCart();