import React from "react";
import {
  Banner,
  Categories,
  HeroV2,
  TopSelling,
  WhyUs,
} from "@/components/modules/landing";

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <Categories />
      <Banner />
      <TopSelling />
      <WhyUs />
    </>
  );
}
