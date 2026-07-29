import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Hero from './hero/Hero';
import Content from './content/Content';
import { Helmet } from "react-helmet-async";

function Events() {
  return (
    <>
      <Helmet>
        <title>Events | Antik Surf Club</title>
        <meta
          name="description"
          content="Antik Surf Club events, gatherings and collaborations around surf culture, people and places."
        />
        <link rel="canonical" href="https://antiksurf.com/events" />
      </Helmet>

      <Header />
      <Hero />
      <Content/>
      <Footer />
    </>
  );
}

export default Events;