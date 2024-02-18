import Heading from "../Heading/Heading";

const Header = ({roomData}) => {
  return (
    <>
      <Heading
        title={roomData.title}
        subtitle={roomData.subtitle}
      ></Heading>
      <div className="w-full md:h-[60] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={roomData.image}
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
