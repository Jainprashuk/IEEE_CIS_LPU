import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import ExpertTeam from "./team/page";
import ConferenceCard from "@/components/event/page";
import Contact from "@/components/Contact";
import OurTeam from "./team/page";
import Teamcomponent from "@/components/Team";
import AboutSectionThree from "@/components/About/aboutsectionthree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Brands />
      <AboutSectionThree/>
      <Features/>
      <AboutSectionTwo/>
      <Teamcomponent/>
      <Contact/>
    </>
  );
}
