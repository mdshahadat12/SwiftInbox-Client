import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BlogDetailsCard = ({ blog }) => {
  const { title, date, article, imageUrl } = blog || {};
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Blog</title>
      </Helmet>
      <div className="p-10 flex md:flex-row justify-around flex-col-reverse">
        <div className="md:w-2/3 w-full">
          <div className="pb-4">
            SwiftInbox /{" "}
            <Link to="/blog">
              <span className="underline">Blog</span>
            </Link>
          </div>
          <hr />
          <h3 className="mt-10 text-3xl font-black my-5">
            <span className="font-bold text-xl "> </span> {title}
          </h3>
          <h3 className="my-5">
            {" "}
            <span className="font-semibold text-lg mr-5 ">Date: {date}</span>
          </h3>
          <img
            className="w-full rounded-md"
            src={imageUrl}
            alt="Alternative Image"
          />

          <div className="my-4">
            <h4 className="font-bold text-base">Overview:</h4>
            <p className="text-xs">{article}</p>
          </div>
        </div>
        <div>
          <div>
            <div className="my-2 pb-3 flex">
              <img
                src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                className="h-9 mr-1"
              />
              <span className="self-center text-2xl font-extrabold whitespace-nowrap">
                SwiftInbox
              </span>
            </div>
            <hr />
            <div className="p-3 flex flex-col gap-5">
              <Link to="/">
                <span className="hover:underline hover:text-blue-500">
                  Home
                </span>
              </Link>
              <Link to="/about">
                <span className="hover:underline hover:text-blue-500">
                  About Us
                </span>
              </Link>
              <Link to="/contact">
                <span className="hover:underline hover:text-blue-500">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsCard;
