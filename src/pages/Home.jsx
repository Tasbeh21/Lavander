import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
export default function Home() {
     const categories = [
    {
      title: "Roses",
      image:
        "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
    },
    {
      title: "Bouquets",
      image:
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    },
    {
      title: "Tulips",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    },
    {
      title: "Seasonal Flowers",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero/>
    <section className="categories">
        <SectionTitle
          subtitle="Explore Our Collection"
          title="Shop By Category"
        />

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
