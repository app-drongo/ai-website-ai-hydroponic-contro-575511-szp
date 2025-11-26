'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Cpu,
  CloudRain,
  Zap,
  Shield,
  BarChart3,
  Wifi,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_BENEFITS = {
  title: 'AI-Driven Hydroponic Control System Benefits',
  subtitle: 'Autonomous climate and fertigation management with real-time optimization',
  ctaText: 'Get Started',
  ctaHref: '/contact',
  benefits: [
    {
      icon: 'Cpu',
      title: 'AI-Powered Optimization',
      description:
        'Machine learning algorithms continuously adapt to environmental conditions for maximum yield efficiency',
      features: ['Predictive climate control', 'Adaptive fertigation', 'Yield optimization'],
    },
    {
      icon: 'CloudRain',
      title: 'Autonomous Climate Management',
      description:
        'Real-time monitoring and control of temperature, humidity, CO₂, and lighting through PLC integration',
      features: [
        'Multi-sensor monitoring',
        'Automated ventilation',
        'Precision environmental control',
      ],
    },
    {
      icon: 'Zap',
      title: 'Smart Fertigation Control',
      description:
        'Precise nutrient delivery with EC/pH monitoring and automated dosing pump management',
      features: ['4-channel dosing pumps', 'Real-time EC/pH control', 'Water level monitoring'],
    },
    {
      icon: 'Shield',
      title: 'Safety & Reliability',
      description:
        'Built-in safety interlocks and fail-safes ensure system protection and crop security',
      features: ['Temperature safeguards', 'Overcurrent protection', 'Emergency shutdowns'],
    },
    {
      icon: 'BarChart3',
      title: 'Data Analytics & Insights',
      description:
        'Comprehensive data collection and analysis for continuous improvement and reporting',
      features: ['Real-time dashboards', 'Historical analytics', 'Performance metrics'],
    },
    {
      icon: 'Wifi',
      title: '4G Cloud Connectivity',
      description: 'Secure MQTT communication enables remote monitoring and control from anywhere',
      features: ['Remote access', 'Cloud data storage', 'Mobile notifications'],
    },
  ],
  keyMetrics: [
    { label: 'Yield Increase', value: 'Up to 40%' },
    { label: 'Water Savings', value: '30-50%' },
    { label: 'Energy Efficiency', value: '25% reduction' },
  ],
} as const;

type BenefitsProps = Partial<typeof DEFAULT_BENEFITS>;

export default function Benefits(props: BenefitsProps) {
  const config = { ...DEFAULT_BENEFITS, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Cpu: Cpu,
      CloudRain: CloudRain,
      Zap: Zap,
      Shield: Shield,
      BarChart3: BarChart3,
      Wifi: Wifi,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Cpu;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="benefits" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {config.keyMetrics.map((metric, idx) => (
            <Card key={idx} className="bg-primary text-primary-foreground text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2">
                  <span data-editable={`keyMetrics[${idx}].value`}>{metric.value}</span>
                </div>
                <div className="text-primary-foreground/80">
                  <span data-editable={`keyMetrics[${idx}].label`}>{metric.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.benefits.map((benefit, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-xl font-semibold">
                    <span data-editable={`benefits[${idx}].title`}>{benefit.title}</span>
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  <span data-editable={`benefits[${idx}].description`}>{benefit.description}</span>
                </p>

                <div className="space-y-2">
                  {benefit.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`benefits[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-secondary text-secondary-foreground p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Greenhouse?</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Experience the future of hydroponic farming with our AI-driven control system
            </p>
            <Button
              onClick={handleCTAClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
