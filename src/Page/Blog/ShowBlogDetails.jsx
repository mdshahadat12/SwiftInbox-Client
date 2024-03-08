import { useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";
import Loader from "../../Components/Loader";

const ShowBlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = Loader(`/blog/${id}`, "singleBlog");

  return <BlogDetailsCard key={id} blog={blog}></BlogDetailsCard>;
};

export default ShowBlogDetails;
