import PlaceItem from "./PlaceItem";

const placeList = [
  {
    title: "Are there even Swans in Swanage?",
    placeName: "Swanage",
    countryName: "United Kingdom",
    mainImage:
      "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt98192ae6c3009734/5fd42dfce5f85744d50f3b2a/UK_Swanage_UK_Header.jpg",
    explanation:
      "There is a lovely atmosphere, nice views of the sea and fantastic bars and restaurants!",
  },

  {
    title: "Exploring the Golden Gate City",
    placeName: "San Francisco",
    countryName: "United States",
    mainImage:
      "https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    explanation:
      "Experience the iconic Golden Gate Bridge, vibrant neighborhoods, and delicious cuisine!",
  },

  {
    title: "Discover the Beauty of Cornwall",
    placeName: "Cornwall",
    countryName: "United Kingdom",
    mainImage:
      "https://images.unsplash.com/photo-1571690355594-14a53a3b522a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    explanation:
      "Explore stunning coastlines, picturesque villages, and indulge in Cornwall's rich cultural heritage.",
  },

  {
    title: "Unveiling the Charms of Edinburgh",
    placeName: "Edinburgh",
    countryName: "United Kingdom",
    mainImage:
      "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=681&q=80",
    explanation:
      "Immerse yourself in history, visit Edinburgh Castle, and soak in the vibrant festival atmosphere.",
  },

  {
    title: "Embrace the Dynamic Energy of Berlin",
    placeName: "Berlin",
    countryName: "Germany",
    mainImage:
      "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVybGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    explanation:
      "Discover a city rich in history, art, and culture, and enjoy Berlin's bustling nightlife scene.",
  },
];



function Places(): JSX.Element {
  return (
    <section>
      <>
        <PlaceItem
          title="Are there even Swans in Swanage?"
          placeName="Swanage"
          countryName="United Kingdom"
          mainImage="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt98192ae6c3009734/5fd42dfce5f85744d50f3b2a/UK_Swanage_UK_Header.jpg"
          explanation="There is a lovely atmosphere, nice views of the sea and fantastic bars and restaurants!"
        />

        <PlaceItem
          title="Exploring the Golden Gate City"
          placeName="San Francisco"
          countryName="United States"
          mainImage="https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          explanation="Experience the iconic Golden Gate Bridge, vibrant neighborhoods, and delicious cuisine!"
        />

        <PlaceItem
          title="Discover the Beauty of Cornwall"
          placeName="Cornwall"
          countryName="United Kingdom"
          mainImage="https://images.unsplash.com/photo-1571690355594-14a53a3b522a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          explanation="Explore stunning coastlines, picturesque villages, and indulge in Cornwall's rich cultural heritage."
        />

        <PlaceItem
          title="Unveiling the Charms of Edinburgh"
          placeName="Edinburgh"
          countryName="United Kingdom"
          mainImage="https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=681&q=80"
          explanation="Immerse yourself in history, visit Edinburgh Castle, and soak in the vibrant festival atmosphere."
        />

        <PlaceItem
          title="Embrace the Dynamic Energy of Berlin"
          placeName="Berlin"
          countryName="Germany"
          mainImage="https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVybGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          explanation="Discover a city rich in history, art, and culture, and enjoy Berlin's bustling nightlife scene."
        />
      </>
    </section>
  );
}
export default Places;
