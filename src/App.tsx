import './App.css'
import logoSvg from './assets/gss-logo.svg'

interface Product {
  id: number
  name: string
  description: string
  features: string[]
  link: string
  icon: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'GSS Node',
    description: 'Advanced node management and orchestration system for building scalable distributed networks.',
    features: ['Node Management', 'Network Orchestration', 'Real-time Monitoring', 'High Availability'],
    link: 'https://node.gss-tec.com/gss',
    icon: '⚙️'
  },
  {
    id: 2,
    name: 'SmartConnect',
    description: 'Intelligent connectivity platform enabling seamless integration across your infrastructure.',
    features: ['Smart Integration', 'API Management', 'Real-time Sync', 'Multi-Protocol Support'],
    link: 'https://smartconnect.gss-tec.com/',
    icon: '🔗'
  },
  {
    id: 3,
    name: 'GSS Open',
    description: 'Open-source platform for collaborative development and community-driven innovation.',
    features: ['Open Source', 'Community Driven', 'Extensible', 'Free to Deploy'],
    link: 'https://open.gss-tec.com/',
    icon: '🚀'
  }
]

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-wrapper">
            <img src={logoSvg} alt="GSS System Innovators Logo" className="logo-image" />
            <span className="logo-text">GSS System Innovators</span>
          </div>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Enterprise Solutions for the Modern Era</h1>
          <p className="hero-subtitle">
            Discover powerful tools designed to scale your business and accelerate growth
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="products-container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Choose the right solution for your needs</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p className="card-description">{product.description}</p>
                
                <div className="features-list">
                  <h4>Key Features</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <span className="check-mark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={product.link} target="_blank" rel="noopener noreferrer" className="card-link">
                  Access Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="section-header">
            <h2>Why Choose GSS</h2>
            <p>Industry-leading solutions with proven results</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Enterprise Security</h3>
              <p>Industry-standard security practices with end-to-end encryption and compliance certifications</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized for speed and efficiency with minimal latency and maximum throughput</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Scale</h3>
              <p>Deploy and operate globally with distributed infrastructure and local redundancy</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuous development with cutting-edge features and regular updates</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <h3>Expert Support</h3>
              <p>24/7 dedicated support team ready to help you succeed</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Deep insights and comprehensive reporting to drive data-driven decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you!</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>General Inquiries</h3>
              <p><a href="mailto:info@gss-tec.com">info@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💰</div>
              <h3>Donations</h3>
              <p><a href="mailto:donations@gss-tec.com">donations@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🤝</div>
              <h3>Partnerships</h3>
              <p><a href="mailto:partnership@gss-tec.com">partnership@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">👔</div>
              <h3>Human Resources</h3>
              <p><a href="mailto:hr@gss-tec.com">hr@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">👤</div>
              <h3>Sales</h3>
              <p><a href="mailto:sarah@gss-tec.com">sarah@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">👤</div>
              <h3>Management</h3>
              <p><a href="mailto:Sylvia@gss-tec.com">Sylvia@gss-tec.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">👤</div>
              <h3>Operations</h3>
              <p><a href="mailto:esther@gss-tec.com">esther@gss-tec.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Start exploring our solutions today and experience the difference</p>
          <a href="#products" className="btn btn-primary btn-large">View All Products</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>GSS System Innovators</h4>
              <p>Enterprise solutions for modern businesses</p>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="https://node.gss-tec.com/gss" target="_blank" rel="noopener noreferrer">GSS Node</a></li>
                <li><a href="https://smartconnect.gss-tec.com/" target="_blank" rel="noopener noreferrer">SmartConnect</a></li>
                <li><a href="https://open.gss-tec.com/" target="_blank" rel="noopener noreferrer">GSS Open</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#products">Products</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 GSS System Innovators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
