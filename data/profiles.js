// This file will be used as the persistent data store
// In a production environment, you would use a proper database
let profiles = [
  {
    id: 1,
    name: "Sophia",
    age: 24,
    shortDescription: "Elegant and sophisticated companion with a warm personality",
    fullDescription: "Sophia is an intelligent and charming companion who brings elegance to every encounter. With her warm smile and engaging conversation, she creates memorable experiences. She enjoys fine dining, cultural events, and meaningful connections. Available for dinner dates, social events, and sophisticated companionship.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691258/13_reysqk.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691258/11_znipph.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691258/14_wpts40.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691258/12_p8dz8c.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691259/16_evpfip.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691258/15_h0bnae.jpg"
    ],
    services: ["Dinner Dates", "Social Events", "Travel Companion"],
    location: "Pensilvania",
    availability: "By Appointment",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567890",
      telegram: "@midnightqueens",
      phone: "+1234567890"
    }
  },
  {
    id: 2,
    name: "Isabella",
    age: 26,
    shortDescription: "Vivacious and adventurous with an infectious energy",
    fullDescription: "Isabella brings excitement and joy to every moment. Her adventurous spirit and vibrant personality make her the perfect companion for those seeking memorable experiences. She loves exploring the city, trying new restaurants, and engaging in stimulating conversations. Her warm and friendly nature puts everyone at ease.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691313/25_ktajkp.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691318/21_g2lz6u.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691312/23_igiehs.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691312/24_wjeowo.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691312/22_hdbomg.jpg"
    ],
    services: ["City Tours", "Entertainment Events", "Casual Dining"],
    location: "Huntington lewistown",
    availability: "Flexible Schedule",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567891",
      telegram: "@midnightqueens",
      phone: "+1234567891"
    }
  },
  {
    id: 3,
    name: "Victoria",
    age: 28,
    shortDescription: "Refined and cultured with impeccable taste",
    fullDescription: "Victoria embodies sophistication and grace. With her refined tastes and cultured background, she's the ideal companion for upscale events and intimate gatherings. Her knowledge of art, literature, and fine cuisine makes for engaging conversations. She values discretion and professionalism above all.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691328/31_drokvx.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691328/32_s1kbpc.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691329/33_aq0zmm.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691329/36_pdxshf.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691329/34_ymuawo.jpg"
    ],
    services: ["Corporate Events", "Art Gallery Tours", "Fine Dining"],
    location: "Willuamsport ridgway",
    availability: "Premium Bookings",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567892",
      telegram: "@midnightqueens",
      phone: "+1234567892"
    }
  },
  {
    id: 4,
    name: "Anastasia",
    age: 23,
    shortDescription: "Charming and playful with a magnetic personality",
    fullDescription: "Anastasia's magnetic charm and playful nature create an atmosphere of fun and excitement. Her youthful exuberance combined with emotional intelligence makes her wonderful company for various occasions. She enjoys dancing, live music, and creating unforgettable memories with her companions.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691340/43_bger3c.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691340/45_lj2wdw.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691340/44_gzv4qn.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691339/42_v8b2xg.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750691339/41_g2o3tb.jpg"
    ],
    services: ["Night Life", "Concert Events", "Weekend Getaways"],
    location: "Brookville",
    availability: "Evening Preferred",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567893",
      telegram: "@midnightqueens",
      phone: "+1234567893"
    }
  },
  {
    id: 5,
    name: "Gabriella",
    age: 27,
    shortDescription: "Worldly and intellectual with captivating stories",
    fullDescription: "Gabriella is a well-traveled intellectual who brings fascinating perspectives to every conversation. Her worldly experiences and multilingual abilities make her an exceptional companion for international visitors and cultural enthusiasts. She has a passion for literature, philosophy, and discovering hidden gems in the city.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692463/4_nzqn8f.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692463/4_nzqn8f.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692463/3_mqc6su.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692462/6_b8yowt.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692462/5_q4rfpv.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750692462/7_x4wyx6.jpg"  
    ],
    services: ["Cultural Tours", "Business Dinners", "Literary Events"],
    location: "Clarion ",
    availability: "Advance Booking",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567894",
      telegram: "@midnightqueens",
      phone: "+1234567894"
    }
  },
  {
    id: 6,
    name: "Nova",
    age: 25,
    shortDescription: "Graceful and artistic with a gentle soul",
    fullDescription: "Nova combines artistic sensibility with natural grace, creating an aura of tranquility and beauty. Her gentle nature and creative spirit make her perfect for those seeking meaningful connections and peaceful moments. She enjoys museums, quiet cafes, and thoughtful conversations about life and art.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750693852/IMG_1265_z6rdqa.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750693789/IMG_1267_wmw776.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750693788/IMG_1264_a4vvsl.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750693788/IMG_1263_urqp4d.jpg"
    ],
    services: ["Museum Tours", "Artistic Events", "Quiet Companionship"],
    location: "Pittsburgh ",
    availability: "Daytime Flexible",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567895",
      telegram: "@midnightqueens",
      phone: "+1234567895"
    }
  },
  {
    id: 7,
    name: " Bella",
    age: 23,
    shortDescription: "Flirty and fearless, Bella is all about pleasure, play, and pushing limits",

    fullDescription: "Bella is bursting with energy and irresistible charm. She's the adventurous type who loves new experiences and is always ready to turn up the heat. Perfect for confident men who want someone bold, daring, and sexually empowered. Bella isn’t shy — and she loves fulfilling fantasies with a smile.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750701427/WhatsApp_Image_2025-06-23_at_22.48.53_cef07a12_irhg3u.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750701427/WhatsApp_Image_2025-06-23_at_22.48.53_b6233f18_zeq9c9.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750701426/WhatsApp_Image_2025-06-23_at_22.48.53_2717bce0_kbpkfp.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750701426/WhatsApp_Image_2025-06-23_at_22.48.53_5a521fd9_z2wdxe.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750701427/WhatsApp_Image_2025-06-23_at_22.48.54_5a5e51d9_nw1ywf.jpg"
    ],
    services: ["Wild Roleplay", "Fetish-Friendly", "Party Escort","Naughty Companion","After-Hours Sessions"],
    location: "New kingston",
    availability: "Evening Preferred",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567893",
      telegram: "@midnightqueens",
      phone: "+1234567893"
    }
  },
  {
    id: 8,
    name: "Selena",
    age: 23,
    shortDescription: "Graceful and seductive with a sensual touch and a mind full of fantasies.",

    fullDescription: "Selena is the embodiment of sensuality—elegant, magnetic, and endlessly alluring. She has a soft voice, a sharp mind, and a seductive nature that will pull you into her world of intimacy and passion. With a love for deep conversation, fine wine, and physical connection, Selena is perfect for gentlemen who crave a refined yet provocative companion. Ideal for romantic evenings, private getaways, or satisfying unspoken desires.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875578/WhatsApp_Image_2025-06-25_at_21.46.32_80a0e06e_vgptn6.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875578/WhatsApp_Image_2025-06-25_at_21.46.33_d084db91_gqdoy5.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875578/WhatsApp_Image_2025-06-25_at_21.46.33_50b434c2_bteufk.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875578/WhatsApp_Image_2025-06-25_at_21.46.32_1e61f6bc_ipswuy.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875578/WhatsApp_Image_2025-06-25_at_21.46.32_3aff2c3b_qlbauy.jpg"
    ],
    services: ["Luxury Dinner Dates ", "Overnight Stays", "Kinky Play Sessions","Fantasy Fulfillment"],
    location: "Miami",
    availability: "Evening Preferred",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567893",
      telegram: "@midnightqueens",
      phone: "+1234567893"
    }
  },

   {
    id: 9,
    name: " Nyra",
    age: 23,
    shortDescription: "Soft on the outside, wild underneath — Nyra is a fantasy you’ll never forget.",

    fullDescription: "Nyra is a captivating blend of elegance and eroticism. With her velvety voice, sensual curves, and teasing smile, she knows how to drive desire without saying a word. She’s a natural flirt who loves exploring fantasies, pampering her partner, and creating deep, unforgettable pleasure. Whether you crave intimate connection or raw passion, Nyra will leave you breathless.",
    profilePhoto: "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875589/WhatsApp_Image_2025-06-25_at_21.54.21_b6d47c3c_ve4cfc.jpg",
    additionalPhotos: [
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875589/WhatsApp_Image_2025-06-25_at_21.54.22_2a35cc1e_gzy9fl.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875589/WhatsApp_Image_2025-06-25_at_21.54.22_d5b54f40_q18t9d.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875589/WhatsApp_Image_2025-06-25_at_21.54.22_b3b52f99_elo08t.jpg",
      "https://res.cloudinary.com/dcnkyxvga/image/upload/v1750875590/WhatsApp_Image_2025-06-25_at_21.54.23_1bd75906_ypilke.jpg"
    ],
    services: ["Erotic Massage", "Sensual GFE", "Fantasy Roleplay","Private Dinner Companion","Passionate Overnights"],
    location: "Rio",
    availability: "Evening Preferred",
    isPremium: false,
    contactInfo: {
      whatsapp: "",
      telegram: "@midnightqueens",
      phone: ""
    }
  },
];

// Helper functions to manage profiles
export const getProfiles = () => profiles;

export const getProfileById = (id) => profiles.find(p => p.id === parseInt(id));

export const addProfile = (profileData) => {
  const newId = Math.max(...profiles.map(p => p.id), 0) + 1;
  const newProfile = {
    id: newId,
    ...profileData
  };
  profiles.push(newProfile);
  return newProfile;
};

export const updateProfile = (id, profileData) => {
  const index = profiles.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...profileData };
    return profiles[index];
  }
  return null;
};

export const deleteProfile = (id) => {
  const index = profiles.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    const deletedProfile = profiles[index];
    profiles.splice(index, 1);
    return deletedProfile;
  }
  return null;
};

// Export the profiles array as default for backward compatibility
export { profiles };