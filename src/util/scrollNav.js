
/**
 * 
 * @param {*} ref reference to where the page should scroll (using useRef hook)
 */
const scrollNav = (ref, offset = 100) => {
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: "smooth",
    });
  };
  
export default scrollNav;