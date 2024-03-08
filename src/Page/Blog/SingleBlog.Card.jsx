import { Link } from "react-router-dom";

const SingleBlogCard = ({ blogData }) => {
  // console.log(serviceData);
  const { _id, title, date, article, imageUrl } = blogData || {};
  return (
    <>
      <Link to={`/blogDetails/${_id}`}>
        <div className="rounded-lg flex flex-col lg:flex-row gap-5 drop-shadow-xl">
          <div className="flex-1">
            <img
              className="rounded-l-lg rounded-r-none w-full"
              src={imageUrl}
              alt="Alternative Image"
            />
          </div>
          <div className="flex-1 p-4 text-center md:text-left">
            <h3 className="text-xl font-bold  mb-3">{title}</h3>
            <h2 className="my-3 text-lg font-semibold">{date}</h2>
            <p className="text-sm">{article}</p>
            {/* <p className="text-sm">{_id}</p> */}
          </div>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default SingleBlogCard;
