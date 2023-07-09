import Navbar from "../components/Navbar";

function Root() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-col flex-grow justify-center items-center">
          <p>Content</p>
        </div>
      </div>
    </>
  );
}

export default Root;
