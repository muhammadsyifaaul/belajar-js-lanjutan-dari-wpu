let gameData = [
    {
        name: 'call of duty',
        price: 300000,
        platform: ['ps4','xbox','pc'],
        category: ['shooter', 'fps','war','multiplayer,action']
    },
    {
        name: 'call of duty modern warfare',
        price: 300000,
        platform: ['ps4','xbox','pc'],
        category: ['shooter', 'fps','war','multiplayer,action']
    },
    {
        name: 'counter strike 2',
        price: 200000,
        platform:['pc'],
        category: ['fps','multiplayer','action','competitive']
    },
    {
        name: 'battlefield 1',
        price: 350000,
        platform:['ps4','xbox','pc'],
        category: ['fps','war','action']
    }
];

let show = ``;
let item = [];
const chart = [];
for(let index of gameData) {
    const{name,price,platform,category} = index;
    item.push({
        name,
        price,
        platform,
        category
    });
    show += `<h1>${name}</h1>
            <p>Price : ${price}$</p>
            <p>Platform : ${platform.join(', ')}</p>
            <p>Category : ${category.join(', ')}</p>`
    document.body.innerHTML = show;
}

function searchByName() {
    show = ``;
    let search = prompt('search name of game :').toLowerCase();
    let itemFounds = [];
    if (search === null || search === "") {
        alert("You didn't input anything!");
        return; 
    }
    
    for (let i of item) {
        if (i.name.toLowerCase().includes(search)) {
            itemFounds.push(i);
        }
    }
    if (itemFounds.length > 0) {
        for(let item of itemFounds) {
            show += `
            <h3>${item.name}</h3>
            <p>Price : ${item.price}$</p>
            <p>Platform : ${item.platform.join(', ')}</p>
            <p>Category : ${item.category.join(', ')}</p>`
            document.body.innerHTML = show;    
        }
    }
}

function searchByPrice() {
    let search = parseInt(prompt('Search price of game:'));
    let itemFounds = [];
    if (search === null || isNaN(search)) {
        alert("Please input a valid price!");
        return;
    }
    for (let i of item) {
        if (i.price <= search) {
            itemFounds.push(i);
        }
    }
    if (itemFounds.length > 0) {
        let show = '';
        for (let item of itemFounds) {
            show += `
            <div>
                <h3>${item.name}</h3>
                <p>Price: ${item.price}$</p>
                <p>Platform: ${item.platform.join(', ')}</p>
                <p>Category: ${item.category.join(', ')}</p>
                <button onclick="addToChart('${item.name}', ${item.price})">Add to Chart</button>
            </div>`;
        }
        document.body.innerHTML = show;
    } else {
        alert('Item not found!');
    }
}

function addToChart(name, price) {
    chart.push({ name: name, price: price });
    alert(`"${name}" has been added to the chart.`);
    alert(`game :${name} price ${price}`);
    console.log(chart)
}


function searchByCategory() {
    show = ``;
    let search = prompt('Enter category of game :').toLowerCase();
    let itemFounds = [];
    if (search === null || search === "") {
        alert("You didn't input anything!");
        return;
    }
    for (let i of item) {
        if (i.category.includes(search)) {
            itemFounds.push(i);
        }
    }
    if (itemFounds.length > 0) {
        for(let item of itemFounds) {
            show += `
            <h3>${item.name}</h3>
            <p>Price : ${item.price}$</p>
            <p>Platform : ${item.platform.join(', ')}</p>
            <p>Category : ${item.category.join(', ')}</p>`
            document.body.innerHTML = show; 
        
        } 
    }
}

function chooseUser() {
    let choose = prompt('1. Search by name \n2. Search by price \n3. Search by category \n0. Exit');
    if(choose == 1) {
        searchByName();
    } else if(choose == 2) {
        searchByPrice();
    } else if(choose == 3) {
        searchByCategory();
    } else if(choose == 0) {
        document.body.innerHTML = show;
    } else {
        alert('Invalid choice!');
        chooseUser();
    }
}

chooseUser();