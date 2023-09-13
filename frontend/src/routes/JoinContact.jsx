import { useEffect, useState } from "react";

function JoinContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    mobileNo: false,
    message: false,
    errorMsg: {
      error: false,
      msg: "",
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "mobileNo") {
      setMobileNo(value);
    } else {
      setMessage(value);
    }

    setFormError((prevFormError) => ({
      ...prevFormError,
      [id]: false,
    }));
  };

  useEffect(() => {
    if (formError.errorMsg.error) {
      if (
        !formError.name &&
        !formError.email &&
        !formError.mobileNo &&
        !formError.message
      ) {
        setFormError((prevFormError) => ({
          ...prevFormError,
          errorMsg: {
            error: false,
            msg: "",
          },
        }));
      }
    } else {
      if (
        formError.name ||
        formError.email ||
        formError.mobileNo ||
        formError.message
      ) {
        setFormError((prevFormError) => ({
          ...prevFormError,
          errorMsg: {
            error: true,
            msg: "Please enter the required field(s)",
          },
        }));
      }
    }
  }, [formError]);

  const handleSubmit = (e) => {
    if (name === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        name: true,
      }));
    }
    if (email === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        email: true,
      }));
    }
    if (mobileNo === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        mobileNo: true,
      }));
    }
    if (message === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        message: true,
      }));
    }

    e.preventDefault();
  };

  return (
    <>
      <div className=" py-20 w-full bg-sky-100 flex flex-col justify-center items-center">
        <h2 className="text-4xl mb-12 font-semibold underline">
          Get in contact
        </h2>
        <form
          className="bg-white w-4/5 sm:w-3/4 lg:w-1/2 2xl:w-2/6 mx-8 px-8 sm:px-20 py-12 shadow-xl rounded-2xl"
          onSubmit={handleSubmit}
        >
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.name ? "border-red-500" : ""
            }`}
            id="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.email ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="mobileNo"
          >
            Mobile
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.mobileNo ? "border-red-500" : ""
            }`}
            id="mobileNo"
            type="tel"
            placeholder="07123456789"
            value={mobileNo}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleChange}
            className={`resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-40 ${
              formError.message ? "border-red-500" : ""
            } `}
          ></textarea>
          <p
            className={`text-red-500 font-semibold mt-3${
              formError.errorMsg.error ? "" : "hidden"
            }`}
          >
            {formError.errorMsg.msg}
          </p>
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
