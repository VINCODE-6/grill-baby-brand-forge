import { Navbar } from "@/components/grill/Navbar";
import { Hero } from "@/components/grill/Hero";
import { Menu } from "@/components/grill/Menu";
import { WhyUs } from "@/components/grill/WhyUs";
import { About } from "@/components/grill/About";
import { Reviews } from "@/components/grill/Reviews";
import { Location } from "@/components/grill/Location";
import { Order } from "@/components/grill/Order";
import { Footer } from "@/components/grill/Footer";
import { StickyOrder } from "@/components/grill/StickyOrder";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Grill Baby Parow",
            image: "https://grillbaby.co.za/og.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "262 Voortrekker Rd",
              addressLocality: "Parow East",
              addressRegion: "Cape Town",
              postalCode: "7501",
              addressCountry: "ZA",
            },
            telephone: "+27870770429",
            servesCuisine: ["South African", "Grill", "Takeaway"],
            priceRange: "R100–R200",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "3.5", reviewCount: "163" },
          }),
        }}
      />
      <Navbar />
      <Hero />
      <Menu />
      <WhyUs />
      <About />
      <Reviews />
      <Location />
      <Order />
      <Footer />
      <StickyOrder />
    </main>
  );
};

export default Index;
