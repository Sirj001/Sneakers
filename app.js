const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 250000,
        color: [
            {
                code: "black",
                img: "./img/1/air.png",
            },
            {
                code: "darkblue",
                img: "./img/1/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 350000,
        color: [
            {
              code: "lightgray",
              img: "./img/1/jordan.png",  
            },
            {
                code: "green",
                img: "./img/1/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 200000,
        color: [
            {
                code: "green",
                img: "./img/1/blazer2.png",
            },
            {
                code: "lightgray",
                img: "./img/1/blazer.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 300000,
        color: [
            {
                code: "black",
                img: "./img/1/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/1/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 400000,
        color: [
            {
                code: "lightgray",
                img: "./img/1/hippie.png",
            },
            {
                code: "black",
                img: "./img/1/hippie2.png",
            },
        ],
    }
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".sizes");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

       //change the choosen product
       chosenProduct = products[index];

        //change text of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "₦" + chosenProduct.price;
        currentProductImg.src = chosenProduct.color[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.color[index].code;
        });
    });
})


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.color[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display= "flex";
})

close.addEventListener("click", () => {
  payment.style.display = "none";
});