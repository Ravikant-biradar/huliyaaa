import Footer from "@/components/Footer/Footer";
import Middlecomponent from "@/components/Middlecomponent/Middlecomponent";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <Middlecomponent />
        <Footer />
      </section>
    </>
  );
}
