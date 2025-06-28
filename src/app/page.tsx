import Banner from "@/components/Banner/Banner";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import ClientHome from "@/components/Home/ClientHome";
import TeamSection from "@/components/TeamMember/TeamMember";
import PartnersSection from "../components/PartnersSection/PartnersSection";

export default async function Home() {
  const res = await fetch(`http://localhost:5000/api/food`);
  const data = await res.json();

  const section = await fetch(`http://localhost:5000/api/category`);
  const sectionData = await section.json();
  return (
    <>
      <Banner></Banner>
      <ClientHome foodData={data.data} categoryData={sectionData.data} />
      <CustomerReview></CustomerReview>
      <TeamSection></TeamSection>
      <PartnersSection></PartnersSection>
    </>
  );
}
