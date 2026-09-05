import { useNavigate } from 'react-router-dom';
function Home(){

    const navigate = useNavigate();

    return(
        <main>
            <section className="hero">
                <div className="hero-content">
                    <p>Welcome to MiniStore</p>

                    <h1>Everything You Need,
                        All in One Place.
                    </h1>

                    <p>
                        Discover quality products for everyday life.
                        Shop beauty, furniture, groceries and more.
                    </p>

                    <button onClick={() => navigate("/products")}>Shop Now</button>
                </div>
            </section>
        </main>
    )
}
export default Home;