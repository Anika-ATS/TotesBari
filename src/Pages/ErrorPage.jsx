import { Link, useRouteError } from "react-router-dom";
import B2 from "../assets/img/404_page_cover.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${B2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className=" text-7xl font-extrabold mb-8">
            Error {status || 404}
          </h1>
          <p className="lg:text-3xl">{error?.message}</p>
          {/* <button className="btn btn-primary">Get Started</button>
           */}
          <button className="btn bg-red-500 text-white mt-8">
            <Link to="/">HomePage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
