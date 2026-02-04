import RandomRaccoon from "./getRandomRaccoon";

export default function Home() {
  return (
    <>
      <div
        id="start-container"
        className="w-screen h-screen flex justify-center items-center"
      >
        <h1 className=" text-xl">Skrolla ner </h1>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="w-full h-screen flex wrap flex-col gap-5 items-center justify-center">
        <h1 className="text-xl">Elektra,</h1>
        <p className="text-xs text-center p-5">
          Alla hjärtans dag grejen kändes gjord. Och sen har jag redan frågat om
          du vill vara min den helgen. Så här har du en knapp som ger dig en
          slumpad tvättbjörn. Puss.
        </p>
        <div id="raccoon-container" className="w-60 h-60">
          <RandomRaccoon />
        </div>
      </div>
    </>
  );
}
