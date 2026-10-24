import softServe from "@/assets/2.jpg";
import poutine from "@/assets/1.jpg";
import burger from "@/assets/5.jpg";
import milkshake from "@/assets/4.jpg";
import fries from "@/assets/fries.jpeg";
import hotdog from "@/assets/hotdog.jpg";
import sundae from "@/assets/3.jpg";
import drinks from "@/assets/home2.jpg";
import barn from "@/assets/6.jpeg";
import people from "@/assets/home.jpg";

export const IMG = {
  softServe,
  poutine,
  burger,
  milkshake,
  fries,
  hotdog,
  sundae,
  drinks,
  barn,
  people,
};

export const CONTACT = {
  phone: "+1 613-716-1606",
  phoneHref: "tel:+16137161606",
  street: "312 King Street",
  city: "Kemptville, ON",
  country: "Canada",
  postal: "K0G 1J0",
  hours: "11:00 AM — 9:00 PM",
  days: "MON — SUN",
  googleMapsLink: "https://maps.app.goo.gl/fhGLzKEP1mc28zCJA",
  doordashLink: "https://www.doordash.com/store/dairy-barn-and-grill-kemptville-52149397/121851746/?srsltid=AU7gw4VnaoCY2qO_ex4JR7sEOgxHw-z4a9aZlSiBYsf_GSoJkCTiktpu",
};

export type MenuCategory =
  | "BURGERS"
  | "POUTINE"
  | "SANDWICHES"
  | "FRIES"
  | "SIDES"
  | "SPECIAL MENU"
  | "SUBS"
  | "DRINKS"
  | "SAUCES";

export const CATEGORIES: MenuCategory[] = [
  "BURGERS",
  "POUTINE",
  "SANDWICHES",
  "FRIES",
  "SIDES",
  "SPECIAL MENU",
  "SUBS",
  "DRINKS",
  "SAUCES",
];

export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: MenuCategory;
  image: string;
  size: "wide" | "tall" | "full" | "square";
  tone: "cream" | "tomato" | "sunny" | "cocoa" | "fresh";
};

