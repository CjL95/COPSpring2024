const makeImage = ( data ) =>{
    let url = ""
    data.map(i => {
        i.hasOwnProperty("items") ? 
        i.items.map(j => {
            url = `https://codeonpointspringfinal2024.s3.amazonaws.com/assets/item_images/${j.category}/${j.itemName.replace(/\s/g, "-").toLowerCase()}.webp`;
            j["image"] = url;
        }): 
        (
            url = `https://codeonpointspringfinal2024.s3.amazonaws.com/assets/item_images/${i.category}/${i.itemName.replace(/\s/g, "-").toLowerCase()}.webp`,
            i["image"] = url
        );
    })
    return data;
}

const AllItems = [
    {
        name: "Cakes",
        items: [
            {
                category: "cakes",
                itemName: "Carrot Cake",
                price: 10,
                description: "A moist and spiced cake filled with grated carrots and topped with cream cheese frosting."
            },
            {
                category: "cakes",
                itemName: "Cherry Cheesecake",
                price: 10,
                description: "A creamy and decadent dessert featuring a cherry topping on a rich cheesecake base."
            },
            {
                category: "cakes",
                itemName: "Lemon Drizzle Cake",
                price: 10,
                description: "A light and zesty cake with a lemon glaze."
            },
            {
                category: "cakes",
                itemName: "Chocolate Cake",
                price: 10,
                description: "A rich and indulgent cake made with cocoa and often layered with chocolate frosting."
            },
            {
                category: "cakes",
                itemName: "Red Velvet Cake",
                price: 10,
                description: "A striking cake with a hint of cocoa and a distinctive red hue, often topped with cream cheese frosting."
            }
        ]
    },
    {
        name: "Breads",
        items: [
            {
                category: "breads",
                itemName: "Baguette Sandwich",
                price: 10,
                description: "A delicious sandwich made with a French baguette."
            },
            {
                category: "breads",
                itemName: "Focaccia Loaf",
                price: 10,
                description: "A savory Italian bread known for its olive oil and herb-infused crust."
            },
            {
                category: "breads",
                itemName: "Multigrain Loaf",
                price: 10,
                description: "A bread made with a variety of grains, offering a hearty and nutritious option."
            },
            {
                category: "breads",
                itemName: "Rye Loaf",
                price: 10,
                description: "A bread made primarily with rye flour, known for its distinctive flavor."
            },
            {
                category: "breads",
                itemName: "Sourdough",
                price: 10,
                description: "A tangy and chewy bread made from a fermented dough."
            },
        ]
    },
    {
        name: "Pastries",
        items: [
            {
                category: "pastries",
                itemName: "Apple Turnover",
                price: 10,
                description: "A flaky pastry filled with sweetened apples, often spiced with cinnamon."
            },
            {
                category: "pastries",
                itemName: "Croissant",
                price: 10,
                description: "A buttery and flaky pastry originating from France."
            },
            {
                category: "pastries",
                itemName: "Eclair",
                price: 10,
                description: "A light and fluffy pastry filled with cream and topped with chocolate icing."
            },
            {
                category: "pastries",
                itemName: "Mascarpone Danish",
                price: 10,
                description: "A sweet pastry filled with creamy mascarpone cheese."
            },
            {
                category: "pastries",
                itemName: "Pain Au Chocolat",
                price: 10,
                description: "A French pastry consisting of a light, flaky croissant-like dough with a bar of chocolate in the center."
            },
        ]
    },
    {
        name: "Beverages",
        items: [
            {
                category: "beverages",
                itemName: "Cappuccino",
                price: 10,
                description: "A rich espresso-based coffee topped with frothy milk"
            },
            {
                category: "beverages",
                itemName: "Coffee",
                price: 10,
                description: "A classic, invigorating beverage brewed from roasted coffee beans."
            },
            {
                category: "beverages",
                itemName: "Herbal Tea",
                price: 10,
                description: "A soothing and aromatic infusion made from herbs, flowers, or fruits."
            },
            {
                category: "beverages",
                itemName: "Hot Chocolate",
                price: 10,
                description: "A comforting and indulgent drink made with melted chocolate and steamed milk."
            },
            {
                category: "beverages",
                itemName: "Iced Latte",
                price: 10,
                description: "A refreshing coffee beverage made with espresso and cold milk."
            },
        ]
    }
];
const FeatItems = [
    {
        category: "pastries",
        itemName: "Mascarpone Danish",
        price: 10,
        description: "A sweet pastry filled with creamy mascarpone cheese"
    },
    {
        category: "beverages",
        itemName: "Iced Latte",
        price: 10,
        description: "A refreshing coffee beverage made with espresso and cold milk"
    },
    {
        category: "cakes",
        itemName: "Red Velvet Cake",
        price: 10,
        description: "A striking cake with a hint of cocoa and a distinctive red hue, often topped with cream cheese frosting"
    }
];

export const AllStubs = makeImage(AllItems);
export const FeatStubs = makeImage(FeatItems);