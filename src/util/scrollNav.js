
/**
 * 
 * @param {*} ref reference to where the page should scroll (using useRef hook)
 */
const scrollNav = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };
  
export default scrollNav;