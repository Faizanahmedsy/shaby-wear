import {
  AboutSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/modules";
import { Categories, HeroV2 } from "@/components/modules/landing";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <Categories />
    </>
  );
}
