/* eslint-disable react/prop-types */
const Avatar = ({ email }) => {
  // Generate a random background color
  const randomColor = () => {
    const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#93C5FD"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Get the first letter of the email
  const firstLetter = email.charAt(0).toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center w-10 h-10 m-1"
      style={{ backgroundColor: randomColor() }}
    >
      <p className="text-white text-xl text-center mt-1 font-bold">
        {firstLetter}
      </p>
    </div>
  );
};

export default Avatar;
