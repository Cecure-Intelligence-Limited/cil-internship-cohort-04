import Nav from './Nav';

const Header = () => {
  return (
    <div className="header  text-white w-full bg-[#343a40] h-fit ">
      <header className="max-w-[1140px]  m-auto flex justify-between p-2">
        <div className="p-2">
          <h1> Contact Manager</h1>
        </div>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
