import Starrating from "./components/Starrating/Starrating";

export default function Home() {
  return (
    <main >
      <h2 className="mx-4 my-4 text-3xl font-bold">Leave a review</h2>
      <Starrating title="safety" description="testing the component" ratingValue={5}/>
      <Starrating title="communication" description="testing the component" ratingValue={2}/>

    </main>
  );
}
