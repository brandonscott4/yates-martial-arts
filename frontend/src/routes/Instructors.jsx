import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Instructors() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" py-20 w-full flex flex-col justify-center items-center bg-sky-100">
          <Fade triggerOnce>
            <h1 className="font-bold text-2xl lg:text-4xl mb-12">
              MEET OUR INSTRUCTORS
            </h1>
          </Fade>
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3">
            <figure>
              <img
                src="/portrait.jpeg"
                alt="Headshot of instructor Luke Yates"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Luke Yates</h3>
              <p>Sensei</p>
              <div className="card-actions justify-end">
                <Link to="/instructor/luke-yates">
                  <button className="btn border border-gray-400 hover:border-gray-400">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 w-full flex justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3 border">
            <figure>
              <img
                src="/portrait.jpeg"
                alt="Headshot of instructor Vicky Yates"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Vicky Yates</h3>
              <p>Sensei</p>
              <div className="card-actions justify-end">
                <Link to="/instructor/vicky-yates">
                  <button className="btn border border-gray-400 hover:border-gray-400">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-20 w-full flex justify-center bg-sky-100">
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3">
            <figure>
              <img
                src="/portrait.jpeg"
                alt="Headshot of instructor Lucy Yates"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Lucy Yates</h3>
              <p>Sensei</p>
              <div className="card-actions justify-end">
                <Link to="/instructor/lucy-yates">
                  <button className="btn border border-gray-400 hover:border-gray-400">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
