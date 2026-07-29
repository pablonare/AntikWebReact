import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Hero from './hero/Hero';
import { Helmet } from "react-helmet-async";

function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop | Antik Surf Club</title>
        <meta
          name="description"
          content="Shop the Antik Surf Club selection of surf-inspired products, gear and essentials."
        />
        <link rel="canonical" href="https://antiksurf.com/shop" />
      </Helmet>

      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default Shop;    