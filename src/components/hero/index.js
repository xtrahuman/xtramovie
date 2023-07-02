const HeroSection = ({children,backgroundUrl}) => {
  const mystyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundColor: "DodgerBlue",
    width: "100%",
    height: "700px",
    padding: "40px 0",
    backgroundPosition: "right center",
    fontFamily: "Arial",
    position: "relative",
    backgroundSize: "cover",
  };
  return (
    <div className="">
      <header style={mystyle}>
        {children}
        <div className="w-full absolute top-0 bottom-0 bg-[#000] opacity-80"></div>
      </header>
    </div>
  );
};

export default HeroSection;
