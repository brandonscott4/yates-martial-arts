import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative">
        <img
          src="/karate-woman.jpg"
          alt="My Image"
          className=" h-96 lg:h-[600px] w-full object-cover grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <p className="text-white text-2xl">WELCOME TO</p>
          <p className="text-white font-bold text-4xl sm:text-6xl mt-3 underline decoration-4 underline-offset-4 decoration-sky-300">
            Yates Martial Arts
          </p>
          <p className="text-white text-s sm:text-lg text-center mt-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium nostrum, rem.
          </p>

          <NavLink to="/contact">
            <button className="btn bg-sky-300 w-36 mt-4 hover:bg-sky-400 border-0">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-wrap bg-sky-100 gap-24 justify-center py-20">
        <div className="w-64 bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="font-bold text-xl">About Us</h3>
          <div className="divider"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            facilis totam accusantium laudantium aut? Dolorem minima vitae
            tempora nam odio consequuntur ipsa, cupiditate in adipisci minus
            fugit aliquid, nostrum quae!
          </p>
        </div>

        <div className=" w-64 bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="font-bold text-xl">About Us</h3>
          <div className="divider"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            facilis totam accusantium laudantium aut? Dolorem minima vitae
            tempora nam odio consequuntur ipsa, cupiditate in adipisci minus
            fugit aliquid, nostrum quae!
          </p>
        </div>

        <div className="w-64 bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="font-bold text-xl">About Us</h3>
          <div className="divider text-xl"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            facilis totam accusantium laudantium aut? Dolorem minima vitae
            tempora nam odio consequuntur ipsa, cupiditate in adipisci minus
            fugit aliquid, nostrum quae!
          </p>
        </div>
      </div>

      <div className="py-16 text-center">
        <p className="italic">
          The ultimate aim of Karate lies not in victory nor defeat, but in the
          perfection of the character of its participants.” –{" "}
          <b>Gichin Funakoshi</b>
        </p>
      </div>
    </>
  );
}

export default Home;
