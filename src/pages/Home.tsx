// import DragCarousel from "../components/Home/DragCarousel";
import AnimatedCard from "../components/Home/AnimatedCard";
import DragCarousel2 from "../components/Home/DragCarousel2";
import GridIntro from "../components/Home/GridIntro";
import Hero from "../components/Home/Hero";
import TransformBusiness from "../components/Home/TransformBusiness";
import UnlockPotential from "../components/Home/UnlockPotential";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <GridIntro />
      <DragCarousel2 />
      <TransformBusiness />
      <AnimatedCard />
      <div className=" bg-[var(--bg-color)] text-[var(--text-color)] ">
        <WhyChooseUs />
      </div>
      <UnlockPotential />
    </div>
  );
};
export default Home;
