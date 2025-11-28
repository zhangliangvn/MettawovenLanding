import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Star, Heart, Truck, ShieldCheck, ArrowRight, Instagram, Facebook, Mail, RefreshCcw, MapPin, Phone, Calendar, Package, Gift, CheckCircle, XCircle } from 'lucide-react';

/* CẤU HÌNH WEBSITE
   ----------------------------------------------------
   1. Amazon Link: Link dẫn về store trên Amazon.
   2. Views: Ứng dụng quản lý chuyển trang bằng biến state 'currentView'.
*/

const AMAZON_STORE_URL = "https://www.amazon.com/shops/mettawoven"; 

// Custom Icons
const PinterestIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <path d="M8 12a4 4 0 1 0 8 0"></path> 
    <path d="M8 20l4-9"></path>
    <path d="M10.7 14c.43-.9 1.6-1.2 2.3-.6.66.57.55 1.6-.06 2.22-.6.62-1.45.33-1.63-.44-.26-1.1 1.05-2.18 2.22-1.78 1.95.66 1.45 3.58-.5 4.67-1.07.6-2.55.08-3.1-1.05" />
  </svg>
);

const TikTokIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const MettawovenLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // home, story, process, contact, shipping, returns, privacy, terms, aboutus
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // --- SUB-COMPONENTS FOR PAGES ---

  const StoryPage = () => (
    <div className="pt-24 pb-20 bg-stone-900 text-stone-300 min-h-screen">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Heart className="mx-auto text-amber-700 mb-6" size={48} />
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    More Than Threads.<br/> It's a Feeling.
                </h1>
                <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="space-y-8 text-lg leading-relaxed font-light text-stone-200">
                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                        In a world where we swipe past hundreds of photos a day, we often forget what it feels like to truly <em>hold</em> a memory. We wanted to change that.
                    </p>
                    <p>
                        <strong>Mettawoven</strong> was born from a desire to slow down. "Metta" is the Pali word for loving-kindness—a sincere wish for the welfare and happiness of others. We wanted to translate that abstract feeling into something tangible, something you can wrap around your shoulders on a cold night.
                    </p>
                    <p>
                        It’s not just about putting a picture on a blanket. It’s about preserving a moment in time, thread by thread, so that it lasts as long as the memory itself.
                    </p>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img
                        src="/story-1.webp"
                        alt="Weaving Connection"
                        className="relative rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition duration-700 w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-800 rounded-full flex items-center justify-center border-4 border-stone-700 shadow-xl z-10">
                        <span className="font-serif text-white text-center text-sm px-2 italic">Woven with<br/>Metta</span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="order-2 md:order-1 relative">
                    <img
                        src="/story-2.webp"
                        alt="Artisan Quality"
                        className="rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition duration-700 w-full"
                    />
                </div>
                <div className="order-1 md:order-2 space-y-8 text-lg leading-relaxed font-light text-stone-200">
                    <h3 className="text-3xl font-serif text-white">A Tale of Two Worlds</h3>
                    <p>
                        Our journey is a bridge between East and West. It starts with the meticulous artistry in <strong>Da Nang, Vietnam</strong>, where our creative team treats every pixel of your photo with reverence, ensuring the colors map perfectly to our yarns.
                    </p>
                    <p>
                        It ends in the heritage mills of the <strong>USA (Kalispell, Montana)</strong>, where millions of cotton fibers are interlaced to give your story weight and warmth. This collaboration ensures artistic excellence meets American manufacturing quality.
                    </p>
                    <blockquote className="border-l-4 border-amber-700 pl-6 italic text-xl text-white pt-2">
                        "We don't just weave blankets. We weave the warmth of a hug that lasts forever."
                    </blockquote>
                </div>
            </div>
            
            <div className="text-center mt-24">
                <button onClick={() => navigateTo('home')} className="border border-stone-600 text-stone-300 px-8 py-3 rounded-full hover:bg-white hover:text-stone-900 transition duration-300">
                    Back to Collection
                </button>
            </div>
        </div>
    </div>
  );

  const ProcessPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">The Art of Woven Memories</h1>
        <p className="text-lg text-stone-600">From digital pixels to tangible threads, discover how we craft your heirloom.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-20">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
             {/* Updated Designing Image */}
             <img src="/process-design.webp" alt="Design & Color Mapping" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="text-amber-700 font-bold text-6xl opacity-20 font-serif">01</div>
            <h3 className="text-2xl font-serif font-bold">Custom Design & Mockup</h3>
            <p className="text-stone-600 leading-relaxed">
              After you upload your photo or text on Amazon, our artist team in Da Nang gets to work. They don't just "print" your image—they carefully recreate it using specialized software to map your photo's colors to our 6-color yarn palette. We'll send you a mockup for approval before production begins. Not satisfied? We'll revise until you love it!
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
             <img src="/process-weaving.webp" alt="Jacquard Weaving" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="text-amber-700 font-bold text-6xl opacity-20 font-serif">02</div>
            <h3 className="text-2xl font-serif font-bold">Jacquard Weaving</h3>
            <p className="text-stone-600 leading-relaxed">
              The design file is sent to our Jacquard looms in Kalispell, Montana. These massive machines interlace 100% cotton yarns at high speed. The image isn't stamped on top; it emerges from the structure of the fabric itself.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
             <img src="/process-finishing.webp" alt="Hand Finishing" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="text-amber-700 font-bold text-6xl opacity-20 font-serif">03</div>
            <h3 className="text-2xl font-serif font-bold">Hand Finishing</h3>
            <p className="text-stone-600 leading-relaxed">
              Once woven, each blanket is cut and the fringes are hand-finished. We then wash and dry the blanket to lock in the weave and ensure it arrives soft and ready to snuggle.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-20">
        <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition">
          Create Your Masterpiece
        </a>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl text-center mb-12">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin size={18}/> US Office & Warehouse</h3>
              <p className="text-stone-600 text-sm">1001 S. Main St. STE 600<br/>Kalispell, MT 59901, USA</p>
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin size={18}/> Artist Dept</h3>
              <p className="text-stone-600 text-sm">215 Nguyen Sinh Sac St<br/>Da Nang City, Vietnam</p>
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-2"><Mail size={18}/> Email Support</h3>
              <p className="text-stone-600 text-sm">support@mettawoven.com</p>
              <p className="text-xs text-stone-500 mt-1">We typically reply within 24 hours.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="font-serif text-xl mb-4">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Name</label>
                <input type="text" className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-amber-700 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Email</label>
                <input type="email" className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-amber-700 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-amber-700 outline-none"></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-3 rounded font-medium hover:bg-amber-800 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const ShippingPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Shipping Policy</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
          <p>At Mettawoven, we pride ourselves on being one of the few custom woven companies that manufactures and ships directly from the USA. This ensures faster delivery times compared to overseas competitors.</p>
          
          <h3 className="text-xl font-bold text-stone-900 mt-8">Mockup & Approval</h3>
          <p>After you place your order, our artist team will create a custom mockup of your design and send it to you for approval. You can request revisions until you're completely satisfied—we want you to love your blanket!</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Production Time</h3>
          <p>Once you approve your mockup, production begins. Please allow <strong>2-4 business days</strong> for weaving. During peak holiday seasons (Christmas, Mother's Day), production may take up to 5 business days.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Shipping Time</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard US Shipping:</strong> 3-5 business days via USPS or UPS.</li>
            <li><strong>Expedited Shipping:</strong> 2 business days (available at checkout on Amazon).</li>
            <li><strong>International Shipping:</strong> Currently available to Canada and select countries (7-14 business days).</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-8 flex gap-3">
             <Package className="text-amber-700 flex-shrink-0" />
             <div>
               <h4 className="font-bold text-amber-900">Tracking Your Order</h4>
               <p className="text-sm text-amber-800">Once your order ships, you will receive a tracking number via Amazon/Email. Please allow 24 hours for the tracking to update.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReturnPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Return & Refund Policy</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
          <p>We want you to absolutely love your Mettawoven blanket. However, because our products are custom-made specifically for you, we have specific guidelines regarding returns.</p>
          
          <h3 className="text-xl font-bold text-stone-900 mt-8">Defects & Issues</h3>
          <p><strong>We offer a 100% Satisfaction Guarantee on quality.</strong> If your blanket arrives with any of the following issues, we will replace it for FREE or offer a full refund:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The weaving has a structural defect (tears, unraveling).</li>
            <li>The wrong image was woven.</li>
            <li>The product was damaged during shipping.</li>
          </ul>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Change of Mind</h3>
          <p>Due to the personalized nature of the product, we cannot accept returns for "change of mind" or if you uploaded a low-resolution photo that resulted in a blurry weave (though our team tries to catch this before weaving!).</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">How to Request a Return</h3>
          <p>Please contact us at <a href="mailto:support@mettawoven.com" className="text-amber-700 underline">support@mettawoven.com</a> within 30 days of receiving your order. Please include your Order ID and a photo of the issue.</p>
        </div>
      </div>
    </div>
  );

  const PrivacyPolicyPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
          <p><strong>Last updated:</strong> January 2025</p>

          <p>At Mettawoven, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Information We Collect</h3>
          <p>When you place an order through Amazon, we may receive:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your name and shipping address</li>
            <li>Order details and purchase history</li>
            <li>Photos or images you upload for custom products</li>
            <li>Communication records if you contact our support team</li>
          </ul>

          <h3 className="text-xl font-bold text-stone-900 mt-8">How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To fulfill and ship your custom orders</li>
            <li>To communicate with you about your order status</li>
            <li>To provide customer support</li>
            <li>To improve our products and services</li>
          </ul>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Your Photos</h3>
          <p>The photos you upload for custom blankets are used solely for production purposes. We do not share, sell, or use your personal photos for marketing without your explicit consent.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information. All transactions are processed securely through Amazon's payment system.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Third-Party Services</h3>
          <p>Our products are sold through Amazon. When you make a purchase, you are also subject to Amazon's Privacy Policy. We recommend reviewing their policy for complete information.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@mettawoven.com" className="text-amber-700 underline">support@mettawoven.com</a>.</p>
        </div>
      </div>
    </div>
  );

  const TermsOfServicePage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Terms of Service</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
          <p><strong>Last updated:</strong> January 2025</p>

          <p>Welcome to Mettawoven. By using our website and purchasing our products, you agree to the following terms and conditions.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Products & Orders</h3>
          <p>All Mettawoven blankets are custom-made to order. Once production begins, orders cannot be modified or canceled. Please ensure your uploaded image and order details are correct before completing your purchase.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Image Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must own the rights to any images you upload, or have permission to use them</li>
            <li>We reserve the right to refuse any image that violates copyright, contains inappropriate content, or cannot be reproduced with acceptable quality</li>
            <li>Low-resolution images may result in blurry weaves; we recommend high-quality photos for best results</li>
          </ul>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Product Characteristics</h3>
          <p>Our woven blankets are created using a 6-color yarn palette. Due to the nature of jacquard weaving:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Colors in the final product may vary slightly from the original image</li>
            <li>The woven texture creates a unique artistic interpretation of your photo</li>
            <li>This is not a defect but a characteristic of the weaving process</li>
          </ul>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Intellectual Property</h3>
          <p>All content on this website, including logos, text, and images (excluding customer uploads), is the property of Mettawoven and protected by copyright laws.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Limitation of Liability</h3>
          <p>Mettawoven is not liable for any indirect, incidental, or consequential damages arising from the use of our products. Our maximum liability is limited to the purchase price of the product.</p>

          <h3 className="text-xl font-bold text-stone-900 mt-8">Changes to Terms</h3>
          <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
        </div>
      </div>
    </div>
  );

  const AboutUsPage = () => (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8 text-center">About Our Products</h1>

        {/* Product Overview */}
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed mb-16">
          <p className="text-lg">
            Whether you choose to feature a photo or a piece of graphic art, our cozy blankets elevate images into lasting, quality heirlooms. Display them on your wall or use them to cuddle up on the couch. These throw-sized woven blankets are crafted from <strong>100% cotton yarn</strong> with a colorful edge fringe that extends the image.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-stone-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧵</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-2">100% Cotton</h3>
            <p className="text-sm text-stone-600">Made from specially spun fibers that create a strong, smooth fabric perfect for detailed imagery.</p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📷</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-2">Photo Variant</h3>
            <p className="text-sm text-stone-600">Best for photographs and photorealistic imagery. Showcases subtle color gradations and fine details beautifully.</p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-2">Artwork Variant</h3>
            <p className="text-sm text-stone-600">Best for solid, distinct color blocks. Enhances clarity and sharpness in designs with bold, separated colors.</p>
          </div>
        </div>

        {/* Size Guide */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 mb-16">
          <h2 className="font-serif text-2xl mb-6 text-center">Size Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 px-4 text-left font-bold text-stone-900">Dimension</th>
                  <th className="py-3 px-4 font-bold text-stone-900">Small</th>
                  <th className="py-3 px-4 font-bold text-stone-900">Medium</th>
                  <th className="py-3 px-4 font-bold text-stone-900">Large</th>
                </tr>
              </thead>
              <tbody className="text-stone-600">
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-4 text-left font-medium">Size (inches)</td>
                  <td className="py-3 px-4">52" × 37"</td>
                  <td className="py-3 px-4">60" × 50"</td>
                  <td className="py-3 px-4">80" × 60"</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-4 text-left font-medium">Size (cm)</td>
                  <td className="py-3 px-4">132 × 94</td>
                  <td className="py-3 px-4">152 × 127</td>
                  <td className="py-3 px-4">203 × 152</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-left font-medium">Tolerance</td>
                  <td className="py-3 px-4">± 2.5"</td>
                  <td className="py-3 px-4">± 2.5"</td>
                  <td className="py-3 px-4">± 2.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h2 className="font-serif text-2xl mb-6 text-center">Care Instructions</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🧺</div>
              <h4 className="font-bold text-stone-900 mb-1">Machine Wash</h4>
              <p className="text-sm text-stone-600">Cold water (max 30°C/90°F), gentle cycle, mild detergent</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💧</div>
              <h4 className="font-bold text-stone-900 mb-1">Bleach</h4>
              <p className="text-sm text-stone-600">Non-chlorine bleach only, as needed</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌀</div>
              <h4 className="font-bold text-stone-900 mb-1">Tumble Dry</h4>
              <p className="text-sm text-stone-600">Low heat setting recommended</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition inline-flex items-center gap-2">
            <ShoppingBag size={18}/> Shop Now on Amazon
          </a>
        </div>
      </div>
    </div>
  );

  // --- MAIN LANDING PAGE CONTENT ---
  const LandingPage = () => (
    <div>
      {/* Hero */}
      <header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2874&auto=format&fit=crop"
            alt="Woman wrapped in cozy woven blanket"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-in slide-in-from-bottom-8 duration-700">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 opacity-90">Heirloom Quality &middot; Made in USA</p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8">
            Weave Your Memories<br/>
            <span className="italic">Into Warmth.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
            Transform your most cherished photos into premium 100% cotton woven tapestries. Now available directly on Amazon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition shadow-lg flex items-center justify-center gap-2">
              <ShoppingBag size={20}/> Shop on Amazon
            </a>
            <button onClick={() => navigateTo('process')} className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition backdrop-blur-sm">
              See The Process
            </button>
          </div>
        </div>
      </header>

      {/* Trust Signals */}
      <section className="py-12 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-stone-50 rounded-full text-amber-800"><Truck size={24} /></div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide">Prime Shipping</h3>
              <p className="text-xs text-stone-500 mt-1">Available via Amazon</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-stone-50 rounded-full text-amber-800"><ShieldCheck size={24} /></div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide">Quality Guarantee</h3>
              <p className="text-xs text-stone-500 mt-1">100% Cotton</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-stone-50 rounded-full text-amber-800"><Star size={24} /></div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide">5-Star Rated</h3>
              <p className="text-xs text-stone-500 mt-1">10,000+ Customers</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-stone-50 rounded-full text-amber-800"><Heart size={24} /></div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide">Artisan Made</h3>
              <p className="text-xs text-stone-500 mt-1">Woven with Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Shop by Occasion */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold mb-3">Perfect For Every Occasion</h2>
                <p className="text-stone-500">A thoughtful gift that speaks louder than words.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { title: "Weddings", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" },
                    { title: "Pet Memorials", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" },
                    { title: "New Baby", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" },
                    { title: "Anniversaries", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2069&auto=format&fit=crop" }
                ].map((item, idx) => (
                    <a key={idx} href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-lg aspect-square">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                            <span className="text-white font-serif text-xl font-bold tracking-wide">{item.title}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>

      {/* How It Works - Ordering Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">How It Works</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">From your photo to a woven masterpiece in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"></div>

            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">1</div>
                <svg className="w-14 h-14 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Upload Your Photo</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Select your size on Amazon and upload your favorite photo or text design</p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">2</div>
                <svg className="w-14 h-14 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">We Create Your Mockup</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Our artists in Da Nang carefully recreate your design and send you a preview</p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">3</div>
                <svg className="w-14 h-14 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Review & Approve</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Love it? We start weaving! Want changes? We'll revise until you're 100% happy</p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center group">
              <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">4</div>
                <svg className="w-14 h-14 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Woven & Delivered</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Your blanket is woven in the USA and shipped to your door in 5-9 business days</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-700 transition shadow-lg">
              <ShoppingBag size={20}/> Start Your Order
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-stone-50">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">The Collection</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Discover our best-selling woven masterpieces.</p>
        </div>

        {/* Product 1 */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2 relative group overflow-hidden rounded-xl shadow-xl">
             <div className="aspect-[4/3] bg-stone-200">
               <img src="/product-photo-throw.webp" alt="Custom Photo Throw" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
             </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <div className="text-amber-700 font-bold tracking-wider uppercase text-xs mb-2">Best Seller</div>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">The Custom Photo Throw</h3>
            <p className="text-stone-600 leading-relaxed mb-8">
              Far superior to fleece prints. We analyze your photo's colors and translate them into thousands of individual stitches.
            </p>
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition w-fit">
              View on Amazon <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-1/2 relative group overflow-hidden rounded-xl shadow-xl">
             <div className="aspect-[4/3] bg-stone-200">
               <img src="/product-love-letter.webp" alt="Love Letter Blanket" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
             </div>
          </div>
          <div className="lg:w-1/2 lg:pr-10">
            <div className="text-amber-700 font-bold tracking-wider uppercase text-xs mb-2">Trending</div>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">The Love Letter Blanket</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Wrap them in your words. Perfect for handwritten letters, wedding vows, or favorite song lyrics.
            </p>
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-stone-900 text-stone-900 px-8 py-3 rounded-full hover:bg-stone-900 hover:text-white transition w-fit">
              View on Amazon <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* NEW: Why Woven vs Printed Comparison */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-10">Why Woven is Better</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-amber-700">
                    <h3 className="font-serif text-xl font-bold mb-4">Mettawoven (Jacquard)</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2"><CheckCircle size={20} className="text-green-600 shrink-0"/> <span className="text-stone-600">100% Cotton (Soft & Breathable)</span></li>
                        <li className="flex items-start gap-2"><CheckCircle size={20} className="text-green-600 shrink-0"/> <span className="text-stone-600">Image woven with colored yarns</span></li>
                        <li className="flex items-start gap-2"><CheckCircle size={20} className="text-green-600 shrink-0"/> <span className="text-stone-600">Won't fade or crack over time</span></li>
                        <li className="flex items-start gap-2"><CheckCircle size={20} className="text-green-600 shrink-0"/> <span className="text-stone-600">Heirloom quality weight</span></li>
                    </ul>
                </div>
                <div className="bg-stone-200/50 p-8 rounded-xl border border-stone-200 opacity-70">
                    <h3 className="font-serif text-xl font-bold mb-4 text-stone-500">Standard Photo Blankets</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2"><XCircle size={20} className="text-red-400 shrink-0"/> <span className="text-stone-500">100% Polyester (Sweaty feel)</span></li>
                        <li className="flex items-start gap-2"><XCircle size={20} className="text-red-400 shrink-0"/> <span className="text-stone-500">Ink printed on surface</span></li>
                        <li className="flex items-start gap-2"><XCircle size={20} className="text-red-400 shrink-0"/> <span className="text-stone-500">Fades after washing</span></li>
                        <li className="flex items-start gap-2"><XCircle size={20} className="text-red-400 shrink-0"/> <span className="text-stone-500">Thin, cheap feeling</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: Reviews Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-center font-serif text-3xl mb-16">Loved by thousands across America</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", loc: "Austin, TX", text: "I cried when I opened the package. Seeing my late father's smile woven into this blanket means everything to me. Quality is superb." },
            { name: "Mike Ross", loc: "Denver, CO", text: "I was skeptical about the image quality for a woven product, but the detail is impressive. It has a cool vintage look. My wife loves it." },
            { name: "Emily Blunt", loc: "Seattle, WA", text: "Ordered the letter blanket for my anniversary. The cotton is heavy and soft, perfect for our cold winters. Highly recommend!" }
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition">
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-stone-900">{review.name}</p>
                <p className="text-xs text-stone-400 uppercase tracking-wide">{review.loc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline">Read more reviews on Amazon →</a>
        </div>
      </section>

      {/* Story Teaser (Updated to link to Full Story Page) */}
      <section id="about" className="py-24 bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <Heart className="mx-auto text-amber-700 mb-6" size={40} />
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    More Than Threads.<br/> It's a Feeling.
                </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg leading-relaxed font-light">
                    <p><strong>Mettawoven</strong> was born from a desire to slow down. "Metta" is the Pali word for loving-kindness. We wanted to translate that abstract feeling into something tangible.</p>
                    <p>Our journey starts with meticulous artistry in Da Nang, Vietnam, and ends in the heritage mills of the USA, where millions of cotton fibers are interlaced to give your story weight and warmth.</p>
                    <div className="pt-4">
                       <button onClick={() => navigateTo('story')} className="text-white border-b border-amber-700 pb-1 hover:text-amber-500 transition">Read Our Full Story →</button>
                    </div>
                </div>
                <div className="relative">
                    <img src="/story-image.webp" alt="Woven Blanket" className="rounded-lg shadow-2xl opacity-80 hover:opacity-100 transition duration-700" />
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I order?", a: "Select your size on Amazon, upload your photo or text, and place your order. Our artist team will create a custom mockup and send it to you for approval. Once approved, we'll start production. If you're not satisfied, we'll revise until you're happy!" },
              { q: "Is the image printed?", a: "No! Your image is woven into the blanket using 100% cotton yarns. It's part of the fabric itself, so it will never fade, crack, or peel like printed blankets." },
              { q: "What sizes are available?", a: "We offer three sizes: Small (52\"×37\"), Medium (60\"×50\"), and Large (80\"×60\"). All are made from 100% cotton with decorative fringe edges." },
              { q: "Can I wash the blanket?", a: "Yes! Machine wash cold (max 30°C/90°F) on gentle cycle with mild detergent. Tumble dry on low heat. They get softer with every wash." },
              { q: "What's the production time?", a: "After mockup approval, production takes 2-4 business days. Shipping takes 3-5 business days within the US via Amazon." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-stone-200 overflow-hidden">
                <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-5 text-left font-medium text-stone-900 hover:bg-stone-50">
                  {item.q}
                  <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeFaq === idx && <div className="p-5 pt-0 text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="font-sans text-stone-900 bg-[#FDFCF8] selection:bg-stone-200 min-h-screen flex flex-col justify-between">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed w-full z-50 bg-white py-4 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => navigateTo('home')} className="z-50 cursor-pointer">
              <img src="/logo.png" alt="Mettawoven" className="h-10 w-auto" />
            </button>

            <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide text-stone-600">
              <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition">Shop on Amazon</a>
              <button onClick={() => navigateTo('process')} className={`hover:text-amber-700 transition ${currentView === 'process' ? 'text-amber-700 font-bold' : ''}`}>The Process</button>
              <button onClick={() => navigateTo('story')} className={`hover:text-amber-700 transition ${currentView === 'story' ? 'text-amber-700 font-bold' : ''}`}>Our Story</button>
              <button onClick={() => navigateTo('contact')} className={`hover:text-amber-700 transition ${currentView === 'contact' ? 'text-amber-700 font-bold' : ''}`}>Contact</button>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-stone-900">
                <ShoppingBag size={20} />
              </a>
              <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-700 transition">
                Visit Store
              </a>
            </div>

            <div className="md:hidden z-50">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-900">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 text-lg font-serif text-stone-900 animate-in fade-in slide-in-from-top-10 duration-300">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer">Shop on Amazon</a>
            <button onClick={() => navigateTo('process')}>The Process</button>
            <button onClick={() => navigateTo('story')}>Our Story</button>
            <button onClick={() => navigateTo('aboutus')}>About Us</button>
            <button onClick={() => navigateTo('contact')}>Contact</button>
            <div className="border-t border-stone-200 pt-6 flex flex-col items-center space-y-4 text-base text-stone-600">
              <button onClick={() => navigateTo('shipping')}>Shipping Policy</button>
              <button onClick={() => navigateTo('returns')}>Return Policy</button>
              <button onClick={() => navigateTo('privacy')}>Privacy Policy</button>
              <button onClick={() => navigateTo('terms')}>Terms of Service</button>
            </div>
          </div>
        )}
      </nav>

      {/* --- CONTENT RENDERER --- */}
      <main className="flex-grow">
        {currentView === 'home' && <LandingPage />}
        {currentView === 'story' && <StoryPage />}
        {currentView === 'process' && <ProcessPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'shipping' && <ShippingPage />}
        {currentView === 'returns' && <ReturnPage />}
        {currentView === 'privacy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsOfServicePage />}
        {currentView === 'aboutus' && <AboutUsPage />}
      </main>

      {/* --- FOOTER --- */}
      <footer id="footer" className="bg-[#1C1C1C] text-stone-400 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <img src="/logo.png" alt="Mettawoven" className="h-8 w-auto object-contain mb-6" />
            <p className="mb-6 leading-relaxed">
              Weaving your memories into warmth. A premium brand by <strong>Mettagram</strong>.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition bg-stone-800 p-2 rounded-full" title="Instagram"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition bg-stone-800 p-2 rounded-full" title="Facebook"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition bg-stone-800 p-2 rounded-full" title="Pinterest"><PinterestIcon size={18} /></a>
              <a href="#" className="hover:text-white transition bg-stone-800 p-2 rounded-full" title="TikTok"><TikTokIcon size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-3 cursor-pointer">
              <li><a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Visit Amazon Store</a></li>
              <li><button onClick={() => navigateTo('aboutus')} className="hover:text-white transition">About Us</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Policies</h4>
            <ul className="space-y-3 cursor-pointer">
              <li><button onClick={() => navigateTo('shipping')} className="hover:text-white transition">Shipping Policy</button></li>
              <li><button onClick={() => navigateTo('returns')} className="hover:text-white transition">Return Policy</button></li>
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-white transition">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-white transition">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Our Locations</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white text-xs font-semibold mb-1">US Office & Warehouse</p>
                <address className="not-italic leading-relaxed text-sm">
                  1001 S. Main St. STE 600<br/>
                  Kalispell, MT 59901
                </address>
              </div>
              <div>
                <p className="text-white text-xs font-semibold mb-1">Artist & Media Dept</p>
                <address className="not-italic leading-relaxed text-sm">
                  215 Nguyen Sinh Sac St<br/>
                  Da Nang City, Vietnam
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Mettawoven. All rights reserved.</p>
          <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex gap-3 mt-4 md:mt-0 items-center hover:opacity-80 transition">
            <span className="text-xs uppercase tracking-widest text-stone-600">Available on</span>
            <svg viewBox="0 0 76 24" className="h-6 w-auto">
              <text x="0" y="17" fill="#232F3E" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" letterSpacing="-0.5">amazon</text>
              <path d="M35 21 Q50 25 65 21" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <polygon points="63,19 68,21 63,23" fill="#FF9900"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MettawovenLanding;