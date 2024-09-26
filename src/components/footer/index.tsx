import Link from "next/link";
import { Logo } from "../logo";
import { IconBrandGithub, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Logo size={40} />
              <span className="ml-2 text-2xl font-bold text-white">1Browser</span>
            </Link>
            <p className="mt-4 text-sm">
              Your All in 1Browser - The future of intelligent and open information consumption
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-white transition">Download</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="https://twitter.com/1browser" className="text-gray-400 hover:text-white transition">
              <IconBrandTwitter size={24} />
            </a>
            <a href="https://github.com/1browser" className="text-gray-400 hover:text-white transition">
              <IconBrandGithub size={24} />
            </a>
            <a href="https://youtube.com/@1browser" className="text-gray-400 hover:text-white transition">
              <IconBrandYoutube size={24} />
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} 1Browser. All rights reserved.</p>
            <div className="mt-2 flex justify-center md:justify-start space-x-4 text-xs">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
