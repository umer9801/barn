import softServe from "@/assets/2.jpg";
import poutine from "@/assets/1.jpg";
import burger from "@/assets/5.jpg";
import milkshake from "@/assets/4.jpg";
import fries from "@/assets/fries.jpg";
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
};

export type MenuCategory =
  | "BURGERS"
  | "FRIES"
  | "POUTINE"
  | "HOT DOGS"
  | "SIDES"
  | "ICE CREAM"
  | "SHAKES"
  | "DRINKS";

export const CATEGORIES: MenuCategory[] = [
  "BURGERS",
  "FRIES",
  "POUTINE",
  "HOT DOGS",
  "SIDES",
  "ICE CREAM",
  "SHAKES",
  "DRINKS",
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
    price: "",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "cheeseburger",
    name: "CHEESEBURGER",
    desc: "Cheese, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Relish, Mayo, Hot Peppers",
    price: "",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "bacon-cheese-burger",
    name: "BACON CHEESE BURGER",
    desc: "Bacon, Cheese, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Relish, Mayo, Hot Peppers",
    price: "",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "deluxe-burger",
    name: "DELUXE BURGER",
    desc: "Double Patty, Double Cheese, Bacon, Lettuce, Tomato, Onions, Pickles, Ketchup, Mustard, Mayo",
    price: "",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },

  // FRIES
  {
    id: "small-fries",
    name: "SMALL FRIES",
    desc: "A perfect snack-sized portion of crispy golden fries.",
    price: "",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "medium-fries",
    name: "MEDIUM FRIES",
    desc: "A generous serving of our crispy golden fries, ideal for sharing or enjoying on your own.",
    price: "",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "large-fries",
    name: "LARGE FRIES",
    desc: "A large helping of our crispy golden fries, perfect for those with a big appetite or to share with friends.",
    price: "",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "family-size-fries",
    name: "FAMILY SIZE FRIES",
    desc: "A massive portion of our crispy golden fries, perfect for the whole family or a group of friends to enjoy.",
    price: "",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },

  // POUTINE
  {
    id: "poutine-small",
    name: "SMALL POUTINE",
    desc: "A classic favorite with crispy fries topped with rich gravy and cheese curds.",
    price: "",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "poutine-large",
    name: "LARGE POUTINE",
    desc: "Our hearty portion of crispy fries smothered in rich gravy and loaded with cheese curds.",
    price: "",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "poutine-supreme",
    name: "SUPREME POUTINE",
    desc: "Indulge in the ultimate poutine experience! Crispy fries layered with gravy, cheese curds, bacon, ground beef, tomatoes, onions, and a dollop of sour cream.",
    price: "",
    category: "POUTINE",
    image: poutine,
    size: "wide",
    tone: "cocoa",
  },

  // HOT DOGS
  {
    id: "hotdog-regular",
    name: "REGULAR HOTDOG",
    desc: "Hotdog, Ketchup, Mustard, Relish",
    price: "",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "hotdog-jumbo",
    name: "JUMBO HOTDOG",
    desc: "Large All-Beef Hotdog, Ketchup, Mustard, Relish, Onions, Hot Peppers",
    price: "",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "hotdog-jumbo-cheese",
    name: "JUMBO CHEESE DOG",
    desc: "Large All-Beef Hotdog, Cheese, Ketchup, Mustard, Relish, Onions, Hot Peppers",
    price: "",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "hotdog-loaded-jumbo",
    name: "LOADED JUMBO DOG",
    desc: "Large All-Beef Hotdog, Cheese, Bacon, Lettuce, Tomato, Onions, Ketchup, Mustard, Relish, Hot Peppers",
    price: "",
    category: "HOT DOGS",
    image: hotdog,
    size: "wide",
    tone: "sunny",
  },

  // SIDES
  {
    id: "pogo",
    name: "POGO",
    desc: "Classic corndog on a stick",
    price: "",
    category: "SIDES",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "onion-rings",
    name: "ONION RINGS",
    desc: "Crispy, golden-battered onion rings.",
    price: "",
    category: "SIDES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "chicken-fingers",
    name: "CHICKEN FINGERS",
    desc: "Tender and juicy chicken strips served with your choice of dipping sauce.",
    price: "",
    category: "SIDES",
    image: burger,
    size: "square",
    tone: "cream",
  },
  {
    id: "sausage-on-bun",
    name: "SAUSAGE ON A BUN",
    desc: "Italian sausage topped with mustard and onions",
    price: "",
    category: "SIDES",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },

  // ICE CREAM
  {
    id: "soft-serve-cone",
    name: "SOFT SERVE CONE",
    desc: "Vanilla, chocolate or mixed — swirled tall with sprinkles.",
    price: "",
    category: "ICE CREAM",
    image: softServe,
    size: "square",
    tone: "cream",
  },
  {
    id: "hot-fudge-sundae",
    name: "HOT FUDGE SUNDAE",
    desc: "Soft serve drowned in hot fudge, sprinkles, cherry on top.",
    price: "",
    category: "ICE CREAM",
    image: sundae,
    size: "square",
    tone: "cream",
  },
  {
    id: "banana-split",
    name: "BANANA SPLIT",
    desc: "Three scoops, banana, hot fudge, whipped cream, cherry.",
    price: "",
    category: "ICE CREAM",
    image: sundae,
    size: "wide",
    tone: "cream",
  },

  // SHAKES & DRINKS
  {
    id: "thick-shake",
    name: "THICK MILKSHAKE",
    desc: "Hand-spun vanilla, strawberry or chocolate, whipped cream, one cherry.",
    price: "",
    category: "SHAKES",
    image: milkshake,
    size: "square",
    tone: "fresh",
  },
  {
    id: "smoothie",
    name: "SMOOTHIE",
    desc: "Real fruit smoothies blended to order.",
    price: "",
    category: "SHAKES",
    image: milkshake,
    size: "square",
    tone: "fresh",
  },
  {
    id: "pop",
    name: "POP / SOFT DRINK",
    desc: "Can of your favorite soda",
    price: "",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "water",
    name: "BOTTLED WATER",
    desc: "Fresh bottled water",
    price: "",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
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
