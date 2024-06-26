import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center flex-row gap-4 md:gap-0">
            <Logo />
            <div>search</div>
            <div>menu</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
