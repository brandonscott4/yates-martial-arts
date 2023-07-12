function Instructors() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" py-20 w-full flex flex-col justify-center items-center bg-sky-100">
          <h2 className="text-4xl mb-20 font-semibold underline">
            Meet our instructors
          </h2>
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3">
            <figure>
              <img src="/portrait.jpeg" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luke Yates</h2>
              <p>1st Dan</p>
              <div className="card-actions justify-end">
                <button className="btn border border-black">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 w-full flex justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3 border">
            <figure>
              <img src="/portrait.jpeg" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luke Yates</h2>
              <p>1st Dan</p>
              <div className="card-actions justify-end">
                <button className="btn border border-black">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-20 w-full flex justify-center bg-sky-100">
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3">
            <figure>
              <img src="/portrait.jpeg" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luke Yates</h2>
              <p>1st Dan</p>
              <div className="card-actions justify-end">
                <button className="btn border border-black">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
