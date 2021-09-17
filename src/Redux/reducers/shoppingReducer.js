import {
  ADD_TO_CART,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
  CLOSE_BANNER,
} from "../constants/shoppingType";

const initState = {
  products: [
    {
      id: 1,
      img: require("../../Images/vintage1.jpg").default,
      title: "Volkswagen - 1937",
      price: 150,
      details:
        "Produced in 1937 by the German Labour Front, Known as Iconic Beetle. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },
    {
      id: 2,
      img: require("../../Images/vintage2.jpg").default,
      title: "Mercedes Benz - 1940",
      price: 120,
      details:
        "Produced in 1940 by the German Labour Front, Known as Mercedes. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 3,
      img: require("../../Images/vintage3.jpg").default,
      title: "Mercedes Benz - 1950",
      price: 90,
      details:
        "Produced in 1950 by the German Labour Front, Known as Mercedes. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 4,
      img: require("../../Images/vintage4.jpg").default,
      title: "Rolls Royce - 1930",
      price: 200,
      details:
        "Produced in 1930 by the British Labour Front, Known as Rolls. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 5,
      img: require("../../Images/vintage5.jpg").default,
      title: "Chevy Camero - 1967",
      price: 170,
      details:
        "Produced in 1937 by the American Labour Front, Known as Chevy Camero. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 6,
      img: require("../../Images/vintage6.jpg").default,
      title: "Mercedes Benz - 1980",
      price: 80,
      details:
        "Produced in 1950 by the German Labour Front, Known as Mercedes. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 7,
      img: require("../../Images/vintage7.jpg").default,
      title: "McLaren F1 - 1928",
      price: 50,
      details:
        "Produced in 1950 by the German Labour Front, Known as Mercedes. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },

    {
      id: 8,
      img: require("../../Images/vintage8.jpg").default,
      title: "VW Beatles - 1966",
      price: 65,
      details:
        "Produced in 1950 by the German Labour Front, Known as Mercedes. This Classic Vehicle run at a top speed of 298km/h",
      count: 1,
      inCart: false,
    },
  ],

  cart: [],
  isOpen: false,
  total: 0,
  shipping: 10,
};

const shoppingReducer = (state = initState, { type, payload }) => {
  const { products, cart } = state;
  switch (type) {
    case ADD_TO_CART:
      const inCart = cart.find(item => item.id === payload); // Check if product is in cart

      if (!inCart) {
        const singleProduct = products.find(item => item.id === payload);

        return { ...state, cart: [...cart, singleProduct] };
      } else {
        const selectedProduct = products.map(product =>
          product.id === payload ? { ...product, inCart: true } : product,
        );

        return {
          ...state,
          products: selectedProduct,
        };
      }

    case DELETE_ITEM:
      const filterCart = cart.filter(item => item.id !== payload);

      return { ...state, cart: filterCart };

    case INCREASE_ITEM:
      const increaseQty = cart.map(item =>
        item.id === payload ? { ...item, count: item.count + 1 } : item,
      );
      return {
        ...state,
        cart: increaseQty,
      };

    case DECREASE_ITEM:
      const decreaseQty = cart.map(item =>
        item.id === payload ? { ...item, count: item.count - 1 } : item,
      );
      return {
        ...state,
        cart: decreaseQty,
      };

    case TOTAL_ITEMS:
      const totals = cart.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      );

      return {
        ...state,
        total: totals,
      };

    case CLOSE_BANNER:
      products.forEach(item => (item.inCart = false));
      return { ...state };

    default:
      return state;
  }
};

export default shoppingReducer;
