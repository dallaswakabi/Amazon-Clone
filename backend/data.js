import bcrypt from 'bcryptjs'
const data ={
      users:[
        {
           name:'Basil Ahmed',
           email:'admin@example.com',
           password:bcrypt.hashSync('12345',8),
           isAdmin:true
           
        },
        {
            name:'Abdallah Ahmed',
            email:'user@example.com',
            password:bcrypt.hashSync('123',8),
            isAdmin:false
            
         },
      ],
    products:[
        {
           
            name:'Nike Slim Shirts',
            category:'Shirts',
            image:'/images/d2.jpg',
            price:120,
            countInStock:10,
            brand:'nike',
            rating:4.7,
            numReviews:10,
            description:'high quality shirts'
        },
        {
           
            name:'Adidas slim Shirts',
            category:'Shirts',
            image:'/images/d3.jpg',
            price:140,
            countInStock:13,
            brand:'Adidas',
            rating:4.8,
            numReviews:15,
            description:'high quality shirts'
        },
        {
           
            name:'Nike slim Shirts',
            category:'Shirts',
            image:'/images/d1.jpg',
            price:120,
            countInStock:0,
            brand:'nike',
            rating:4.7,
            numReviews:10,
            description:'high quality shirts'
        },
        {
           
            name:'Puma Paints',
            category:'Paint',
            image:'/images/p1.jpg',
            price:170,
            countInStock:20,
            brand:'nike',
            rating:4.7,
            numReviews:10,
            description:'high quality shirts'
        },
        {
            
            name:'Adidas Paints',
            category:'Paint',
            image:'/images/p2.jpg',
            price:130,
            countInStock:15,
            brand:'nike',
            rating:4.7,
            numReviews:10,
            description:'high quality shirts'
        },
        {
            
            name:'Nike Paints',
            category:'Paint',
            image:'/images/p3.jpg',
            price:140,
            countInStock:5,
            brand:'nike',
            rating:4.7,
            numReviews:10,
            description:'high quality shirts'
        }
    ]
}

export default data;