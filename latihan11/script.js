const gameData = {
    1 : {
        id: 1,
        name: 'call of duty modern warfare',
        stock: 10,
        price: 300000,
        category: ['shooter', 'fps','war','multiplayer,action']
    },
    2 : {
        id:2,
        name: 'counter strike 2',
        stock: 5,
        price: 200000,
        category: ['shooter','fps','multiplayer','competitive','action']
    },
    3: {
        id: 3,
        name: 'god of war',
        stock: 8,
        price: 350000,
        category: ['action','adventure','single player','3d','richstory']
    },
    4: {
        id: 4,
        name: 'assasins creed valhalla',
        stock: 15,
        price: 400000,
        category: ['action','adventure','single player','open world','rpg','viking']
    }
}
let show =``;
let item = [];
for(let index in gameData) {
    const {id, name, stock, price, category} = gameData[index];
    item.push({
        id,
        name,
        stock,
        price,
        category
    });
    show += `<h1>${name}</h1>
    <p>stock : ${stock}</p>
    <p>price : ${price}</p>
    <p>category : ${category.join(', ')}</p>`
    
}
document.body.innerHTML = show;
function searchByName() {
    let search = prompt('search name of game : ');
    let foundItems = [];

    if (search === null || search === "") {
        alert("You didn't input anything!");
        return; 
    }
    for(let value of item) {
        if(value.name === search) {
            foundItems.push(value);
        }
    }
    let show = '';
    if (foundItems.length > 0) {
        for(let items of foundItems) {
            show += `<h1>Item Found!</h1>
            <h3>${items.name}</h3>
            <p>stock : ${items.stock}</p>
            <p>price : ${items.price}</p>
            <p>category : ${items.category.join(', ')}</p>`
        }
    } else {
        alert('Item not found!');
    }
    
    document.body.innerHTML = show;
}


function searchByPrice() {
    let search =parseInt(prompt('search price of game : ')) ;
    let foundItems = [];
    if (search === null || search === "") {
        alert("You didn't input anything!");
        return; 
    }
    for(let value of item) {
        if(value.price <= search) {
            foundItems.push(value);
        }
    }
    let show = '';
    if (foundItems.length > 0) {
        for(let items of foundItems) {
            show += `<h1>Item Found!</h1>
            <h3>${items.name}</h3>
            <p>stock : ${items.stock}</p>
            <p>price : ${items.price}</p>
            <p>category : ${items.category.join(', ')}</p>`
        }
        document.body.innerHTML = show;
    }else{
        alert('Item not found!');   
    }
}

function searchCategory() {
    let search = prompt('Enter category of game :');
    let foundItems = [];
    if (search == null || search == "") {
        alert("You didn't input anything!");
    }
    for(let value of item) {
        value.category.map(i => {
            if(i == search) {
                foundItems.push(value);
            }
        })
    }
    if(foundItems.length > 0 ) {
        let show = '';
        for(let items of foundItems) {
            show += `<h1>Item Found!</h1>
            <h3>${items.name}</h3>
            <p>stock : ${items.stock}</p>
            <p>price : ${items.price}</p>
            <p>category : ${items.category.join(', ')}</p>`
        }
        document.body.innerHTML = show;
    } else {
        alert('Item not found!');
    }
}

function chooseUser () {
    let choose = prompt('1. Search by name \n2. Search by price \n3. Search by category \n0. Exit');
    if (choose == 1) {
        searchByName();
    } else if (choose == 2) {
        searchByPrice();
    } else if (choose == 3) {
        searchCategory();
    } else if (choose == 0) {
        document.body.innerHTML = show;
    } else {
        alert('Invalid choice!');
        chooseUser();
    }
}

chooseUser();