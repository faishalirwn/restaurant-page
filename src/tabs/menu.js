export default function addMenuElements(parent) {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    const menuList = [
        {
            imgUrl: "assets/egg.jpg",
            name: "Egg",
            price: "$38"
        },
        {
            imgUrl: "assets/burnt.jpg",
            name: "Burnt Paprika",
            price: "Free"
        },
        {
            imgUrl: "assets/satay.jpg",
            name: "Chicken Satay next to Paprika",
            price: "$40"
        }
    ]

    const menuElements = menuList.map((item) => {
        const menuItem = document.createElement("div");
        menuItem.setAttribute("class", "menu-item");

        const itemImg = document.createElement("img");
        itemImg.setAttribute("src", item.imgUrl);
        itemImg.setAttribute("alt", item.name);
        menuItem.appendChild(itemImg);

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        return menuItem;
    });

    const pageTitle = document.createElement("h1");
    pageTitle.setAttribute("class", "page-title");
    pageTitle.textContent = "Menu";

    menuElements.forEach((el) => {
        menu.appendChild(el);
    })


    parent.innerHTML = "";
    parent.appendChild(pageTitle);
    parent.appendChild(menu);
}