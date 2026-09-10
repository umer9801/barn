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
  | "ICE CREAM"
  | "BURGERS"
  | "POUTINE"
  | "FRIES"
  | "SHAKES"
  | "DRINKS"
  | "HOT DOGS"
  | "SIDES"
  | "SAUCES"
  | "COMBOS";

export const CATEGORIES: MenuCategory[] = [
  "ICE CREAM",
  "BURGERS",
  "HOT DOGS",
  "COMBOS",
  "POUTINE",
  "SIDES",
  "FRIES",
  "SHAKES",
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
  // ICE CREAM
  {
    id: "rainbow-soft-serve",
    name: "RAINBOW SOFT SERVE",
    desc: "Vanilla, chocolate or mixed — swirled tall with rainbow sprinkles.",
    price: "$5.99",
    category: "ICE CREAM",
    image: softServe,
    size: "full",
    tone: "sunny",
  },
  {
    id: "hot-fudge-sundae",
    name: "HOT FUDGE SUNDAE",
    desc: "Soft serve drowned in hot fudge, sprinkles, cherry on top.",
    price: "$6.99",
    category: "ICE CREAM",
    image: sundae,
    size: "square",
    tone: "cream",
  },
  {
    id: "cone-classic",
    name: "ICE CREAM CONE",
    desc: "One size: generous. Waffle cone, dipped if you want it.",
    price: "$4.99",
    category: "ICE CREAM",
    image: softServe,
    size: "tall",
    tone: "cream",
  },

  // BURGERS
  {
    id: "hamburger",
    name: "HAMBURGER",
    desc: "Mushroom, Tomatoes, Lettuce, Pickles, Ketchup, Mustard, Mayo, Onion",
    price: "$8",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "cheeseburger",
    name: "CHEESEBURGER",
    desc: "Lettuce, Tomatoes, Onions, Cheese, Pickles, Ketchup, Mayo",
    price: "$10",
    category: "BURGERS",
    image: burger,
    size: "square",
    tone: "tomato",
  },
  {
    id: "bacon-cheese-burger",
    name: "BACON CHEESE BURGER",
    desc: "Bacon, Cheese, Lettuce, Tomatoes, Mayo & Much More!",
    price: "$12",
    category: "BURGERS",
    image: burger,
    size: "tall",
    tone: "tomato",
  },
  {
    id: "double-burger",
    name: "DOUBLE BURGER",
    desc: "Double Patty, Cheese, Lettuce, Tomatoes, Bacon, Onions, Mayo, Ketchup, Mustard, Pickles, Mayo",
    price: "$14",
    category: "BURGERS",
    image: burger,
    size: "wide",
    tone: "tomato",
  },

  // HOT DOGS
  {
    id: "hotdog-plain",
    name: "HOT DOG (PLAIN)",
    desc: "All beef hotdog. Ketchup, Mustard, Relish",
    price: "$4",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "hotdog-coney",
    name: "CONEY HOT DOG",
    desc: "Hot dog, Mustard, onions, Relish, Chili",
    price: "$7.99",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "large-fries-hotdog",
    name: "LARGE FRIES + HOT DOG",
    desc: "Large Fries with Hotdog, Ketchup or Mustard",
    price: "$9.99",
    category: "HOT DOGS",
    image: hotdog,
    size: "tall",
    tone: "sunny",
  },
  {
    id: "all-beef-hotdog",
    name: "ALL BEEF HOT DOG",
    desc: "All beef hot dog. Ketchup, Mustard",
    price: "$6.99",
    category: "HOT DOGS",
    image: hotdog,
    size: "square",
    tone: "sunny",
  },
  {
    id: "grilled-cheese-dog",
    name: "GRILLED CHEESE DOG",
    desc: "All beef dog, Cheese, Onions, Mustard, Ketchup, Mayo",
    price: "$8.99",
    category: "HOT DOGS",
    image: hotdog,
    size: "wide",
    tone: "sunny",
  },

  // COMBOS (SPECIAL MENU)
  {
    id: "cheese-fries-combo",
    name: "CHEESE FRIES COMBO",
    desc: "2 double or single hamburgers (your choice), poutine, 2 onion rings, Fries, and creamy sour cream - add full of your choice",
    price: "$18",
    category: "COMBOS",
    image: burger,
    size: "wide",
    tone: "tomato",
  },
  {
    id: "family-feast-combo",
    name: "FAMILY FEAST COMBO",
    desc: "8 hot dogs or chicken burgers accompanied by golden fries or onion rings, paired with your creamy sour cream",
    price: "$50",
    category: "COMBOS",
    image: burger,
    size: "full",
    tone: "tomato",
  },
  {
    id: "ultimate-family-feast-combo",
    name: "ULTIMATE FAMILY FEAST COMBO",
    desc: "10 (8+2) or combination of cheeseburger or chicken burgers, served with hot dogs or onion rings or poutine, your choice of two creamy sour cream and 8 cans of soft drink",
    price: "$75",
    category: "COMBOS",
    image: burger,
    size: "full",
    tone: "tomato",
  },

  // POUTINE
  {
    id: "poutine-junior",
    name: "POUTINE JUNIOR",
    desc: "A portion size of curds. Fresh fries smothered with rich and creamy gravy and curds.",
    price: "$8",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "poutine-small",
    name: "POUTINE SMALL",
    desc: "Curdsized portion of crispy fries smothered with gravy and curds in every bite.",
    price: "$9",
    category: "POUTINE",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "poutine-regular",
    name: "POUTINE REGULAR",
    desc: "Large portion of fries, rich gravy and cheese curds. Savory, ground beef, onions, cheese curds, creamy sauce",
    price: "$14",
    category: "POUTINE",
    image: poutine,
    size: "tall",
    tone: "cocoa",
  },
  {
    id: "loaded-poutine",
    name: "LOADED POUTINE",
    desc: "Fresh cut fries, squeaky curds, slow-simmered gravy, crisp bacon.",
    price: "$16",
    category: "POUTINE",
    image: poutine,
    size: "wide",
    tone: "cocoa",
  },

  // SIDES
  {
    id: "onion-rings",
    name: "ONION RINGS",
    desc: "Classic onion rings - a stick",
    price: "$4",
    category: "SIDES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "corn-rings",
    name: "CORN RINGS",
    desc: "Crispy, onion flavored onion",
    price: "$5.99",
    category: "SIDES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "mozzarella-sticks",
    name: "MOZZARELLA STICKS",
    desc: "Molten sticks, served with your favorite dip",
    price: "$6.99",
    category: "SIDES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "italian-sausage",
    name: "ITALIAN SAUSAGE",
    desc: "Italian sausage, peppers with mustard",
    price: "$8.99",
    category: "SIDES",
    image: hotdog,
    size: "tall",
    tone: "sunny",
  },
  {
    id: "grilled-cheese",
    name: "GRILLED CHEESE",
    desc: "Toasted bread, grilled lettuce, served with your sauce of french fries",
    price: "$6.99",
    category: "SIDES",
    image: burger,
    size: "square",
    tone: "cream",
  },

  // FRIES
  {
    id: "small-fries",
    name: "SMALL FRIES",
    desc: "A perfect serving of hot crispy golden fries",
    price: "$4",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "medium-fries",
    name: "MEDIUM FRIES",
    desc: "A generous serving of hot crispy fries - ideal for one serving or perfect for two for the whole family for a side or meal",
    price: "$5",
    category: "FRIES",
    image: fries,
    size: "square",
    tone: "sunny",
  },
  {
    id: "large-fries",
    name: "LARGE FRIES",
    desc: "A large topping of our crispy golden fries in a bag for you or ideal for group or gathering side",
    price: "$8",
    category: "FRIES",
    image: fries,
    size: "tall",
    tone: "sunny",
  },
  {
    id: "family-size-fries",
    name: "FAMILY SIZE FRIES",
    desc: "An ample portion of our crispy golden fries perfect for family or small party",
    price: "$16",
    category: "FRIES",
    image: fries,
    size: "wide",
    tone: "sunny",
  },

  // SHAKES & DRINKS
  {
    id: "thick-shake",
    name: "THICK MILKSHAKE",
    desc: "Hand-spun strawberry or chocolate, whipped cream, one cherry.",
    price: "$7.99",
    category: "SHAKES",
    image: milkshake,
    size: "tall",
    tone: "cream",
  },
  {
    id: "pop",
    name: "POP",
    desc: "Can of your favorite soda",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "water",
    name: "WATER",
    desc: "Bottled water",
    price: "$2",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },
  {
    id: "cold-drinks",
    name: "COLD DRINKS & SMOOTHIES",
    desc: "Ice-bucket cold cans and real fruit smoothies blended to order.",
    price: "$3.49",
    category: "DRINKS",
    image: drinks,
    size: "square",
    tone: "fresh",
  },

  // SAUCES
  {
    id: "sauce-gravy",
    name: "GRAVY",
    desc: "Rich and savory gravy",
    price: "$2",
    category: "SAUCES",
    image: poutine,
    size: "square",
    tone: "cocoa",
  },
  {
    id: "sauce-cheese",
    name: "CHEESE SAUCE",
    desc: "Creamy cheese sauce",
    price: "$2",
    category: "SAUCES",
    image: poutine,
    size: "square",
    tone: "sunny",
  },
];

export const SIGNATURES = [
  {
    n: "01",
    name: "RAINBOW SOFT SERVE",
    price: "$5.99",
    image: softServe,
    blurb: "The one people drive out for.",
  },
  {
    n: "02",
    name: "LOADED POUTINE",
    price: "$11.49",
    image: poutine,
    blurb: "Curds, gravy, zero restraint.",
  },
  {
    n: "03",
    name: "CLASSIC BURGER",
    price: "$12.99",
    image: burger,
    blurb: "Smashed, stacked, dripping.",
  },
  {
    n: "04",
    name: "THICK SHAKES",
    price: "$7.99",
    image: milkshake,
    blurb: "Straw optional. Spoon advised.",
  },
];
