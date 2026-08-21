const items = [
    {
    id: 0,
    name: "Burgundy Pullover",
    price: 590,
    material: "Mohair",
    length: "70CM",
    sizes: "One size (Till 90kg)",
    colors: ["Burgandy","Black","Babyblue","Yellow"],
    description: "A plain, cozy pullover made from rich mohair, combining simple style with lightweight warmth.",
    image: "./clothes1.jpg"
  },

  {
    id: 1,
    name: "Leather Jacket",
    price: 2750,
    material: "Natural Leather",
    length: "65cm",
    sizes: "One size (Till 90kg)",
    colors: ["Brown", "Black", "Darkblue"],
    description: "The essential leather jacket, tailored for enduring style and everyday comfort.",
    image: "./clothes2.jpg"
  },

  {
    id: 2,
    name: "Cardigan",
    price: 590,
    material: "Knit",
    length: "65cm",
    sizes: "One size (Till 90kg)",
    colors: ["Off-White", "Burgundy", "Beige"],
    description: "A classic knit cardigan, an essential piece offering exceptional warmth and comfort, perfect for effortless layering in your daily outfits.",
    image: "./clothes3.jpg"
  },

  {
    id: 3,
    name: "Shamwah Skirt",
    price: 650,
    material: "Suede",
    length: "103cm",
    sizes: ["50kg → 70kg", "70kg → 90kg"],
    colors: ["Brown", "Black", "White"],
    description: "A chic suede skirt, featuring a soft texture and refined structure that instantly elevates any outfit with a touch of luxury.",
    image: "./clothes4.jpg"
  },

  {
    id: 4,
    name: "Classic Pants",
    price: 450,
    material: "Rosaline",
    length: "105cm",
    sizes: {
      medium: "50kg → 65kg",
      large: "65kg → 80kg",
      xlarge: "80kg → 90kg"
    },
    colors: ["Darkblue", "Black", "Metallic", "Beige"],
    description: "Classic, tailored trousers that offer a perfect fit and professional look, ideal for everyday business wear.",
    image: "./clothes5.jpg"
  },

  {
    id: 5,
    name: "Ribbed Dress",
    price: 1200,
    material: "Linen",
    length: "150cm",
    sizes: {
      size1: "50kg → 70kg",
      size2: "70kg → 90kg"
    },
    colors: ["Brown", "Off-White", "Burgundy"],
    description: "A beautifully breathable linen dress, essential for warm weather and styled with a naturally chic and relaxed silhouette.",
    image: "./clothes6.jpg"
  },

  {
    id: 6,
    name: "Leather Pants",
    price: 1500,
    material: "Leather",
    length: "105cm",
    sizes: {
      medium: "50kg → 65kg",
      large: "65kg → 80kg",
      xlarge: "80kg → 90kg"
    },
    colors: ["Brown", "Black", "White"],
    description: "The essential leather pants, tailored for enduring style and everyday comfort.",
    image: "./clothes7.jpg"
  },

  {
    id: 7,
    name: "Crop Pullover",
    price: 590,
    material: "Knit",
    length: "60cm",
    sizes: "One size (Till 90kg)",
    colors: ["Off-White", "Burgundy", "Babyblue"],
    description: "A modern cropped pullover, perfect for effortless layering and adding a contemporary, stylish silhouette to any look.",
    image: "./clothes8.jpg"
  },
  {
    id: 8,
    name: "Gold Bracelet",
    price: 1200,
    material: "18K Yellow Goldt",
    colors: "Gold",
    description: "otifs: Classic Alhambra clover.<br>Craftsmanship: Hand-finished beaded borders.<br>Fit: Lightweight, comfortable luxury.<br>Style: Perfect for layering or standing alone as a statement piece.<br>A refined and iconic bracelet that captures the essence of luxury and elegance.",
    image: "./accessories1.jpg"
  },
  {
    id: 9,
    name: "Double Bracelet",
    price: 350,
    material: "18K gold-plated alloy",
    length: "Adjustable 17–20 cm",
    colors: "Gold",
    description: "Finish: Polished, tarnish-resistant\nComfort: Lightweight and hypoallergenic\nA timeless accessory designed to add a touch of golden elegance to any outfit.",
    image: "./accessories2.jpg"
  },
  {
    id: 10,
    name: "Gold Earings",
    price: 450,
    material: "18K gold-plated alloy",
    length: "1–1.2 cm (small hoops)",
    colors: "Gold",
    description: "Closure: Secure hinged clasp.<br>Finish: High-shine, tarnish-resistant.<br>Comfort: Hypoallergenic & gentle on sensitive ears.<br>Simple, stylish, and timeless — the perfect golden essentials.",
    image: "./accessories3.jpg"
  },
  {
    id: 11,
    name: "Classic Gold Watch",
    price: 1580,
    material: "24K gold-plated stainless steel",
    size: "12 cm diameter",
    colors: "Gold",
    description: "Design: Minimalist round dial with Roman numerals.<br>Mechanism: Silent quartz movement.<br>Features: Scratch-resistant glass, stable non-slip base Perfect for offices, bedrooms, or luxury décor settings, this clock adds a touch of timeless brilliance to any room.",
    image: "./accessories4.jpg"
  },
  {
    id: 12,
    name: "Double necklace",
    price: 500,
    material: "18K gold-plated alloy",
    length: "Adjustable 40–45 cm",
    Size: "1.5 cm",
    colors: "Gold",
    description: "Finish: High-shine, tarnish-resistant.<br>Skin-friendly: Nickel-free, perfect for everyday wear. Perfect for gifting or adding a subtle glow to any outfit.",
    image: "./accessories5.jpg"
  },
  {
    id: 13,
    name: "Gold Star necklace",
    price: 845,
    material: "22K gold vermeil over sterling silver",
    length: "45 cm fixed",
    colors: "Gold",
    description: "Chain Type: Interlocked link.<br>Charm: Hand-engraved teardrop.<br>Features: Anti-fade coating, lightweight for daily wear.<br>A stunning accessory that blends classic elegance with modern design.",
    image: "./accessories6.jpg"
  },
  {
    id: 14,
    name: "Micro Top Handel Bag",
    price: 950,
    material: "Micro Top Handel Bag",
    size: "Small/compact (fits phone, keys, cards)",
    colors:"Deep navy blue",
    description: "Design: Structured shape with gold-tone hardware.<br>Strap: Adjustable crossbody strap.<br>Interior: Soft lining with mini pocket.<br>A chic everyday essential that adds a touch of sophistication to any outfit.",
    image: "./bag1.jpg"
  },
  {
    id: 15,
    name: "YSL Bag",
    price: 760,
    material: "High-quality faux leather",
    size: "Compact yet spacious for daily essentials",
    colors:"Deep cherry red",
    description: "Design: Structured yet soft shape.<br>Hardware: Gold-tone details.<br>Strap: Adjustable shoulder/crossbody strap.<br>Interior: Lined compartment with secure zipper pocket.<br>A striking accessory that brings warmth, depth, and sophistication to any look.",
    image: "./bag2.jpg"
  },
  {
    id: 16,
    name: "Dior Bag",
    price: 580,
    material: "Premium faux leather",
    size: "Spacious enough for daily essentials",
    colors:"Classic medium blue",
    description: "Design: Structured silhouette with clean lines.<br>Hardware: Silver-tone or gold-tone accents (optional).<br>Strap: Adjustable shoulder/crossbody strap.<br>Interior: Soft lining with zip pocket and phone slot.<br>A versatile, stylish bag that adds confidence and charm to your look.",
    image: "./bag3.jpg"
  },
  {
    id: 17,
    name: "Gucci Bag",
    price: 500,
    material: "Premium faux leather",
    size: "Compact but roomy enough for essentials",
    colors:"Soft beige",
    description: "Design: Structured yet lightweight silhouette.<br>Hardware: Gold-tone accents.<br>Strap: Adjustable shoulder/crossbody strap.<br>Interior: Lined compartment with zipper pocket and small slip pocket.<br>A chic and understated bag that brings elegance and simplicity to every look.",
    image: "./bag4.jpg"
  },
  {
    id: 18,
    name: "Classic Leather Bag",
    price: 570,
    material: "Premium faux leather",
    size: "Spacious enough for daily essentials",
    colors:"Classic black",
    description: "Design: Structured silhouette with clean lines.<br>Hardware: Silver-tone or gold-tone accents.<br>Strap: Adjustable shoulder/crossbody strap.\nInterior: Lined compartment with zipper pocket and slip pockets.<br>A must-have bag that adds a touch of elegance and versatility to any outfit.",
    image: "./bag5.jpg"
  },

  {
    id: 19,
    name: "Birkin Bag",
    price: 300,
    material: "High-quality faux leather",
    size: "Spacious for daily essentials, documents, and more",
    colors:"Bright red",
    description: "Design: Large, structured tote.<br>Hardware: Gold-tone accents.<br>Handles: Sturdy top handles + optional shoulder strap.<br>Interior: Lined with multiple pockets for organization.<br>A statement accessory that combines practicality with striking elegance.",
    image: "./bag6.jpg"
  },
];

    //---------------------------------------------

    localStorage.setItem("itemsData", JSON.stringify(items));



    





    











    
