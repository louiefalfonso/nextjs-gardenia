import BorderBreak from "./components/BorderBreak";
import CountingSection from "./components/CountingSection";
import GrowingSection from "./components/GrowingSection";
import MainSlider from "./components/MainSlider";
import ServiceSection from "./components/ServiceSection";
import SignupSection from "./components/SignupSection";
import TeamSection from "./components/TeamSection";
import WorkerSection from "./components/WorkerSection";

export default function Home() {
  return (
    <main>
      <MainSlider/>
      <ServiceSection/>
      <SignupSection/>
      <GrowingSection/>
      <CountingSection/>
      <TeamSection/>
      <BorderBreak/>
      <WorkerSection/>
    </main>
  )
}
