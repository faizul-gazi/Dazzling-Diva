import { useState } from 'react';
import { Navigation, Mail, Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "info@dazzingdiva.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-brand-purple text-white/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">
          
          {/* Logo & Contact Column (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <a 
                href="/" 
                className="text-3xl font-normal tracking-wide text-brand-yellow font-aclonica hover:opacity-95 transition-opacity inline-block"
              >
                Dazzling Diva
              </a>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-white/90">
              {/* Address */}
              <div className="flex items-start gap-3">
                <Navigation size={18} className="text-white/60 shrink-0 mt-0.5 rotate-[45deg]" />
                <span>29 SE 2nd Ave, Miami Florida 33131, United States</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60 shrink-0" />
                <div className="flex items-center gap-2 group">
                  <span className="text-white/95">{email}</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"
                    aria-label="Copy email address"
                    title="Copy email"
                  >
                    {copied ? <Check size={14} className="text-green-400 animate-scale" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
              
              {/* Phone */}
              <div className="text-lg md:text-xl font-bold text-white tracking-wide mt-2">
                (+92) 3942 7879
              </div>
            </div>
          </div>

          {/* Shopping Column */}
          <div>
            <h4 className="text-brand-yellow font-bold tracking-wider text-xs uppercase mb-4">
              Shopping
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#wishlist" className="hover:text-brand-yellow transition-colors duration-200">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#cart" className="hover:text-brand-yellow transition-colors duration-200">
                  Cart
                </a>
              </li>
              <li>
                <a href="#category" className="hover:text-brand-yellow transition-colors duration-200">
                  Shop by Category
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="text-brand-yellow font-bold tracking-wider text-xs uppercase mb-4">
              Information
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#track-order" className="hover:text-brand-yellow transition-colors duration-200">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-brand-yellow transition-colors duration-200">
                  Corporate Enquires
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-yellow transition-colors duration-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h4 className="text-brand-yellow font-bold tracking-wider text-xs uppercase mb-4">
              Account
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#account" className="hover:text-brand-yellow transition-colors duration-200">
                  My Account
                </a>
              </li>
              <li>
                <a href="#orders" className="hover:text-brand-yellow transition-colors duration-200">
                  My Orders
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-white/10 w-full"></div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 text-sm">
          
          {/* Copyright */}
          <div className="text-white/60 order-3 lg:order-1 text-center lg:text-left">
            Copyright © <span className="text-[#FF6B6B] font-semibold">Orbixon</span> 2026. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 order-1 lg:order-2 text-white/80">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Twitter"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M23.95 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 order-2 lg:order-3 text-white/70 font-medium">
            <a href="#terms" className="hover:text-brand-yellow transition-colors duration-200">
              Teams & Condition
            </a>
            <a href="#privacy" className="hover:text-brand-yellow transition-colors duration-200">
              Privacy & Policy
            </a>
            <a href="#refund" className="hover:text-brand-yellow transition-colors duration-200">
              Refund Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
