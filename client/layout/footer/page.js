"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import AnimatedFooter from "./footer-animate/page";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#030b15] border-t text-white">
        <div className="container mx-auto px-4 ">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="/paragongroup-logo.png"
                  alt="Paragon Group"
                  height={100}
                  width={100}
                  className="object-contain"
                />
              </Link>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://facebook.com" target="_blank">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://instagram.com" target="_blank">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/components/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/career"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/news"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    Paragon House, 5 Mohakhali C/A, Dhaka 1212, Bangladesh
                  </span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+88 02 9882107-8</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@paragongroup-bd.com</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="" />

          {/* Footer Bottom */}
          <AnimatedFooter/>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground font-semibold text-[#2772b8]">
          © {currentYear} Paragon Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

