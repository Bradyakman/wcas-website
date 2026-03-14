import { Link } from "wouter";
import wcasLogoWhite from "@assets/image_1771877140413.png";

export function Footer() {
  return (
    <footer id="bottom-band" className="bg-[#04112b] text-white pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="lg:w-1/4">
            <img src={wcasLogoWhite} alt="WCAS" className="h-10" />
          </div>

          <div className="flex flex-1 gap-16 lg:gap-24">
            <div>
              <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">New York</h4>
              <div className="text-white/60 text-sm leading-relaxed space-y-1">
                <p>599 Lexington Ave. Suite 1800</p>
                <p>New York, NY 10022</p>
                <p className="pt-2">+1 (212) 893-9500</p>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-6 uppercase tracking-wider text-sm text-white/80">San Francisco</h4>
              <div className="text-white/60 text-sm leading-relaxed space-y-1">
                <p>580 California St. Suite 1700</p>
                <p>San Francisco, CA 94104</p>
                <p className="pt-2">+1 (415) 375-4110</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Welsh, Carson, Anderson & Stowe. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="https://www.linkedin.com/company/welsh-carson-anderson-&-stowe/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Limited Partner Login</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
