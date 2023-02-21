import { categoryType } from '../types/constants/category.type';
import { CouponType } from '../types/constants/coupons.type';
import { foodCollectionImagesType } from '../types/constants/foodCollection.type';
import { foodItemType } from '../types/constants/foodItem.type';
import { foodListType } from '../types/constants/foodList.type';
import { foodtypesType } from '../types/constants/foodtype.type';
import { menusType } from '../types/constants/menus.type';
import { restaurantType } from '../types/constants/restaurant.type';
import { restaurantImageType } from '../types/constants/restaurantImage.type';
import { statesType } from '../types/constants/states.type';
import { trandingFoodType } from '../types/constants/trandingFoods.type';

export const states: statesType[] = [
  {
    value: 'Surat',
    label: 'Surat'
  },
  {
    value: 'Vadodara',
    label: 'Vadodara'
  },
  {
    value: 'Ahemdabad',
    label: 'Ahemdabad'
  },
  {
    value: 'Vapi',
    label: 'Vapi'
  }
];

export const restaurantImage: restaurantImageType[] = [
  {
    id: 'res1',
    image: '/images/Rectangle 9.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
  },
  {
    id: 'res2',
    image: '/images/Rectangle 7.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
  },
  {
    id: 'res3',
    image: '/images/Rectangle 11.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
  }
];

