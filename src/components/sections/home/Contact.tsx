'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Contact Our Technical Team',
  subtitle: 'Get expert support for your AI-driven greenhouse control system implementation',
  description:
    'Our engineers are ready to help you optimize your hydroponic operations with cutting-edge automation technology.',
  formTitle: 'Technical Consultation Request',
  formSubtitle: 'Tell us about your greenhouse requirements',
  successMessage: 'Thank you! Our technical team will contact you within 24 hours.',
  contactInfo: [
    {
      icon: 'MapPin',
      label: 'Technical Center',
      value: '1247 Innovation Drive, AgTech Park, CA 94025',
    },
    {
      icon: 'Phone',
      label: 'Support Hotline',
      value: '+1 (555) 123-GROW',
    },
    {
      icon: 'Mail',
      label: 'Engineering Team',
      value: 'support@greenhouse-ai.com',
    },
  ],
  businessHours: [
    'Monday - Friday: 6:00 AM - 8:00 PM PST',
    'Saturday: 8:00 AM - 4:00 PM PST',
    'Sunday: Emergency Support Only',
  ],
  specialties: ['Climate Control Systems', 'Fertigation Automation', 'AI Optimization'],
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const getIcon = (iconName: string) => {
    const icons = {
      MapPin: MapPin,
      Phone: Phone,
      Mail: Mail,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || MapPin;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <span data-editable="formTitle">{config.formTitle}</span>
                  </h3>
                  <p className="text-muted-foreground">
                    <span data-editable="formSubtitle">{config.formSubtitle}</span>
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      <span data-editable="successMessage">{config.successMessage}</span>
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-form-id="69264c43636a618c69a590f5"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background border-border"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background border-border"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-background border-border"
                        placeholder="AgriTech Solutions"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="bg-background border-border resize-none"
                        placeholder="Describe your greenhouse size, current systems, and automation goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Technical Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    {config.contactInfo.map((contact, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2 rounded-lg">
                          {getIcon(contact.icon)}
                        </div>
                        <div>
                          <p className="font-medium">
                            <span data-editable={`contactInfo[${idx}].label`}>{contact.label}</span>
                          </p>
                          <p className="text-muted-foreground">
                            <span data-editable={`contactInfo[${idx}].value`}>{contact.value}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Support Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {config.businessHours.map((hours, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        <span data-editable={`businessHours[${idx}]`}>{hours}</span>
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Our Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        <span data-editable={`specialties[${idx}]`}>{specialty}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