export const MENU: MenuItem[] = [
  // BURGERS
  {
    id: "hamburger",
    name: "HAMBURGER",
    desc: "Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Relish, Mayo",
    price: "$10",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "cheeseburger",
    name: "CHEESE BURGER",
    desc: "Cheese, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Relish, Mayo, Hot Peppers",
    price: "$11",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "bacon-cheese-burger",
    name: "BACON CHEESE BURGER",
    desc: "Bacon, Cheese, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Relish, Mayo, Hot Peppers",
    price: "$13",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "deluxe-burger",
    name: "DELUXE BURGER",
    desc: "Double Patty, Double Cheese, Bacon, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Mayo",
    price: "$16",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },

  // POUTINE
  {
    id: "small-poutine",
    name: "SMALL POUTINE",
    desc: "A classic favorite with crispy fries topped with rich gravy and cheese curds.",
    price: "$11",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "large-poutine",
    name: "LARGE POUTINE",
    desc: "Our hearty portion of crispy fries smothered in rich gravy and loaded with cheese curds.",
    price: "$14",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "smoke-ham-poutine",
    name: "Smoke Ham Poutine",
    desc: "Crispy fries topped with gravy, cheese curds, and savory smoked ham.",
    price: "Small $12 | Large $15",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "hot-dog-poutine",
    name: "Hot Dog Poutine",
    desc: "Crispy fries with gravy, cheese curds, and sliced hot dog.",
    price: "Small $12 | Large $15",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "bacon-poutine",
    name: "Bacon Poutine",
    desc: "Crispy fries loaded with gravy, cheese curds, and crispy bacon.",
    price: "Small $12 | Large $15",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "chicken-poutine",
    name: "Chicken Poutine",
    desc: "Crispy fries with gravy, cheese curds, and grilled chicken.",
    price: "Small $12 | Large $15",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "crispy-chicken-poutine",
    name: "Crispy Chicken Poutine",
    desc: "Crispy fries topped with gravy, cheese curds, and crispy fried chicken.",
    price: "Small $12 | Large $15",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "supreme-poutine",
    name: "Supreme Poutine",
    desc: "Crispy fries layered with gravy, cheese curds, bacon, ground beef, tomatoes, onions, and a dollop of sour cream.",
    price: "Small $17 | Large $19",
    category: "POUTINE",
    image: poutine,
    size: "wide",
    tone: "cocoa",
  },
  {
    id: "donair-poutine",
    name: "Donair Poutine",
    desc: "Crispy fries loaded with gravy, cheese curds, and savory donair meat.",
    price: "Small $14 | Large $17",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },

  // SANDWICHES
  {
    id: "blt-mayo",
    name: "BLT with Mayo",
    desc: "Crispy bacon, fresh lettuce, tomato, and creamy mayo on toasted bread.",
    price: "$15",
    category: "SANDWICHES",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "club-sandwich",
    name: "Club Sandwich (with fries)",
    desc: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo. Served with fries.",
    price: "$15",
    category: "SANDWICHES",
    image: burger,
    size: "square",
    tone: "tomato",
  },

  // FRIES
  {
    id: "small-fries",
    name: "SMALL FRIES",
    desc: "A perfect snack-sized portion of crispy golden fries.",
    price: "$5",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "medium-fries",
    name: "MEDIUM FRIES",
    desc: "A generous serving of our crispy golden fries.",
    price: "$7",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "large-fries",
    name: "LARGE FRIES",
    desc: "A large helping of our crispy golden fries.",
    price: "$9",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },

  // SIDES
  {
    id: "pogo",
    name: "POGO",
    desc: "Classic corndog on a stick",
    price: "$4",
    category: "SIDES",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "onion-rings",
    name: "ONION RINGS",
    desc: "Crispy, golden-battered onion rings.",
    price: "$5",
    category: "SIDES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "chicken-fingers",
    name: "CHICKEN FINGERS",
    desc: "Tender and juicy chicken strips served with your choice of dipping sauce.",
    price: "$8",
    category: "SIDES",
    image: burger,
    size: "square",
    tone: "cream",
  },
  {
    id: "sausage-on-bun",
    name: "SAUSAGE ON BUN+SMALL FRIES",
    desc: "Italian sausage on a bun with small fries",
    price: "$14",
    category: "SIDES",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },

  // SPECIAL MENU
  {
    id: "tacos-fiesta-combo",
    name: "Tacos Fiesta Combo",
    desc: "A delicious combo of tacos with all the fixings.",
    price: "$19",
    category: "SPECIAL MENU",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "lobster-rolls",
    name: "Lobster Rolls",
    desc: "Lobster, shredded celery and Dairy Barn sauce",
    price: "$15",
    category: "SPECIAL MENU",
    image: burger,
    size: "square",
    tone: "fresh",
  },

  // SUBS
  {
    id: "chicken-sub",
    name: "CHICKEN SUB",
    desc: "Grilled chicken, lettuce, tomato, pickles and dairy barn special sauce",
    price: "$16.99",
    category: "SUBS",
    image: burger,
    size: "square",
    tone: "cream",
  },
  {
    id: "philly-sub",
    name: "PHILLY SUB",
    desc: "Green pepper, onion, mushroom, cheese, lettuce, tomato, pickles, mayo and dairy barn sauce",
    price: "$17.99",
    category: "SUBS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "meatball-sub",
    name: "MEAT BALL SUB",
    desc: "Italian meatballs with marinara sauce and melted cheese",
    price: "$16.99",
    category: "SUBS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "club-sub",
    name: "CLUB SUB",
    desc: "Ham, Turkey, Cheese, Lettuce, Tomatoes, Mayo",
    price: "$15.99",
    category: "SUBS",
    image: burger,
    size: "square",
    tone: "cream",
  },

  // DRINKS
  {
    id: "coke",
    name: "COKE",
    desc: "Classic Coca-Cola",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "diet-coke",
    name: "DIET COKE",
    desc: "Diet Coca-Cola",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "coke-zero",
    name: "COKE ZERO SUGAR",
    desc: "Coca-Cola Zero Sugar",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "pepsi",
    name: "PEPSI",
    desc: "Classic Pepsi",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "diet-pepsi",
    name: "DIET PEPSI",
    desc: "Diet Pepsi",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "pepsi-zero",
    name: "PEPSI ZERO SUGAR",
    desc: "Pepsi Zero Sugar",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "sprite",
    name: "SPRITE",
    desc: "Refreshing lemon-lime soda",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "ginger-ale",
    name: "GINGER ALE",
    desc: "Canada Dry Ginger Ale",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "nestea",
    name: "Nestea",
    desc: "Iced tea",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "root-beer",
    name: "ROOT BEER",
    desc: "Classic root beer",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },

  // SAUCES
  {
    id: "gravy",
    name: "GRAVY",
    desc: "Rich and savory gravy",
    price: "$2",
    category: "SAUCES",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "spicy-mayo",
    name: "SPICY MAYO",
    desc: "Creamy mayo with a kick",
    price: "$2",
    category: "SAUCES",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "bbq-sauce",
    name: "BBQ SAUCE",
    desc: "Sweet and tangy barbecue sauce",
    price: "$2",
    category: "SAUCES",
    image: burger,
    size: "square",
    tone: "tomato",
  },
];

export const SIGNATURES = [
  {
    n: "01",
    name: "SOFT SERVE CONE",
    price: "",
    image: softServe,
    blurb: "The one people drive out for.",
  },
  {
    n: "02",
    name: "LOADED POUTINE",
    price: "",
    image: poutine,
    blurb: "Curds, gravy, zero restraint.",
  },
  {
    n: "03",
    name: "CLASSIC BURGER",
    price: "",
    image: burger,
    blurb: "Smashed, stacked, dripping.",
  },
  {
    n: "04",
    name: "THICK SHAKES",
    price: "",
    image: milkshake,
    blurb: "Straw optional. Spoon advised.",
  },
];
