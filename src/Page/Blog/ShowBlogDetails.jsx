import { useLoaderData, useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";

const ShowBlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const theBlog = blogs.find((blog) => blog.id == id);
  return <BlogDetailsCard key={theBlog.id} blog={theBlog}></BlogDetailsCard>;
};

export default ShowBlogDetails;
