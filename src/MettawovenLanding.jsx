import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Star, Heart, Truck, ShieldCheck, ArrowRight, Instagram, Facebook, Mail, RefreshCcw, MapPin, Phone, Calendar, Package, Gift, CheckCircle, XCircle } from 'lucide-react';

/* CẤU HÌNH WEBSITE
   ----------------------------------------------------
   1. Amazon Link: Link dẫn về store trên Amazon.
   2. Views: Ứng dụng quản lý chuyển trang bằng biến state 'currentView'.
*/

const AMAZON_STORE_URL = "https://www.amazon.com/s?me=AZNWZALXIIIK6&marketplaceID=ATVPDKIKX0DER"; 

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
  const [currentView, setCurrentView] = useState('home'); // home, story, process, contact, shipping, returns
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
            <h3 className="text-2xl font-serif font-bold">Design & Color Mapping</h3>
            <p className="text-stone-600 leading-relaxed">
              It starts with your image. Our artists in Da Nang don't just "print" it. They use specialized software to map your photo's colors to our 6-color yarn palette. Every pixel becomes a specific combination of colored threads (Red, Blue, Gold, Green, Black, White).
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
          
          <h3 className="text-xl font-bold text-stone-900 mt-8">Production Time</h3>
          <p>Because every blanket is woven to order (not printed off a shelf), please allow <strong>2-4 business days</strong> for production. During peak holiday seasons (Christmas, Mother's Day), production may take up to 5 business days.</p>

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

      {/* Products */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
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
              { q: "How do I order?", a: "Simply click 'Shop on Amazon' to customize and order directly via Amazon for the best experience." },
              { q: "Is the image printed?", a: "No! Your image is woven into the blanket using colored cotton yarns. It will never fade or crack." },
              { q: "Can I wash the blanket?", a: "Yes. Machine wash cold, tumble dry low. They get softer with every wash." },
              { q: "Shipping time?", a: "Production takes 2-4 days. Shipping takes 3-5 days within the US." }
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
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 text-xl font-serif text-stone-900 animate-in fade-in slide-in-from-top-10 duration-300">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer">Shop on Amazon</a>
            <button onClick={() => navigateTo('process')}>The Process</button>
            <button onClick={() => navigateTo('story')}>Our Story</button>
            <button onClick={() => navigateTo('contact')}>Contact</button>
            <button onClick={() => navigateTo('shipping')}>Shipping Policy</button>
            <button onClick={() => navigateTo('returns')}>Return Policy</button>
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
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3 cursor-pointer">
              <li><a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Visit Amazon Store</a></li>
              <li><button onClick={() => navigateTo('shipping')} className="hover:text-white transition">Shipping Policy</button></li>
              <li><button onClick={() => navigateTo('returns')} className="hover:text-white transition">Return Policy</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">US Office & Warehouse</h4>
            <address className="not-italic leading-relaxed">
              1001 S. Main St. STE 600<br/>
              Kalispell, MT 59901<br/>
              United States
            </address>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Artist & Media Dept</h4>
            <address className="not-italic leading-relaxed">
              215 Nguyen Sinh Sac St<br/>
              Da Nang City<br/>
              Vietnam
            </address>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Mettawoven. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <span className="text-xs uppercase tracking-widest text-stone-600 mr-2">Available on</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603 182" className="h-6 w-auto">
              <path fill="#FF9900" d="M374.00,142.15 C338.69,168.29 287.27,182.00 243.20,182.00 C181.27,182.00 125.57,158.96 83.25,120.75 C79.96,117.75 82.89,113.63 86.84,115.97 C132.42,142.43 189.04,158.36 247.60,158.36 C286.83,158.36 329.92,150.19 369.71,133.29 C375.61,130.75 380.57,137.21 374.00,142.15"/>
              <path fill="#FF9900" d="M387.15,127.07 C382.79,121.47 357.50,124.43 346.14,125.79 C342.73,126.19 342.21,123.23 345.26,121.11 C365.44,106.87 399.07,111.07 402.84,115.71 C406.61,120.39 401.85,154.11 382.95,170.07 C380.10,172.47 377.38,171.19 378.66,168.03 C382.83,157.51 391.55,132.71 387.15,127.07"/>
              <path fill="#FFFFFF" d="M346.70,20.59 L346.70,6.35 C346.70,4.27 348.26,2.91 350.14,2.91 L410.82,2.91 C412.78,2.91 414.34,4.31 414.34,6.35 L414.34,18.67 C414.30,20.63 412.62,23.19 409.66,27.27 L378.06,72.19 C389.62,71.91 401.82,73.59 412.30,79.51 C414.58,80.79 415.22,82.71 415.42,84.67 L415.42,99.87 C415.42,101.87 413.22,104.19 410.90,102.95 C392.54,93.23 368.02,92.23 347.78,103.07 C345.66,104.23 343.42,101.95 343.42,99.95 L343.42,85.51 C343.42,83.27 343.46,79.27 345.70,75.95 L382.42,23.55 L350.22,23.55 C348.26,23.55 346.70,22.19 346.70,20.15 L346.70,20.59 Z"/>
              <path fill="#FFFFFF" d="M124.90,105.55 L107.06,105.55 C105.26,105.43 103.82,104.07 103.70,102.35 L103.70,6.55 C103.70,4.59 105.38,3.03 107.42,3.03 L124.02,3.03 C125.86,3.11 127.34,4.55 127.46,6.31 L127.46,19.43 L127.82,19.43 C132.14,7.23 140.42,1.55 152.26,1.55 C164.26,1.55 172.02,7.23 177.06,19.43 C181.34,7.23 191.34,1.55 202.66,1.55 C210.78,1.55 219.70,5.03 225.10,12.47 C231.26,20.83 229.98,32.75 229.98,43.23 L229.94,102.07 C229.94,104.03 228.26,105.55 226.22,105.55 L208.42,105.55 C206.50,105.43 204.98,103.91 204.98,102.07 L204.98,51.59 C204.98,47.27 205.38,36.43 204.26,32.35 C202.50,25.63 197.82,23.75 191.86,23.75 C186.82,23.75 181.54,27.07 179.22,32.35 C176.90,37.63 177.14,46.51 177.14,51.59 L177.14,102.07 C177.14,104.03 175.46,105.55 173.42,105.55 L155.62,105.55 C153.66,105.43 152.18,103.91 152.18,102.07 L152.14,51.59 C152.14,39.39 154.06,23.51 139.06,23.51 C123.90,23.51 124.50,38.95 124.50,51.59 L124.50,102.07 C124.50,104.03 122.82,105.55 120.78,105.55 L124.90,105.55 Z"/>
              <path fill="#FFFFFF" d="M468.70,1.55 C496.82,1.55 512.02,23.51 512.02,52.35 C512.02,80.15 495.18,101.55 468.70,101.55 C441.14,101.55 426.10,79.59 426.10,51.31 C426.10,22.87 441.30,1.55 468.70,1.55 Z M468.86,19.99 C454.02,19.99 453.06,39.95 453.06,52.15 C453.06,64.39 452.82,98.91 468.70,98.91 C484.42,98.91 485.22,77.35 485.22,64.55 C485.22,56.07 484.86,45.79 482.18,37.79 C479.90,30.87 475.42,19.99 468.86,19.99 Z"/>
              <path fill="#FFFFFF" d="M553.46,105.55 L535.70,105.55 C533.78,105.43 532.26,103.91 532.26,102.07 L532.22,6.23 C532.38,4.43 533.98,3.03 535.86,3.03 L552.30,3.03 C553.94,3.11 555.30,4.23 555.70,5.75 L555.70,20.75 L556.06,20.75 C561.26,7.79 568.26,1.55 581.22,1.55 C590.06,1.55 598.70,4.67 604.26,13.39 C609.46,21.39 609.46,34.55 609.46,44.31 L609.46,102.51 C609.22,104.23 607.66,105.55 605.82,105.55 L587.90,105.55 C586.22,105.43 584.82,104.15 584.62,102.51 L584.62,50.55 C584.62,38.71 586.14,23.27 571.66,23.27 C566.58,23.27 561.90,26.63 559.42,31.71 C556.26,38.07 555.82,44.39 555.82,50.55 L555.82,102.07 C555.78,104.03 554.06,105.55 552.06,105.55 L553.46,105.55 Z"/>
              <path fill="#FFFFFF" d="M307.54,59.59 C307.54,66.11 307.70,71.59 304.50,77.39 C301.90,82.11 297.62,85.07 292.90,85.07 C286.38,85.07 282.58,80.15 282.58,72.87 C282.58,58.55 295.30,55.87 307.54,55.87 L307.54,59.59 Z M331.58,105.27 C330.14,106.55 328.06,106.67 326.38,105.75 C318.74,99.47 317.34,96.47 313.26,90.67 C301.34,102.87 292.94,106.55 277.34,106.55 C258.82,106.55 244.50,95.19 244.50,72.31 C244.50,54.27 254.30,41.67 268.78,35.51 C281.30,30.03 298.78,29.11 307.54,28.07 L307.54,26.23 C307.54,22.87 307.78,18.91 305.86,16.03 C304.18,13.47 300.86,12.39 297.98,12.39 C292.62,12.39 287.86,15.15 286.70,20.87 C286.46,22.11 285.54,23.31 284.30,23.39 L267.02,21.51 C265.90,21.27 264.66,20.35 264.98,18.63 C268.90,0.00 285.74,0.00 300.22,0.00 C307.62,0.00 317.30,2.16 323.06,8.31 C330.46,15.39 329.74,24.87 329.74,34.91 L329.74,63.19 C329.74,70.35 332.70,73.51 335.50,77.47 C336.54,78.95 336.78,80.71 335.42,81.87 C331.94,84.83 325.70,90.27 322.30,93.43 L331.58,105.27 Z"/>
              <path fill="#FFFFFF" d="M56.62,59.59 C56.62,66.11 56.78,71.59 53.58,77.39 C50.98,82.11 46.74,85.07 41.98,85.07 C35.46,85.07 31.62,80.15 31.62,72.87 C31.62,58.55 44.34,55.87 56.62,55.87 L56.62,59.59 Z M80.66,105.27 C79.22,106.55 77.14,106.67 75.46,105.75 C67.82,99.47 66.42,96.47 62.34,90.67 C50.42,102.87 42.02,106.55 26.42,106.55 C7.90,106.55 0.00,95.19 0.00,72.31 C0.00,54.27 3.38,41.67 17.86,35.51 C30.38,30.03 47.86,29.11 56.62,28.07 L56.62,26.23 C56.62,22.87 56.86,18.91 54.94,16.03 C53.26,13.47 49.94,12.39 47.06,12.39 C41.70,12.39 36.94,15.15 35.78,20.87 C35.54,22.11 34.62,23.31 33.38,23.39 L16.10,21.51 C14.98,21.27 13.74,20.35 14.06,18.63 C17.98,0.00 34.82,0.00 49.30,0.00 C56.70,0.00 66.38,2.16 72.14,8.31 C79.54,15.39 78.82,24.87 78.82,34.91 L78.82,63.19 C78.82,70.35 81.78,73.51 84.58,77.47 C85.62,78.95 85.86,80.71 84.50,81.87 C81.02,84.83 74.78,90.27 71.38,93.43 L80.66,105.27 Z"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MettawovenLanding;