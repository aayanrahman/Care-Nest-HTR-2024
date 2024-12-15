import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">CARE NEST</h1>
                <h2 className="home-subtitle">Warmth you can trust</h2>
            </header>

            <section className="home-overview">
                <h3 className="home-vision-title">Our Vision</h3>
                <p className="home-vision-text">
                    At <strong>CareNest</strong>, we aim to revolutionize neonatal care by providing
                    affordable and accessible support to low-resource settings. Our innovative device
                    and intuitive dashboard empower parents and healthcare providers with life-saving
                    tools, ensuring every baby receives the warmth and care they deserve.
                </p>
            </section>

            <section className="home-features">
                <h3 className="features-title">Why Choose Us?</h3>
                <div className="features-grid">
                    <div className="feature">
                        <h4>Affordable Solutions</h4>
                        <p>Providing cost-effective tools to support neonatal care worldwide.</p>
                    </div>
                    <div className="feature">
                        <h4>Innovative Design</h4>
                        <p>Combining advanced technology with user-friendly interfaces.</p>
                    </div>
                    <div className="feature">
                        <h4>Accessible for All</h4>
                        <p>Ensuring care reaches even the most underserved communities.</p>
                    </div>
                </div>
            </section>

            <footer className="home-footer">
                <p>© 2024 CareNest. Empowering Neonatal Care Globally.</p>
            </footer>
        </div>
    );
};

export default Home;
