import React from 'react'
import { Sprout, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AgriMarket</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting farmers directly with clients, eliminating middlemen and ensuring fair pricing. 
              Fresh produce, transparent transactions, better income for farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-primary transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-primary transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">info@agrimarket.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">123 Farm Street, Agriculture City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 AgriMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
