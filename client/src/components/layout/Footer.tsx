import { Link } from "wouter";
import wcasLogoWhite from "@assets/image_1771877140413.png";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="lg:w-1/4">
            <img src={wcasLogoWhite} alt="WCAS" className="h-10 mb-8" />
            <h4 className="font-heading font-semibold mb-4 uppercase tracking-wider text-sm text-white/80">Offices</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>New York</li>
              <li>San Francisco</li>
            </ul>
          </div>

          <div className="flex flex-1 gap-16 lg:gap-24">
            <div>
              <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">Focus Areas</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Technology</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Healthcare</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Approach</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Firm</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">News & Perspectives</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Investor Portal</a></li>
              </ul>
            </div>
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
