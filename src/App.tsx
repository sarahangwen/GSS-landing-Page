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
    name: 'QSSN PaaS',
    description: 'Cloud Hosting & CI/CD - Localized, edge-optimized hosting that replaces AWS, Google Cloud, or Azure with instant GitHub deployment.',
    features: ['One-Click GitHub Deploy', 'Live in Under 2 Minutes', 'Local UGX Billing via PesaPal', 'Edge-Optimized Performance'],
    link: 'https://qssnpaas.gss-tec.com',
    icon: '☁️'
  },
  {
    id: 2,
    name: 'QEMAIL Smart Connect',
    description: 'Email API powered by BYOG (Bring Your Own Gmail) technology. Sovereign alternative to Twilio and SendGrid with full data control.',
    features: ['High-Speed Email Delivery', 'Data Sovereignty by Design', 'BYOG Technology', 'Affordable Pricing'],
    link: 'https://smartconnect.gss-tec.com',
    icon: '📧'
  },
  {
    id: 3,
    name: 'Gmail AI Node',
    description: 'AI-driven inbox automation that responds to customer emails 24/7. Trained on your business knowledge with no foreign servers involved.',
    features: ['24/7 AI Email Responses', 'Custom Business Training', 'Data Sovereignty', 'Gmelius Alternative'],
    link: 'https://open.gss-tec.com',
    icon: '🤖'
  },
  {
    id: 4,
    name: 'GSS-TEC AI Node Gateway',
    description: 'Complete AI infrastructure with dedicated AI node, developer SDK, and native WhatsApp Business integration for sovereign AI automation.',
    features: ['Sovereign AI Infrastructure', 'WhatsApp Business Integration', 'Developer SDK', 'Local UGX Pricing'],
    link: 'https://node.gss-tec.com/gss',
    icon: '🧠'
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
            <p>Sovereign, affordable solutions built for African businesses</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <h3>Data Sovereignty</h3>
              <p>Your data never leaves Uganda. Full control and ownership of your business data with no foreign servers storing your information</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Lightning-Fast Deployment</h3>
              <p>Deploy live in under 2 minutes. Connect GitHub, click deploy, and your project is live instantly with edge-optimized performance</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Local Billing in UGX</h3>
              <p>No credit cards required. Pay in Uganda Shillings via PesaPal—affordable pricing without foreign exchange complications</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Automation</h3>
              <p>24/7 AI automation for emails, support, and business workflows trained on your own knowledge base</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>WhatsApp Business Integration</h3>
              <p>Connect AI directly to your WhatsApp number for instant customer responses on the channel they already use</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔓</div>
              <h3>Open Technology & SDKs</h3>
              <p>Bring Your Own Gmail (BYOG), developer-friendly SDKs, and open APIs for seamless integration with your existing systems</p>
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
                <li><a href="https://qssnpaas.gss-tec.com" target="_blank" rel="noopener noreferrer">QSSN PaaS</a></li>
                <li><a href="https://smartconnect.gss-tec.com" target="_blank" rel="noopener noreferrer">QEMAIL Smart Connect</a></li>
                <li><a href="https://open.gss-tec.com" target="_blank" rel="noopener noreferrer">Gmail AI Node</a></li>
                <li><a href="https://node.gss-tec.com/gss" target="_blank" rel="noopener noreferrer">GSS-TEC AI Node Gateway</a></li>
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
