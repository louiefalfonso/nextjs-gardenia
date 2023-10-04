import GrowingSection from "./components/GrowingSection";
import MainSlider from "./components/MainSlider";
import ServiceSection from "./components/ServiceSection";
import SignupSection from "./components/SignupSection";

export default function Home() {
  return (
    <main>
      <MainSlider/>
      <ServiceSection/>
      <SignupSection/>
      <GrowingSection/>
    </main>
  )
}
