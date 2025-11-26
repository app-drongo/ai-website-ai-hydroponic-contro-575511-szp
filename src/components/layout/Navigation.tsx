'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  X,
  Cpu,
  Settings,
  Brain,
  TrendingUp,
  Wrench,
  FileText,
  Phone,
  Layers,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logo: 'HydroAI',
  tagline: 'Smart Greenhouse Control',
  menuItems: [
    { label: 'System Overview', href: '#hero', icon: 'Layers' },
    { label: 'Architecture', href: '#features', icon: 'Cpu' },
    { label: 'AI Technology', href: '#process', icon: 'Brain' },
    { label: 'Benefits', href: '#benefits', icon: 'TrendingUp' },
    { label: 'Implementation', href: '#services', icon: 'Settings' },
    { label: 'Case Studies', href: '#case-studies', icon: 'FileText' },
    { label: 'Contact', href: '#contact', icon: 'Phone' },
    { label: 'Features', href: '#features', icon: 'Wrench' },
    { label: 'Services', href: '#services', icon: 'Settings' },
  ],
  ctaText: 'Get Demo',
  ctaHref: '#contact',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    const icons = {
      Layers,
      Cpu,
      Brain,
      TrendingUp,
      Settings,
      Wrench,
      FileText,
      Phone,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Settings;
    return <IconComponent className="w-4 h-4" />;
  };

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="navigation">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span data-editable="logo" className="text-xl font-bold text-foreground">
                  {config.logo}
                </span>
                <span
                  data-editable="tagline"
                  className="text-xs text-muted-foreground hidden sm:block"
                >
                  {config.tagline}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {config.menuItems.slice(0, 6).map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  data-editable-href={`menuItems[${idx}].href`}
                  data-href={item.href}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {getIcon(item.icon)}
                  <span data-editable={`menuItems[${idx}].label`} className="ml-2">
                    {item.label}
                  </span>
                </Button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleCTAClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:inline-flex"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden text-foreground">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-background text-foreground border-border w-80"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-border">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <span data-editable="logo" className="text-lg font-bold">
                            {config.logo}
                          </span>
                          <p data-editable="tagline" className="text-sm text-muted-foreground">
                            {config.tagline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex-1 py-6">
                      <div className="space-y-2">
                        {config.menuItems.map((item, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            onClick={() => handleNavClick(item.href)}
                            data-editable-href={`menuItems[${idx}].href`}
                            data-href={item.href}
                            className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {getIcon(item.icon)}
                            <span data-editable={`menuItems[${idx}].label`} className="ml-3">
                              {item.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Mobile CTA */}
                    <div className="pt-6 border-t border-border">
                      <Button
                        onClick={handleCTAClick}
                        data-editable-href="ctaHref"
                        data-href={config.ctaHref}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <span data-editable="ctaText">{config.ctaText}</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
