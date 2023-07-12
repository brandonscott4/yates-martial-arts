function ClassesPrices() {
  return (
    <>
      <div className=" py-20 w-full bg-sky-100">
        <h2 className="font-semibold text-3xl mb-10 underline text-center">
          Dartford Dojo
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row gap-10 mx-5 items-center md:items-stretch">
            <img src="/googlemap.PNG" alt="map" className=" w-4/5 md:w-1/2" />
            <div className="bg-white rounded-2xl w-4/5 md:w-1/3 shadow-xl flex flex-col items-center justify-center">
              <div className="text-left p-10 text-lg font-medium md:text-xl">
                <p>Random Sports Centre</p>
                <p>Dartford</p>
                <p>100 Street Road</p>
                <p>DA1 8NG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassesPrices;
