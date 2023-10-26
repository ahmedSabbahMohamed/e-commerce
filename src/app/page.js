import BoomboxCard from "@/components/BoomboxCard";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import ThisMonth from "@/components/ThisMonth";
import Today from "@/components/Today";

export default function Home() {
  return (
    <>
      <Hero />
      <Today />
      <Categories />
      <ThisMonth />
      <BoomboxCard />
      <Products />
      <Featured />
      <Services />
    </>
  )
}
