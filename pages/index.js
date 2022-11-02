import Head from "next/head";
import NavBar from "../Components/NavBar";
import NutritionFilter from "../Components/NutritionFilter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tropical Nutrition App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <NutritionFilter />
    </div>
  );
}
