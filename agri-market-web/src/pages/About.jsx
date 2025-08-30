<<<<<<< HEAD
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span className="highlight">AgriMarket</span></h1>
        <p>
          AgriMarket is a <strong>revolutionary platform</strong> connecting farmers directly with buyers. 
          We remove middlemen, ensure fair prices for farmers, and deliver fresh, high-quality produce straight to your doorstep.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Why Use <span className="highlight">AgriMarket</span>?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Direct Connection</h3>
            <p>Connect directly with farmers and buyers without intermediaries.</p>
          </div>
          <div className="feature-card">
            <h3>Quality Assurance</h3>
            <p>All products are verified for freshness and top quality.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Fresh produce delivered directly from farms within 24 hours.</p>
          </div>
          <div className="feature-card">
            <h3>Support Local</h3>
            <p>Empower local farmers and strengthen community livelihoods.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To transform agriculture through transparency and direct connections 
            between producers and consumers, improving both livelihoods and food quality. 
            We create a sustainable ecosystem where farmers thrive and buyers enjoy premium produce.
=======
import React from 'react'
import { Users, ShieldCheck, TrendingUp, Heart, Target, Award } from 'lucide-react'

export default function About(){
  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Direct Connection",
      description: "We connect farmers directly with clients, eliminating middlemen and ensuring fair pricing for everyone."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Transparent Pricing",
      description: "All transactions are transparent with clear pricing, ensuring trust between farmers and clients."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Better Income",
      description: "Farmers earn better income through direct sales, while clients get fresh produce at fair prices."
    }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Community First",
      description: "We believe in building strong relationships between farmers and local communities."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Quality Focus",
      description: "We ensure only the freshest, highest quality produce reaches our clients."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Fair Trade",
      description: "We promote fair trade practices that benefit both farmers and consumers."
    }
  ]

  const stats = [
    { number: "500+", label: "Active Farmers" },
    { number: "2000+", label: "Happy Clients" },
    { number: "10k+", label: "Products Sold" },
    { number: "50+", label: "Cities Covered" }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former agricultural economist with 15 years of experience in sustainable farming."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Tech entrepreneur passionate about using technology to solve agricultural challenges."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Supply chain expert ensuring smooth operations between farmers and clients."
    }
  ]

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About AgriMarket</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            AgriMarket is an innovative web and mobile platform that connects farmers directly with clients, 
            eliminating middlemen and ensuring fair pricing.
>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* How It Works Section */}
      <section className="about-how">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <span className="step-number">1</span>
            <h3>Register</h3>
            <p>Sign up as a farmer or buyer to start listing or ordering products.</p>
          </div>
          <div className="how-step">
            <span className="step-number">2</span>
            <h3>Browse & Order</h3>
            <p>Explore fresh produce and order directly from farmers nearby.</p>
          </div>
          <div className="how-step">
            <span className="step-number">3</span>
            <h3>Get Delivered</h3>
            <p>Receive fresh produce delivered safely to your doorstep.</p>
=======
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We aim to revolutionize the agricultural marketplace by creating a transparent, efficient, 
              and fair platform that benefits both farmers and consumers. Our platform allows farmers to 
              list their fresh produce online, while clients can browse, order, and receive products easily 
              and transparently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Support Farmers</h3>
                <p className="text-gray-600">Help farmers earn better income by offering direct sales opportunities</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fresh Access</h3>
                <p className="text-gray-600">Provide clients with easy access to fresh, high-quality agricultural products</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                <p className="text-gray-600">Ensure transparency, efficiency, and trust in the agricultural market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AgriMarket?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center card-hover">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers and clients who trust AgriMarket for their agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Join as Farmer
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Start Shopping
            </a>
>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default About;
=======
  )
}

>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