export const foodtype: foodtypesType[] = [
  {
    name: 'pizza',
    id: 1,
    list: [
      {
        id: 'pizza01',
        image: '/images/image32.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 350,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza02',
        image: '/images/image28.png',
        name: 'Sicilian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 550,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza03',
        image: '/images/image30.png',
        name: 'Speedy pizza',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 650,
        quantity: 0,
        shopping: 'available',
        popular: false
      },
      {
        id: 'pizza04',
        image: '/images/image31.png',
        name: 'L’appetitosa ',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza05',
        image: '/images/image32.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza06',
        image: '/images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 750,
        quantity: 0,
        shopping: 'done',
        popular: false
      },
      {
        id: 'pizza07',
        image: '/images/image30.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 950,
        quantity: 0,
        shopping: 'available',
        popular: false
      }
    ]
  },
  {
    name: 'sides',
    id: 2,
    list: [
      {
        id: 'pizza01',
        image: '/images/image32.png',
        name: 'Mexican McAloo Tikki Burger',
        time: '32min',
        items: 'Burger King, Home of the Whopper..',
        weight: '300NGN',
        price: 230,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza02',
        image: '/images/image28.png',
        name: 'Double Whopper',
        time: '32min',
        items: 'Burger King, Home of the Whopper..',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza03',
        image: '/images/image30.png',
        name: 'Hamburger',
        time: '32min',
        items: 'Burger King, Home of the Whopper.',
        weight: '500NGN',
        price: 350,
        quantity: 0,
        shopping: 'available',
        popular: false
      },
      {
        id: 'pizza04',
        image: '/images/image31.png',
        name: 'L’appetitosa ',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza05',
        image: '/images/image32.png',
        name: 'Double Stacker King',
        time: '32min',
        items: 'Burger King, Home of the Whopper.',
        weight: '500NGN',
        price: 440,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza06',
        image: '/images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 750,
        quantity: 0,
        shopping: 'done',
        popular: false
      },
      {
        id: 'pizza07',
        image: '/images/image30.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 950,
        quantity: 0,
        shopping: 'available',
        popular: false
      }
    ]
  },
  {
    name: 'chicken',
    id: 3,
    list: [
      {
        id: 'pizza01',
        image: '/images/image32.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 350,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza02',
        image: '/images/image28.png',
        name: 'Sicilian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 550,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza03',
        image: '/images/image30.png',
        name: 'Speedy pizza',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 650,
        quantity: 0,
        shopping: 'available',
        popular: false
      },
      {
        id: 'pizza04',
        image: '/images/image31.png',
        name: 'L’appetitosa ',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza05',
        image: '/images/image32.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza06',
        image: '/images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 750,
        quantity: 0,
        shopping: 'done',
        popular: false
      },
      {
        id: 'pizza07',
        image: '/images/image30.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 950,
        quantity: 0,
        shopping: 'available',
        popular: false
      }
    ]
  },
  {
    name: 'dessert',
    id: 4,
    list: [
      {
        id: 'pizza01',
        image: '/images/image32.png',
        name: 'Mexican McAloo Tikki Burger',
        time: '32min',
        items: 'Burger King, Home of the Whopper..',
        weight: '300NGN',
        price: 230,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza02',
        image: '/images/image28.png',
        name: 'Double Whopper',
        time: '32min',
        items: 'Burger King, Home of the Whopper..',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza03',
        image: '/images/image30.png',
        name: 'Hamburger',
        time: '32min',
        items: 'Burger King, Home of the Whopper.',
        weight: '500NGN',
        price: 350,
        quantity: 0,
        shopping: 'available',
        popular: false
      },
      {
        id: 'pizza04',
        image: '/images/image31.png',
        name: 'L’appetitosa ',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza05',
        image: '/images/image32.png',
        name: 'Double Stacker King',
        time: '32min',
        items: 'Burger King, Home of the Whopper.',
        weight: '500NGN',
        price: 440,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza06',
        image: '/images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 750,
        quantity: 0,
        shopping: 'done',
        popular: false
      },
      {
        id: 'pizza07',
        image: '/images/image30.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 950,
        quantity: 0,
        shopping: 'available',
        popular: false
      }
    ]
  },
  {
    name: 'drinks',
    id: 5,
    list: [
      {
        id: 'pizza01',
        image: '/images/image32.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 350,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza02',
        image: '/images/image28.png',
        name: 'Sicilian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 550,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza03',
        image: '/images/image30.png',
        name: 'Speedy pizza',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 650,
        quantity: 0,
        shopping: 'available',
        popular: false
      },
      {
        id: 'pizza04',
        image: '/images/image31.png',
        name: 'L’appetitosa ',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'done',
        popular: true
      },
      {
        id: 'pizza05',
        image: '/images/image32.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        weight: '500NGN',
        price: 450,
        quantity: 0,
        shopping: 'pending',
        popular: false
      },
      {
        id: 'pizza06',
        image: '/images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 750,
        quantity: 0,
        shopping: 'done',
        popular: false
      },
      {
        id: 'pizza07',
        image: '/images/image30.png',
        name: 'Squisita',
        time: '32min',
        items: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        price: 950,
        quantity: 0,
        shopping: 'available',
        popular: false
      }
    ]
  }
];
export const foodCollectionImages: foodCollectionImagesType[] = [
  { id: 1, image: 'images/Rectangle50.png' },
  { id: 2, image: 'images/Rectangle51.png' },
  { id: 3, image: 'images/Rectangle52.png' },
  { id: 4, image: 'images/Rectangle53.png' },
  { id: 5, image: 'images/Rectangle54.png' },
  { id: 6, image: 'images/Rectangle55.png' }
];

export const tags = [
  {
    tagId: 'tag-1',
    name: 'Popular',
    slug: 'popular'
  }
];

