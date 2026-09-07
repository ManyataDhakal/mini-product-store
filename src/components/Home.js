import { useNavigate } from "react-router-dom";
import heroImage from '../assests/mini-store-hero-image.png';
function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-label">Welcome to MiniStore</p>

            <h1>
              Everything You Need, <span>All in One Place.</span>
            </h1>

            <p className="hero-description">
              Discover quality products for everyday life. Shop beauty,
              furniture, groceries and more.
            </p>

            <button className="shop-btn" onClick={() => navigate("/products")}>
              Shop Now
            </button>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="MiniStore shopping products" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
