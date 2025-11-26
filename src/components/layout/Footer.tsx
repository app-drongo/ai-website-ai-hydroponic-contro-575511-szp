'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'HydroAI Systems',
  tagline: 'Autonomous AI-Driven Climate and Fertigation Control for Smart Greenhouses',
  description:
    'Advanced AI-powered greenhouse automation solutions for precision agriculture and optimal crop yields.',

  // Company section
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Technology', href: '/technology' },
    { label: 'Case Studies', href: '/case-studies' },
  ],

  // Legal section
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Data Security', href: '/security' },
  ],

  // Social section
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  ],

  // Contact info
  contactInfo: {
    email: 'info@hydroai-systems.com',
    phone: '+1 (555) 123-4567',
    address: '123 AgTech Boulevard, Innovation District',
  },

  // Technical specs
  technicalFeatures: [
    'Real-time AI Decision Making',
    '4G/5G Cloud Connectivity',
    'Industrial PLC Integration',
  ],

  copyrightText: '© 2024 HydroAI Systems. All rights reserved.',
  builtWithText: 'Built with precision for autonomous agriculture',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <section id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-2">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
              <p className="text-muted-foreground mb-6 max-w-md">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Technical features */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-foreground">Key Capabilities</h4>
              <ul className="space-y-2">
                {config.technicalFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span data-editable={`technicalFeatures[${idx}]`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span data-editable="contactInfo.email">{config.contactInfo.email}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span data-editable="contactInfo.phone">{config.contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span data-editable="contactInfo.address">{config.contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-primary text-sm justify-start"
                    onClick={() => handleNavigation(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-primary text-sm justify-start"
                    onClick={() => handleNavigation(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
            <span className="hidden sm:inline">•</span>
            <span data-editable="builtWithText">{config.builtWithText}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 text-muted-foreground hover:text-primary hover:bg-accent"
                onClick={() => handleNavigation(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.label}
              >
                {getSocialIcon(social.icon)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
