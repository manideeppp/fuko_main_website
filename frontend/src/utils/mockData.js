// Mock data for FUKO Restaurant

export const menuCategories = [
  {
    id: 1,
    name: "Signature Fusion",
    description: "Our chef's innovative Korean fusion creations",
    image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52",
    items: [
      {
        id: 101,
        name: "Kimchi Carbonara Bowl",
        description: "Creamy carbonara with fermented kimchi and crispy bacon",
        price: "$16.99",
        spicy: true,
        popular: true
      },
      {
        id: 102,
        name: "Korean BBQ Tacos",
        description: "Bulgogi beef in soft tortillas with gochujang mayo",
        price: "$14.99",
        popular: true
      },
      {
        id: 103,
        name: "Fusion Bibimbap",
        description: "Traditional bibimbap with Mediterranean twist",
        price: "$15.99"
      }
    ]
  },
  {
    id: 2,
    name: "Korean BBQ",
    description: "Premium grilled meats with authentic marinades",
    image: "https://images.unsplash.com/photo-1743612828586-aeb6e7037b99",
    items: [
      {
        id: 201,
        name: "Bulgogi Beef",
        description: "Thinly sliced marinated beef, grilled to perfection",
        price: "$18.99",
        popular: true
      },
      {
        id: 202,
        name: "Spicy Pork BBQ",
        description: "Korean-style spicy marinated pork shoulder",
        price: "$17.99",
        spicy: true
      },
      {
        id: 203,
        name: "Galbi Short Ribs",
        description: "Premium beef short ribs with signature sauce",
        price: "$24.99"
      }
    ]
  },
  {
    id: 3,
    name: "Signature Bowls",
    description: "Hearty rice bowls packed with flavor",
    image: "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7",
    items: [
      {
        id: 301,
        name: "Classic Bibimbap",
        description: "Mixed rice bowl with vegetables, egg, and gochujang",
        price: "$13.99",
        popular: true
      },
      {
        id: 302,
        name: "Spicy Chicken Bowl",
        description: "Gochujang chicken with pickled vegetables",
        price: "$14.99",
        spicy: true
      },
      {
        id: 303,
        name: "Tofu Power Bowl",
        description: "Crispy tofu with seasonal vegetables and sesame",
        price: "$12.99"
      }
    ]
  },
  {
    id: 4,
    name: "Soups & Stews",
    description: "Comforting Korean soups and hearty stews",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee",
    items: [
      {
        id: 401,
        name: "Kimchi Jjigae",
        description: "Spicy kimchi stew with pork and tofu",
        price: "$13.99",
        spicy: true,
        popular: true
      },
      {
        id: 402,
        name: "Sundubu Jjigae",
        description: "Soft tofu stew with seafood or beef",
        price: "$14.99",
        spicy: true
      },
      {
        id: 403,
        name: "Galbitang",
        description: "Beef short rib soup with radish and noodles",
        price: "$16.99"
      }
    ]
  },
  {
    id: 5,
    name: "Appetizers",
    description: "Start your meal with Korean favorites",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    items: [
      {
        id: 501,
        name: "Kimchi Dumplings",
        description: "Pan-fried dumplings stuffed with kimchi and pork",
        price: "$8.99",
        popular: true
      },
      {
        id: 502,
        name: "Korean Fried Chicken",
        description: "Crispy chicken with sweet & spicy glaze",
        price: "$11.99",
        popular: true
      },
      {
        id: 503,
        name: "Japchae",
        description: "Glass noodles stir-fried with vegetables",
        price: "$9.99"
      }
    ]
  },
  {
    id: 6,
    name: "Drinks & Desserts",
    description: "Refreshing beverages and sweet endings",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    items: [
      {
        id: 601,
        name: "Korean Iced Tea",
        description: "Traditional barley tea served cold",
        price: "$3.99"
      },
      {
        id: 602,
        name: "Yuzu Lemonade",
        description: "Citrus-infused refreshing drink",
        price: "$4.99"
      },
      {
        id: 603,
        name: "Mochi Ice Cream",
        description: "Assorted flavors of chewy rice cakes with ice cream",
        price: "$6.99"
      }
    ]
  }
];

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