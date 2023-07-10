import karateWoman from "../../public/karate-woman.jpg";
function Home() {
  return (
    <>
      <div className="relative">
        <img
          src={karateWoman}
          alt="My Image"
          className=" h-96 lg:h-[600px] w-full object-cover grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <p className="text-white text-2xl">WELCOME TO</p>
          <p className="text-white font-bold text-4xl sm:text-6xl mt-4">
            Yates Martial Arts
          </p>
          <p className="text-white text-s sm:text-lg text-center mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium nostrum, rem.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
