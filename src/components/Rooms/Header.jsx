import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House"
        subtitle="Sidemen, Indonesia"
      ></Heading>
      <div className="w-full md:h-[60] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://i.ibb.co/wW1HbQH/pexels-jason-boyd-3209049.jpg"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
