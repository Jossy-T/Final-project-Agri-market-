import { Sprout, Mail, Phone, MapPin, } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="logo-link" style={{justifyContent:"center"}}>
              <Sprout className="leaf" />
              <span className="agri-market">AgriMarket</span>
            </div>

            <p className="footer-text">
              Connecting farmers directly with clients, eliminating middlemen and ensuring fair pricing. 
              Fresh produce, transparent transactions, better income for farmers.
            </p>

            <div className="footer-socialmedia">
              <a href="#" className="social-media"><FaFacebook/>  Facebook</a>
              <a href="#" className="social-media"><FaTwitter/>  Twitter</a>
              <a href="#" className="social-media"><FaInstagram/>  Instagram</a>
            </div>
          </div>


          {/* Quick Links */}

          {/*<div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-primary transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-primary transition-colors">Join Us</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            {/* <h3 className="footer-h3">Contact Us</h3> */}
            <div className="footer-contact">

              <div className="part">
                <Mail className="type" />
                <span className="text">info@agrimarket.com</span>
              </div>

              <div className="part">
                <Phone className="type" />
                <span className="text">+1 (555) 123-4567</span>
              </div>

              <div className="part">
                <MapPin className="type" />
                <span className="text">123 Farm Street, Agriculture City</span>
              </div>
            </div>

          </div>


        </div>

        <div className="footer-rights">
          <p className="footer-p">&copy; 2024 AgriMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
