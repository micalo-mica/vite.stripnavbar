import { useGlobalContext } from "../../context/NavContext";
import "./hero.css";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      <div className="heroContainer">
        <h2 className="title">
          The propose of this project is to build strip navbar and sidebar
        </h2>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
      </div>
    </div>
  );
};

export default Hero;
