import Short from "./lib/components/short/short";

function App() {
  return (
    <main className=" flex justify-center w-full h-screen">
      <div className="  h-full  md:px-2 snap-mandatory snap-y overflow-y-auto  ">
        <Short />
        <Short />
        <Short />
      </div>
    </main>
  );
}

export default App;
