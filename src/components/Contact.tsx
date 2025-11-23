import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-boxing-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for more information about our programs and facilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
            <div className="bg-boxing-charcoal border border-primary/20 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="Paphos Boxing Club" className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <h3 className="text-2xl font-bebas">Paphos Boxing Club</h3>
                  <p className="text-primary text-sm">Cyprus Training Academy</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Paphos, Cyprus</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+357 99 123456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">info@paphosboxingclub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-boxing-charcoal border border-primary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bebas mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-boxing-dark border border-primary/30 hover:bg-primary hover:border-primary transition-all"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-boxing-dark border border-primary/30 hover:bg-primary hover:border-primary transition-all"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-4 text-center">
                * Update with your actual social media links
              </p>
            </div>

            </div>

            {/* Location Map */}
            <div className="bg-boxing-charcoal border border-primary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bebas mb-6">Find Us</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">Paphos, Cyprus</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Visit us at our state-of-the-art facility in the heart of Paphos
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed - Replace with actual address/location */}
              <div className="w-full h-64 rounded-lg overflow-hidden border border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.5!2d32.4!3d34.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzAwLjAiTiAzMsKwMjQnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paphos Boxing Club Location"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">
                * Update the map embed URL with your exact location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-primary/20">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Paphos Boxing Club. All rights reserved.</p>
          <p className="mt-2">Cyprus Paphos | Training Academy | Body Art | Est. 2017</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
