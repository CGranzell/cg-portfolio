import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-black';
  const navbarBorder = isTopOfPage ? '' : 'border-b-4';

  return (
    <nav
      className={`${navbarBackground} ${navbarBorder} z-40 w-full fixed top-0 py-6 `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-poppins text-3xl font-bold">CG</h4>
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-poppins text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        )}

        {isOpen && (
          <div className="absolute right-0 top-[6rem] h-screen w-[300px] bg-black border-2 border-white">
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10  text-2xl text-white py-10">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