export const restaurants: restaurantType[] = [
  {
    restaurantId: 1,
    name: `La Pino'z Pizza`,
    address: 'Vesu,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `la-pinoz-pizza`,
    averageCost: 700,
    foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    images: ['/images/Ellipse1.png'],
    category: ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6']
  },
  {
    restaurantId: 2,
    name: `McDonald's`,
    address: 'Adajan,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `mcdonald's`,
    averageCost: 500,
    foods: [17, 18, 21, 22, 23, 24, 25, 27, 28, 29, 30],
    images: ['/images/Ellipse2.png'],
    category: ['cat-1', 'cat-7', 'cat-8', 'cat-9']
  },
  {
    restaurantId: 3,
    name: `Starbucks`,
    address: 'Vesu,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `starbucks`,
    averageCost: 300,
    foods: [22, 25, 31, 32, 33, 34, 35],
    images: ['/images/Ellipse3.png'],
    category: ['cat-1', 'cat-10', 'cat-11', 'cat-12', 'cat-13']
  },
  {
    restaurantId: 4,
    name: `Burger King`,
    address: 'Athwagate,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `burger-king`,
    averageCost: 700,
    foods: [17, 18, 19, 20, 21, 25, 26, 28, 37, 38, 39, 40],
    images: ['/images/Ellipse4.png'],
    category: ['cat-1', 'cat-14', 'cat-15', 'cat-16', 'cat-17']
  },
  {
    restaurantId: 5,
    name: `KFC`,
    address: 'Athwagate,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `kfc`,
    averageCost: 800,
    foods: [17, 18, 19, 20, 21, 36, 38, 39, 41, 42, 43, 44],
    images: ['/images/Ellipse5.png'],
    category: ['cat-1', 'cat-18', 'cat-19', 'cat-20', 'cat-21']
  },
  {
    restaurantId: 6,
    name: `Coffee Culture`,
    address: 'Vesu,Surat',
    time: {
      open: '11',
      closes: '11'
    },
    slug: `coffee-culture`,
    averageCost: 900,
    foods: [26, 27, 28, 29, 41, 42, 45],
    images: ['/images/Ellipse6.png'],
    category: ['cat-1', 'cat-21', 'cat-22', 'cat-23']
  }
];

export const category: categoryType[] = [
  {
    categoryId: 'cat-1',
    name: 'Recommended'
  },
  {
    categoryId: 'cat-2',
    name: 'Pizzas'
  },
  {
    categoryId: 'cat-3',
    name: 'Classic Pizzas for classic maniacs'
  },
  {
    categoryId: 'cat-4',
    name: 'Garlic Breads'
  },
  {
    categoryId: 'cat-5',
    name: 'Lasangna'
  },
  {
    categoryId: 'cat-6',
    name: 'Dessert'
  },
  {
    categoryId: 'cat-7',
    name: 'Happy Meals'
  },
  {
    categoryId: 'cat-8',
    name: 'McCafe Coffee'
  },
  {
    categoryId: 'cat-9',
    name: 'Beverages'
  },
  {
    categoryId: 'cat-10',
    name: 'Hot Coffee'
  },
  {
    categoryId: 'cat-11',
    name: 'Cold Coffee'
  },
  {
    categoryId: 'cat-12',
    name: 'Hot Drinks'
  },
  {
    categoryId: 'cat-13',
    name: 'Iced Teas'
  },
  {
    categoryId: 'cat-14',
    name: 'Family Bundles'
  },
  {
    categoryId: 'cat-15',
    name: 'Family Grilled Burgers'
  },
  {
    categoryId: 'cat-16',
    name: 'sides'
  },
  {
    categoryId: 'cat-17',
    name: 'Drinks and Coffee'
  },
  {
    categoryId: 'cat-18',
    name: 'Chicken Buckets'
  },
  {
    categoryId: 'cat-19',
    name: 'Biryani Buckets'
  },
  {
    categoryId: 'cat-20',
    name: 'Box Meals'
  },
  {
    categoryId: 'cat-21',
    name: 'Burgers'
  },
  {
    categoryId: 'cat-22',
    name: 'Salad'
  },
  {
    categoryId: 'cat-23',
    name: 'Cold Pressed Juice'
  }
];

export const foodItem: foodItemType[] = [
  {
    foodId: 1,
    name: 'Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 140,
    image: ['/images/Rectangle115.png'],
    category: ['cat-1', 'cat-2'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 2,
    name: 'Double Cheese Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 160,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-1', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 3,
    name: 'Garden Delight Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 120,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-1'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 4,
    name: 'Lovers Bite Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-1', 'cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 5,
    name: '7 Cheesy Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 520,
    image: ['/images/Rectangle115.png'],
    category: ['cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 6,
    name: 'Pizza Napoletana',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 7,
    name: 'Garlic Breads',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 240,
    image: ['/images/Rectangle115.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 8,
    name: 'Veggie Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 260,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 9,
    name: 'Classic Corn Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 290,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 10,
    name: 'Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 11,
    name: 'Lasangna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 250,
    image: ['/images/Rectangle115.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 12,
    name: 'Italian Sausage Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 150,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 13,
    name: 'Mexican Green Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 650,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 14,
    name: 'Veg Lasangna Rosy Red',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 299,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 15,
    name: 'Choco Lava',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 115,
    image: ['/images/Rectangle115.png'],
    category: ['cat-6'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 16,
    name: 'Red Valvet Lava Cake',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 109,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-6'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 17,
    name: 'Mexican McAloo Tikki Burger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 230,
    image: ['/images/Rectangle115.png'],
    category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 18,
    name: 'Vegetable Deluxe',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 450,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 19,
    name: 'Double Cheeseburger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 510,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-1', 'cat-15', 'cat-21', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 20,
    name: 'Double McPlant',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-1', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 21,
    name: 'Pizza Napoletana',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-14', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 22,
    name: 'Peppermint Mocha',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 200,
    image: ['/images/Rectangle115.png'],
    category: ['cat-8', 'cat-10'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 23,
    name: 'Premium Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 150,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-8'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 24,
    name: 'Espresso',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 250,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-8', 'cat-10'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 25,
    name: 'Caramel Iced Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 240,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-8', 'cat-10', 'cat-17'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 26,
    name: 'Coca-Cola',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 80,
    image: ['/images/Rectangle115.png'],
    category: ['cat-17', 'cat-23'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 27,
    name: 'Diet Coke',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-9', 'cat-23'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 28,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-9', 'cat-17', 'cat-23'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 29,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-9', 'cat-23'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 30,
    name: 'Nestea Iced Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-9'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },

  {
    foodId: 31,
    name: 'Caffe Mocha ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle115.png'],
    category: ['cat-10', 'cat-12', 'cat-13', 'cat-17'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 32,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-10', 'cat-12', 'cat-13'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 33,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-11', 'cat-12', 'cat-13'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 34,
    name: 'Venti Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-11', 'cat-12', 'cat-13'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 35,
    name: 'Cinnamon Roll Frappuccino ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-11', 'cat-13'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 36,
    name: 'Mexican McAloo Tikki Burger',
    description: `Burger King, Home of the Whopper..`,
    price: 490,
    image: ['/images/Rectangle115.png'],
    category: ['cat-14', 'cat-15', 'cat-16', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 37,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 290,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-14', 'cat-16', 'cat-15'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 38,
    name: 'Double Stacker King.',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-14', 'cat-16', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 39,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-14', 'cat-15', 'cat-16'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 40,
    name: 'Hamburger',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-16'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 41,
    name: 'Mashed Potatoes and Gravy',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-18', 'cat-19', 'cat-22'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 42,
    name: 'Mac and Cheese',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 390,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-18', 'cat-19', 'cat-22'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 43,
    name: 'Nashville Hot Chicken',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 530,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-18', 'cat-19'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 44,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 330,
    image: ['/images/Rectangle115.png'],
    category: ['cat-18', 'cat-19', 'cat-22'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 45,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 130,
    image: ['/images/Rectangle115.png'],
    category: ['cat-22'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  }
];

// export const brandsData: brandsDataType[] = [
//   {
//     id: 1,
//     image: '/images/Ellipse1.png',
//     name: `La Pino'z Pizza`,
//     items: 'Pizza, Fast Food, Beverages',
//     cost: '700rs Per 2 Person',
//     address: 'Vesu,Surat',
//     time: '11am – 11pm',
//     slug: `la-pinoz-pizza`,
//     types: [
//       {
//         id: 'type1-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '11',
//             image: '/images/Rectangle115.png',
//             name: 'Margherita Pizza',
//             price: 140,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '12',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Cheese Margherita Pizza',
//             price: 140,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '13',
//             image: '/images/Rectangle 75.png',
//             name: 'Garden Delight Pizza',
//             price: 140,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '14',
//             image: '/images/Rectangle 77.png',
//             name: 'Lovers Bite Pizza',
//             price: 140,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type1-2',
//         name: 'Pizzas',
//         title: 'pizzas',
//         list: [
//           {
//             id: '1P',
//             image: '/images/Rectangle115.png',
//             name: 'Margherita Pizza',
//             price: 240,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2P',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Cheese Margherita Pizza',
//             price: 340,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3P',
//             image: '/images/Rectangle 75.png',
//             name: 'Garden Delight Pizza',
//             price: 540,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4P',
//             image: '/images/Rectangle 77.png',
//             name: 'Lovers Bite Pizza',
//             price: 740,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type1-3',
//         name: 'Classic Pizzas for classic maniacs',
//         title: 'classic_pizza',
//         list: [
//           {
//             id: '1C',
//             image: '/images/Rectangle115.png',
//             name: 'Pizza Napoletana',
//             price: 640,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2C',
//             image: '/images/Rectangle 73.png',
//             name: 'Pizza Tonda Romana',
//             price: 840,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3C',
//             image: '/images/Rectangle 75.png',
//             name: 'Pizza Fritta',
//             price: 540,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4C',
//             image: '/images/Rectangle 77.png',
//             name: 'Pizza Siciliana',
//             price: 790,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type1-4',
//         name: 'Garlic Breads',
//         title: 'garlic_bread',
//         list: [
//           {
//             id: '1G',
//             image: '/images/Rectangle115.png',
//             name: 'Cheese Stuffed Garlic Bread',
//             price: 240,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2G',
//             image: '/images/Rectangle 73.png',
//             name: 'Veggie Stuffed Garlic Bread',
//             price: 240,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3G',
//             image: '/images/Rectangle 75.png',
//             name: 'Classic Corn Stuffed Garlic Bread',
//             price: 140,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4G',
//             image: '/images/Rectangle 77.png',
//             name: 'Stuffed Garlic Bread',
//             price: 340,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type1-5',
//         name: 'Lasangna',
//         title: 'lasangna',
//         list: [
//           {
//             id: '1L',
//             image: '/images/Rectangle115.png',
//             name: 'Lasagna With Meaty Sauce',
//             price: 230,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2L',
//             image: '/images/Rectangle 73.png',
//             name: 'Italian Sausage Lasagna',
//             price: 299,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3L',
//             image: '/images/Rectangle 75.png',
//             name: 'Mexican Green Lasagna',
//             price: 299,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4L',
//             image: '/images/Rectangle 77.png',
//             name: 'Veg Lasangna Rosy Red',
//             price: 299,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type1-6',
//         name: 'Desserts',
//         title: 'dessert',
//         list: [
//           {
//             id: '1D',
//             image: '/images/Rectangle115.png',
//             name: 'Choco Lava',
//             price: 115,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2D',
//             image: '/images/Rectangle 73.png',
//             name: 'Red Valvet Lava Cake',
//             price: 109,
//             sentance: `A Classic Cheesy Margharita. Can't Go Wrong.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 2,
//     image: '/images/Ellipse2.png',
//     name: `McDonald's`,
//     items: 'Burgers, Fast Food, Beverages',
//     cost: '500rs Per Person',
//     address: 'Adajan,Surat',
//     time: '10am – 10pm ',
//     slug: `McDonald's`,
//     types: [
//       {
//         id: 'type2-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '21',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '22',
//             image: '/images/Rectangle 73.png',
//             name: 'Vegetable Deluxe',
//             price: 450,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '23',
//             image: '/images/Rectangle 75.png',
//             name: 'Double Cheeseburger',
//             price: 350,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '24',
//             image: '/images/Rectangle 77.png',
//             name: 'Double McPlant',
//             price: 440,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type2-2',
//         name: 'Happy Meals',
//         title: 'happy_meals',
//         list: [
//           {
//             id: '1H',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2H',
//             image: '/images/Rectangle 73.png',
//             name: 'Vegetable Deluxe',
//             price: 450,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3H',
//             image: '/images/Rectangle 75.png',
//             name: 'Double Cheeseburger',
//             price: 350,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4H',
//             image: '/images/Rectangle 77.png',
//             name: 'Double McPlant',
//             price: 440,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type2-3',
//         name: 'McCafe Coffees',
//         title: 'mccafe_coffee',
//         list: [
//           {
//             id: '1M',
//             image: '/images/Rectangle115.png',
//             name: 'Peppermint Mocha',
//             price: 230,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2M',
//             image: '/images/Rectangle 73.png',
//             name: 'Premium Tea',
//             price: 150,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3M',
//             image: '/images/Rectangle 75.png',
//             name: 'Espresso',
//             price: 250,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4M',
//             image: '/images/Rectangle 77.png',
//             name: 'Caramel Iced Coffee',
//             price: 240,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type2-4',
//         name: 'Beverages',
//         title: 'beverages',
//         list: [
//           {
//             id: '1B',
//             image: '/images/Rectangle115.png',
//             name: 'Coca-Cola',
//             price: 130,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2B',
//             image: '/images/Rectangle 73.png',
//             name: 'Diet Coke',
//             price: 150,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3B',
//             image: '/images/Rectangle 75.png',
//             name: 'Fruitopia Orange Groove',
//             price: 250,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4B',
//             image: '/images/Rectangle 77.png',
//             name: 'Nestea Iced Tea',
//             price: 140,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 3,
//     image: '/images/Ellipse3.png',
//     name: `Starbucks`,
//     items: 'Coffee, Fast Food, Beverages',
//     cost: '300rs Per 2 Person',
//     address: 'Vesu,Surat',
//     time: '10am – 10pm ',
//     slug: `Starbucks`,
//     types: [
//       {
//         id: 'type3-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '31',
//             image: '/images/Rectangle115.png',
//             name: 'Caffe Mocha ',
//             price: 230,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '32',
//             image: '/images/Rectangle 73.png',
//             name: 'Blonde Vanilla Latte ',
//             price: 350,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '33',
//             image: '/images/Rectangle 75.png',
//             name: 'Venti Coffee ',
//             price: 450,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '34',
//             image: '/images/Rectangle 77.png',
//             name: 'Cinnamon Roll Frappuccino ',
//             price: 500,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type3-2',
//         name: 'Hot Coffees',
//         title: 'hot_coffee',
//         list: [
//           {
//             id: '1HC',
//             image: '/images/Rectangle115.png',
//             name: 'Caffe Mocha ',
//             price: 230,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2HC',
//             image: '/images/Rectangle 73.png',
//             name: 'Blonde Vanilla Latte ',
//             price: 350,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3HC',
//             image: '/images/Rectangle 75.png',
//             name: 'Venti Coffee ',
//             price: 450,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4HC',
//             image: '/images/Rectangle 77.png',
//             name: 'Cinnamon Roll Frappuccino ',
//             price: 500,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type3-3',
//         name: 'Hot Drinks',
//         title: ' hot_drinks',
//         list: [
//           {
//             id: '1HD',
//             image: '/images/Rectangle115.png',
//             name: 'Caffe Mocha ',
//             price: 230,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2HD',
//             image: '/images/Rectangle 73.png',
//             name: 'Blonde Vanilla Latte ',
//             price: 350,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3HD',
//             image: '/images/Rectangle 75.png',
//             name: 'Venti Coffee ',
//             price: 450,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4HD',
//             image: '/images/Rectangle 77.png',
//             name: 'Cinnamon Roll Frappuccino ',
//             price: 500,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type3-4',
//         name: 'Cold Coffees',
//         title: 'cold_coffee',
//         list: [
//           {
//             id: '1CC',
//             image: '/images/Rectangle115.png',
//             name: 'Caffe Mocha ',
//             price: 230,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2CC',
//             image: '/images/Rectangle 73.png',
//             name: 'Blonde Vanilla Latte ',
//             price: 350,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3CC',
//             image: '/images/Rectangle 75.png',
//             name: 'Venti Coffee',
//             price: 450,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4CC',
//             image: '/images/Rectangle 77.png',
//             name: 'Cinnamon Roll Frappuccino ',
//             price: 500,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type3-5',
//         name: 'Iced Teas',
//         title: 'iced_teas',
//         list: [
//           {
//             id: '1IT',
//             image: '/images/Rectangle115.png',
//             name: 'Caffe Mocha ',
//             price: 230,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2IT',
//             image: '/images/Rectangle 73.png',
//             name: 'Blonde Vanilla Latte ',
//             price: 350,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3IT',
//             image: '/images/Rectangle 75.png',
//             name: 'Venti Coffee ',
//             price: 450,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4IT',
//             image: '/images/Rectangle 77.png',
//             name: 'Cinnamon Roll Frappuccino ',
//             price: 500,
//             sentance: `It's not just coffee. It's always about Starbucks.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 4,
//     image: '/images/Ellipse4.png',
//     name: `Burger King`,
//     items: 'Burgers, Fast Food, Beverages',
//     cost: '400rs Per Person',
//     address: 'Athwagate,Surat',
//     time: '12am – 10pm ',
//     slug: `Burger King`,
//     types: [
//       {
//         id: 'type4-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '41',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '42',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Whopper',
//             price: 450,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '43',
//             image: '/images/Rectangle 75.png',
//             name: 'Hamburger',
//             price: 350,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '44',
//             image: '/images/Rectangle 77.png',
//             name: 'Double Stacker King.',
//             price: 440,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type4-2',
//         name: 'Family Bundles',
//         title: 'family_bundle',
//         list: [
//           {
//             id: '1FB',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2FB',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Whopper',
//             price: 450,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3FB',
//             image: '/images/Rectangle 75.png',
//             name: 'Hamburger',
//             price: 350,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4FB',
//             image: '/images/Rectangle 77.png',
//             name: 'Double Stacker King.',
//             price: 440,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type4-3',
//         name: 'Frame Grilled Burgers',
//         title: 'grilled_burger',
//         list: [
//           {
//             id: '1GB',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2GB',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Whopper',
//             price: 450,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3GB',
//             image: '/images/Rectangle 75.png',
//             name: 'Hamburger',
//             price: 350,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4GB',
//             image: '/images/Rectangle 77.png',
//             name: 'Double Stacker King.',
//             price: 440,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type4-4',
//         name: 'Sides',
//         title: 'sides',
//         list: [
//           {
//             id: '1S',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2S',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Whopper',
//             price: 450,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3S',
//             image: '/images/Rectangle 75.png',
//             name: 'Hamburger',
//             price: 350,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4S',
//             image: '/images/Rectangle 77.png',
//             name: 'Double Stacker King.',
//             price: 440,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type4-5',
//         name: 'Drinks and Coffee',
//         title: 'drinks_coffee',
//         list: [
//           {
//             id: '1DC',
//             image: '/images/Rectangle115.png',
//             name: 'Mexican McAloo Tikki Burger',
//             price: 230,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2DC',
//             image: '/images/Rectangle 73.png',
//             name: 'Double Whopper',
//             price: 450,
//             sentance: `Burger King, Home of the Whopper..`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3DC',
//             image: '/images/Rectangle 75.png',
//             name: 'Hamburger',
//             price: 350,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4DC',
//             image: '/images/Rectangle 77.png',
//             name: 'Double Stacker King.',
//             price: 440,
//             sentance: `Burger King, Home of the Whopper.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 5,
//     image: '/images/Ellipse5.png',
//     name: `KFC`,
//     items: 'Burgers, Fast Food, Beverages',
//     cost: '800rs Per 2 Person',
//     address: 'Athwagate,Surat',
//     time: '12am – 10pm ',
//     slug: `KFC`,
//     types: [
//       {
//         id: 'type5-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '51',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '52',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '53',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '54',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type5-2',
//         name: 'CHICKEN BUCKETS',
//         title: 'chicken_bucket ',
//         list: [
//           {
//             id: '1CB',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2CB',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3CB',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4CB',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type5-3',
//         name: 'BIRYANI BUCKETS',
//         title: 'biryani_bucket',
//         list: [
//           {
//             id: '1BB',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2BB',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3BB',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4BB',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type5-4',
//         name: 'BOX MEALS',
//         title: 'box_meal',
//         list: [
//           {
//             id: '1BM',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2BM',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3BM',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4BM',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type5-5',
//         name: 'BURGERS',
//         title: 'kfc_burgers',
//         list: [
//           {
//             id: '1KB',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2KB',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3KB',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4KB',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 6,
//     image: '/images/Ellipse6.png',
//     name: `Coffee Culture`,
//     items: 'Coffee, Fast Food, Beverages',
//     cost: '500rs Per Person',
//     address: 'Vesu,Surat',
//     time: '10am – 7pm ',
//     slug: `Coffee Culture`,
//     types: [
//       {
//         id: 'type6-1',
//         name: 'Recommended',
//         title: 'recommended',
//         list: [
//           {
//             id: '61',
//             image: '/images/Rectangle115.png',
//             name: 'Cold Brew Black',
//             price: 250,
//             sentance: `Life is like a cup of coffee.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '62',
//             image: '/images/Rectangle 73.png',
//             name: 'Cold Brew Latte',
//             price: 250,
//             sentance: `Life is like a cup of coffee.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '63',
//             image: '/images/Rectangle 75.png',
//             name: 'Vietnamese Cold Brew',
//             price: 370,
//             sentance: `Life is like a cup of coffee.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '64',
//             image: '/images/Rectangle 77.png',
//             name: 'Vegan Cold Brew',
//             price: 275,
//             sentance: `Life is like a cup of coffee.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type6-2',
//         name: 'Burgers',
//         title: 'cc_burgers',
//         list: [
//           {
//             id: '1CCB',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2CCB',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3CCB',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4CCB',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type6-3',
//         name: 'Salad',
//         title: 'salad',
//         list: [
//           {
//             id: '1CCS',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2CCS',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3CCS',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       },
//       {
//         id: 'type6-4',
//         name: 'Cold Press Juice',
//         title: 'cold_juice',
//         list: [
//           {
//             id: '1CJ',
//             image: '/images/Rectangle115.png',
//             name: 'Mashed Potatoes and Gravy',
//             price: 210,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '2CJ',
//             image: '/images/Rectangle 73.png',
//             name: 'Mac and Cheese',
//             price: 420,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '3CJ',
//             image: '/images/Rectangle 75.png',
//             name: 'Nashville Hot Chicken',
//             price: 650,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           },
//           {
//             id: '4CJ',
//             image: '/images/Rectangle 77.png',
//             name: 'Extra Crispy Tenders',
//             price: 940,
//             sentance: `Some fun, some food, it's all inside this Happy Meal.`,
//             addToCart: false,
//             quantity : 0
//           }
//         ]
//       }
//     ]
//   }
// ];

export const foodList: foodListType[] = [
  {
    id: 'food1',
    image: '/images/Rectangle 15.png',
    name: 'vadapav',
    time: 20,
    price: 30,
    itemCount: 1
  },
  {
    id: 'food2',
    image: '/images/Rectangle 16.png',
    name: 'panipuri',
    time: 20,
    price: 50,
    itemCount: 1
  },
  {
    id: 'food3',
    image: '/images/Rectangle 17.png',
    name: 'pav bhaji',
    time: 20,
    price: 150,
    itemCount: 1
  },
  {
    id: 'food4',
    image: '/images/Rectangle 18.png',
    name: 'ice-cream',
    time: 20,
    price: 70,
    itemCount: 1
  },
  {
    id: 'food5',
    image: '/images/Rectangle 19.png',
    name: 'sandwich',
    time: 20,
    price: 90,
    itemCount: 1
  },
  {
    id: 'food6',
    image: '/images/Rectangle 20.png',
    name: 'pizza',
    time: 20,
    price: 250,
    itemCount: 1
  }
];

export const trandingFood: trandingFoodType[] = [
  {
    id: 1,
    image: '/images/Rectangle 21.png',
    type: 'veggie friendly',
    places: '29 places near you'
  },
  {
    id: 2,
    image: '/images/Rectangle 23.png',
    type: 'trending this week',
    places: '29 places near you'
  },
  {
    id: 3,
    image: '/images/Rectangle 25.png',
    type: 'authentic',
    places: '29 places near you'
  }
];

export const menus: menusType[] = [
  {
    id: 1,
    image: '/images/Rectangle 33.png',
    type: 'dinning menu'
  },
  {
    id: 2,
    image: '/images/Rectangle 34.png',
    type: 'takeaway menu'
  }
];

export const coupons: CouponType[] = [
  {
    id: 1,
    name: 'FLAT100',
    type: 'FLAT',
    value: '100'
  },
  {
    id: 2,
    name: 'FLATFORTY',
    type: 'PERCENTAGE',
    value: '40'
  }
];
