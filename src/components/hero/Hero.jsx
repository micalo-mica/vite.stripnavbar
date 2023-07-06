import { useGlobalContext } from "../../context/NavContext";
import "./hero.css";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      Hero
    </div>
  );
};

export default Hero;
