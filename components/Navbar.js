'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { SearchDialog } from './SearchDialog';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between md:justify-center">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse md:absolute md:right-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">سايبر بلوج</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                الرئيسية
              </Link>
              <Link href="/blog" className="text-foreground/80 hover:text-foreground transition-colors">
                المدونة
              </Link>
              <Link href="/tutorials" className="text-foreground/80 hover:text-foreground transition-colors">
                الدروس
              </Link>
              <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                اتصل بي
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4 md:absolute md:left-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">تبديل السمة</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">تبديل السمة</span>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-3">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  href="/blog"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  المدونة
                </Link>
                <Link
                  href="/tutorials"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  الدروس
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  اتصل بي
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}