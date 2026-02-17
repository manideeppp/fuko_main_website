export const menuCategories = [
  {
    id: "korean-cravings",
    name: "Korean Cravings",
    description: "Crispy street-food bites with bold Korean flavour.",
    image:
      "https://images.unsplash.com/photo-1604908554027-3f2a0c2f9b4d?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "corndog",
        name: "Korean Corndog",
        price: "£5.9",
        description:
          "Golden panko crunch. Sausage core. Garlic mustard, ketchup & K-chilli.",
        spicy: false,
        popular: true,
      },
      {
        id: "dukk-gochi",
        name: "Dukk-Gochi",
        price: "£5.5",
        description:
          "Chewy rice cake skewers glazed in sweet chilli & sesame.",
        spicy: true,
        popular: true,
      },
      {
        id: "kimchi-aranchini",
        name: "Kimchi Aranchini",
        price: "£5.9",
        description:
          "Crispy kimchi rice balls with molten mozzarella centre.",
        spicy: true,
        popular: false,
      },
      {
        id: "kimchi-pancake",
        name: "Kimchi Pancake",
        price: "£6.9",
        description:
          "Savory kimchi pancake. Crisp edges, bold flavour.",
        spicy: false,
        popular: true,
      },
      {
        id: "korean-dumplings",
        name: "Korean Dumplings",
        price: "£7.5",
        description:
          "Juicy kimchi dumplings. Fried or steamed perfection.",
        spicy: true,
        popular: true,
      },
    ],
  },

  {
    id: "k-flavor-bowls",
    name: "K-Flavor Bowls",
    description: "Loaded bowls. Bold toppings. Your protein, your way.",
    image:
      "https://images.unsplash.com/photo-1606851091851-e8c8c0a99895?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "fuko-rice-bowl",
        name: "FUKO Rice Bowl",
        price: "£10.9",
        description:
          "Steamed rice, cheese, kimchi slaw, crispy onion & K-chilli.",
        spicy: false,
        popular: true,
      },
      {
        id: "bulgogi-loaded-fries",
        name: "Bulgogi Loaded Fries",
        price: "£11.9",
        description:
          "Crispy fries stacked with cheese, slaw & bold Korean sauces.",
        spicy: false,
        popular: true,
      },
      {
        id: "protein-note",
        name: "Choose Your Protein",
        price: "",
        description:
          "Beef bulgogi, spicy pork, spicy chicken, tofu, dumplings or K-fried.",
        spicy: true,
        popular: false,
      },
    ],
  },

  {
    id: "korean-fried",
    name: "Korean Fried",
    description: "Ultra-crispy chicken with signature Korean sauces.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "k-fried-boneless",
        name: "K-Fried Boneless",
        price: "£7.9",
        description:
          "Boneless crunch. Choose sweet chilli, soy garlic or cheesy snow.",
        spicy: true,
        popular: true,
      },
      {
        id: "k-fried-wings",
        name: "K-Fried Wings",
        price: "£7.5+",
        description:
          "Signature crispy wings with bold Korean glaze options.",
        spicy: true,
        popular: true,
      },
    ],
  },

  {
    id: "bulgogi-burgers",
    name: "Bulgogi Burgers",
    description: "Juicy burgers layered with Korean attitude.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "k-fried-chicken-burger",
        name: "K-Fried Chicken Burger",
        price: "£8.9",
        description:
          "Crispy chicken, kimchi slaw & Korean burger sauce.",
        spicy: true,
        popular: true,
      },
      {
        id: "smashed-bulgogi-burger",
        name: "Smashed Bulgogi Burger",
        price: "£8.9",
        description:
          "Double smashed bulgogi beef. Cheese, fresh crunch, bold mayo.",
        spicy: false,
        popular: true,
      },
    ],
  },

  {
    id: "tacos-baos",
    name: "Tacos & Baos",
    description: "Soft buns. Bold fillings. Big flavour hits.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "bulgogi-tacos",
        name: "Bulgogi Tacos",
        price: "£8",
        description:
          "Soft tacos loaded with bulgogi, slaw & Korean spice.",
        spicy: true,
        popular: true,
      },
      {
        id: "fuko-baos",
        name: "FUKO Baos",
        price: "£8.5",
        description:
          "Fluffy bao buns packed with bold Korean fillings.",
        spicy: true,
        popular: true,
      },
      {
        id: "tacos-protein-note",
        name: "Choose Your Protein",
        price: "",
        description:
          "Beef, pork, chicken, tofu or dumplings.",
        spicy: true,
        popular: false,
      },
    ],
  },
];





// Review section
export const customerReviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    date: "2 weeks ago",
    review: "Absolutely incredible! The fusion concept works perfectly. The Kimchi Carbonara is a game-changer. Will definitely be back!",
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Chen",
    rating: 5,
    date: "1 month ago",
    review: "Best Korean BBQ in town! The bulgogi beef is tender and flavorful. Service is fast without compromising quality.",
    avatar: "JC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    date: "3 weeks ago",
    review: "Love the modern take on traditional Korean dishes. The atmosphere is vibrant and the food is consistently amazing!",
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Park",
    rating: 5,
    date: "1 week ago",
    review: "As a Korean food enthusiast, I'm impressed by the authentic flavors with creative twists. The kimchi jjigae is spot on!",
    avatar: "MP"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    rating: 5,
    date: "2 months ago",
    review: "Quick service, incredible taste! Perfect for lunch breaks. The Korean fried chicken is addictive!",
    avatar: "LT"
  },
  {
    id: 6,
    name: "David Kim",
    rating: 5,
    date: "3 weeks ago",
    review: "FUKO never disappoints! Every dish I've tried has been fantastic. Highly recommend the fusion bibimbap.",
    avatar: "DK"
  }
];

export const socialMediaPhotos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52",
    alt: "Korean fusion dish spread",
    likes: 342
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1743612828586-aeb6e7037b99",
    alt: "Korean BBQ dinner",
    likes: 289
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    alt: "Multiple Korean dishes",
    likes: 456
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee",
    alt: "Korean stew in black bowl",
    likes: 198
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7",
    alt: "Bibimbap bowls",
    likes: 312
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    alt: "Korean appetizers",
    likes: 267
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1621873495868-6c5774cf6012",
    alt: "Premium dining setup",
    likes: 423
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1708388065014-abafa002040a",
    alt: "Korean table setting",
    likes: 201
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/30301568/pexels-photo-30301568.jpeg",
    alt: "Traditional Korean fish stew",
    likes: 178
  }
];

export const locationInfo = {
  address: "123 Fusion Street, Downtown District",
  city: "New York, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "hello@fukorestaurant.com",
  hours: {
    weekday: "11:00 AM - 10:00 PM",
    weekend: "11:00 AM - 11:00 PM"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1413937375967!2d-74.00601668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
};

export const externalLinks = {
  bookTable: "https://www.opentable.com/fuko-restaurant",
  onlineOrdering: "https://www.ubereats.com/fuko",
  storePickup: "https://www.doordash.com/fuko",
  instagram: "https://www.instagram.com/fukorestaurant",
  facebook: "https://www.facebook.com/fukorestaurant",
  twitter: "https://www.twitter.com/fukorestaurant"
};