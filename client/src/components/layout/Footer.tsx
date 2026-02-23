import { Link } from "wouter";
import wcasLogoWhite from "@assets/image_1771877140413.png";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src={wcasLogoWhite} alt="WCAS" className="h-10 mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Leading in Healthcare and Technology investments through thought leadership, culture, and results.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">Focus Areas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Technology</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Healthcare</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Approach</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Firm</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">News & Perspectives</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Investor Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">Locations</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>New York</li>
              <li>San Francisco</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Welsh, Carson, Anderson & Stowe. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}