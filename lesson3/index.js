// Ex.1

for(let i = 0; i <= 10; i++) {
    if(i === 0) {
        console.log(`${i} - это ноль`)
        continue
    }
    i % 2 === 0 ? console.log(`${i} - четное число`) : console.log(`${i} - нечетное число`)
}

// Ex.2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text)

// Ex.3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(item => item.price *= 0.85)

console.log(products)

// Ex.4

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const products2 = products1.filter(item => item.hasOwnProperty('photos') && item.photos.length !== 0)
    .sort((a,b) => a.price - b.price)

console.log(products2)

// Ex.5

for(let i = 0; console.log(i), i < 9; i++){}

// Ex.6

let stars = ''

for(let i = 0; i < 20; i++) {
    console.log(`${stars+='*'}\n`)
}
