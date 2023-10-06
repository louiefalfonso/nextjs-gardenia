/* eslint-disable @next/next/no-css-tags */
import BlogSection from "./components/BlogSection";
import BorderBreak from "./components/BorderBreak";
import CountingSection from "./components/CountingSection";
import DoubleSection from "./components/DoubleSection";
import GrowingSection from "./components/GrowingSection";
import MainSlider from "./components/MainSlider";
import ServiceSection from "./components/ServiceSection";
import SignupSection from "./components/SignupSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import WorkerSection from "./components/WorkerSection";



export default function Home() {
  return (
    <>
      <MainSlider/>
      <ServiceSection/>
      <SignupSection/>
      <GrowingSection/>
      <CountingSection/>
      <TeamSection/>
      <BorderBreak/>
      <WorkerSection/>
      <TestimonialSection/>
      <BlogSection/>
      <DoubleSection/>
    </>
  )
}
