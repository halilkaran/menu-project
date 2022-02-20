//? variable
const menu = [
  {
    id: 1,
    title: "baklava",
    category: "dessert",
    price: 33.99,
    img: "./images/item-1.jpeg",
    desc: `Your history-smelling dessert sweetened with walnut, pistachio, almond or hazelnut possibility sugar syrup between thin sheets of dough. Meet yourself with a history of thousands of years. `
  },
  {
    id: 2,
    title: "Hamburger",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Hamburger buns with or without sesame, fresh vegetables (e.g. lettuce, tomatoes, cucumbers, onions), various sauces (e.g. ketchup, mayonnaise, mustard), cheese - anything that tastes good is possible!
 `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `50 g strawberries, 25 g currants, 25 g berries, raspberries, blackberries, bananas, apricots
25 g low-fat quark, 50ml milk, 3 ice cubes `
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Eggs, bean with chesee,  toast brot, Caffee Wonderful breakfast `
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Hamburger buns, with or without sesame, fresh vegetables (e.g. lettuce, tomatoes, eggs), various sauces (e.g. ketchup, mayonnaise, mustard), cheese - anything that tastes good is possible! `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Immerse ourselves in the magical world of chocolate with a milkshake. It will blow your mind.`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: ` Taste the unique taste of bacon, cheddar cheese, egg and lettuce, while watching the magnificent fluffy bread`
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `An American classic hamburger and fries `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `In times of corona, an amazing multivitamin drink awaits you`
  },
  {
    id: 10,
    title: "steak ",
    category: "dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: ` Rosehip sautéed next to me with your tender meat and orange with its magnificent call`
  }
];

//?   SELECTED ITEM    //

const sectionMenu = document.querySelector(".section-menu");
const container = document.querySelector(".btn-container");

//?    EVENT    //
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayBtns();
});

//! FUNCTIONS !//


function displayMenu(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">€${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionMenu.innerHTML = displayMenu;
}

//! when Menu buttons clicked then sorted menu kommt
function displayBtns() {
  const categories = menu.reduce(                       // with reduce method selected to same category
    function (values, item) {
      if (!values.includes(item.category)) {               // with includes  method controlled to category if same add to arr
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const catBtns = categories.map(function (cat) {
      return ` <button class="btn-cat" type="button"  data-cat=${cat} >${cat}</button>`;
    })
    .join("");
    container.innerHTML = catBtns;
    //? select to all btn
  const btnCat = container.querySelectorAll(".btn-cat");
  btnCat.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const cat = event.currentTarget.dataset.cat; // select to btn-cat name
      const menuCat = menu.filter(function (item) {
        // filter to menu of category
        if (item.category === cat) {
          return item;
        }
      });
      if (cat === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCat);
      }
    });
  });
}
