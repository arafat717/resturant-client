import Banner from "@/components/Banner/Banner";
import ClientHome from "@/components/Home/ClientHome";

export default async function Home() {
  const res = await fetch(`http://localhost:5000/api/food`);
  const data = await res.json();

  const section = await fetch(`http://localhost:5000/api/category`);
  const sectionData = await section.json();
  return (
    <>
      <Banner></Banner>
      <ClientHome foodData={data.data} categoryData={sectionData.data} />
    </>
  );
}
