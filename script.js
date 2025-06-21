const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const cardItem = document.querySelector('#item-template');

function makeItemByTemplate(title, description, img, price, itemTags) {
  const myItem = cardItem.content.cloneNode(true);

  myItem.querySelector('h1').textContent = title;
  myItem.querySelector('p').textContent = description;
  myItem.querySelector('img').src = img;
  myItem.querySelector('.price').textContent = price;
  
  const tagsContainer = myItem.querySelector('.tags');
  itemTags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.textContent = tag;
      tagElement.classList.add('tag');
      tagsContainer.append(tagElement);
    });

    return myItem; 
}



let newItem;
const container = document.querySelector('#shop-items');

items.forEach((item)=>{
  newItem = makeItemByTemplate(item.title, item.description, item.img, item.price, item.tags);
  container.append(newItem);
})



function renderItems(itemsToRender, containerElement) {
  

  containerElement.innerHTML = ''; 
  itemsToRender.forEach(item => {
    const newItem = makeItemByTemplate(item.title, item.description, item.img, item.price, item.tags);
    containerElement.append(newItem);
  });
}




const inputText = document.querySelector('#search-input').value;
const nothingFoundElement = document.getElementById('nothing-found');


document.getElementById('search-btn').addEventListener('click', function () {
  document.getElementById('nothing-found').textContent = "";
  
  const inputText = document.querySelector('#search-input').value;
  

  if (inputText.trim() !== "") {
    
    const searchResults = [];

    items.forEach((item) => {
      
      
      if (item.title.toLowerCase().includes(inputText.toLowerCase())) {
        searchResults.push(item);
      }

    });


    if (searchResults.length > 0) {
      renderItems(searchResults, container);
    } else {
      document.getElementById('nothing-found').textContent = "Ничего не найдено";
    }
  }
  
});

