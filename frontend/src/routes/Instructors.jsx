function Instructors() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" py-20 w-full flex justify-center bg-sky-100">
          <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/3">
            <figure>
              <img src="/portrait.jpeg" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luke Yates</h2>
              <p>1st Dan</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
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
                <button className="btn btn-primary">Learn More</button>
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
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
