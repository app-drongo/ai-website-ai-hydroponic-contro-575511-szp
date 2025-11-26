'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Thermometer,
  Droplets,
  Zap,
  Eye,
  Shield,
  BarChart3,
  ArrowRight,
  Cpu,
  Cloud,
  Smartphone,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SERVICES = {
  title: 'AI-Driven Hydroponic Control System',
  subtitle: 'Autonomous climate and fertigation management through intelligent automation',
  description:
    'Our comprehensive 5-layer architecture delivers real-time environmental control, precision fertigation, and quality monitoring for optimal crop yields.',
  ctaText: 'Request System Demo',
  ctaHref: '/demo',
  secondaryCtaText: 'View Technical Specs',
  secondaryCtaHref: '/specs',
  services: [
    {
      id: 'field-layer',
      icon: 'thermometer',
      title: 'Field Layer Control',
      description:
        'Advanced sensor network monitoring air temperature, humidity, CO₂, pH, EC, and light intensity with PLC-controlled actuators for ventilation, irrigation, and lighting systems.',
      features: ['Multi-sensor monitoring', 'PLC actuator control', 'Safety interlocks'],
    },
    {
      id: 'ai-optimization',
      icon: 'cpu',
      title: 'AI Optimization Engine',
      description:
        'Hybrid AI system combining rule-based safety constraints with machine learning optimization for adaptive climate control and precision fertigation management.',
      features: ['Contextual bandit algorithms', 'Predictive analytics', 'Continuous learning'],
    },
    {
      id: 'cloud-platform',
      icon: 'cloud',
      title: 'Cloud Data Platform',
      description:
        'Secure 4G-connected cloud infrastructure with TimescaleDB storage, real-time MQTT communication, and comprehensive data analytics for performance optimization.',
      features: ['Real-time telemetry', 'Secure MQTT/TLS', 'Historical analytics'],
    },
  ],
  capabilities: [
    {
      category: 'Environmental Control',
      items: [
        'Temperature regulation',
        'Humidity management',
        'CO₂ optimization',
        'Light cycle control',
      ],
    },
    {
      category: 'Fertigation Management',
      items: ['pH/EC monitoring', 'Nutrient dosing', 'Water flow control', 'Tank level tracking'],
    },
    {
      category: 'Quality Assurance',
      items: [
        'Computer vision analysis',
        'Yield prediction',
        'Defect detection',
        'Ripeness assessment',
      ],
    },
  ],
} as const;

type ServicesProps = Partial<typeof DEFAULT_SERVICES>;

export default function Services(props: ServicesProps) {
  const config = { ...DEFAULT_SERVICES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      thermometer: Thermometer,
      cpu: Cpu,
      cloud: Cloud,
      droplets: Droplets,
      zap: Zap,
      eye: Eye,
      shield: Shield,
      chart: BarChart3,
      smartphone: Smartphone,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Thermometer;
    return <IconComponent className="h-8 w-8" />;
  };

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="services" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.services.map((service, idx) => (
            <Card
              key={service.id}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-xl">
                    <span data-editable={`services[${idx}].title`}>{service.title}</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  <span data-editable={`services[${idx}].description`}>{service.description}</span>
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span
                        className="text-sm text-muted-foreground"
                        data-editable={`services[${idx}].features[${featureIdx}]`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-muted text-muted-foreground rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            System Capabilities
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {config.capabilities.map((capability, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  <span data-editable={`capabilities[${idx}].category`}>{capability.category}</span>
                </h4>
                <div className="space-y-2">
                  {capability.items.map((item, itemIdx) => (
                    <Badge key={itemIdx} variant="secondary" className="mr-2 mb-2">
                      <span data-editable={`capabilities[${idx}].items[${itemIdx}]`}>{item}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handlePrimaryCTA}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSecondaryCTA}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="border-border text-foreground hover:bg-accent"
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
