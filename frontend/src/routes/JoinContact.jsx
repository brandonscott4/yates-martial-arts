function JoinContact() {
  return (
    <>
      <div className=" py-20 w-full bg-sky-100 flex flex-col justify-center items-center">
        <h2 className="text-4xl mb-12 font-semibold underline">
          Get in contact
        </h2>
        <form className="bg-white w-4/5 sm:w-3/4 lg:w-1/2 2xl:w-2/6 mx-8 px-8 sm:px-20 py-12 shadow-xl rounded-2xl">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Jane Doe"
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="mobile"
          >
            Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="mobile"
            type="email"
            placeholder="07123456789"
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="message"
          >
            Message
          </label>
          <textarea className="resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-40"></textarea>
          <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md mt-8">
            Submit
          </button>
        </form>
      </div>

      <div className=" py-20 w-full flex justify-center items-center">
        <div className="">
          <h3 className="font-semibold text-3xl text-center">Or</h3>
          <div className="divider"></div>
          <p className="text-xl">
            <b>Email: </b>yatesmartialarts@gmail.com
          </p>
          <p className="text-xl mt-3">
            <b>Mobile: </b>07332993032
          </p>
        </div>
      </div>
    </>
  );
}

export default JoinContact;
