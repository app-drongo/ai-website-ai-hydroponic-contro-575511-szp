'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Cpu,
  Cloud,
  Wifi,
  Database,
  Monitor,
  Thermometer,
  Droplets,
  Zap,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PROCESS = {
  title: 'AI-Driven Hydroponic Control System',
  subtitle: 'Five-Layer Architecture for Autonomous Greenhouse Management',
  description:
    'Complete end-to-end solution from field sensors to cloud AI, enabling real-time climate and fertigation control through intelligent automation.',
  ctaText: 'View System Architecture',
  ctaHref: '/architecture',
  layers: [
    {
      id: 'field',
      name: 'Field Layer',
      description: 'Sensors & Actuators',
      details:
        'Temperature, humidity, CO₂, pH, EC sensors with PLC-controlled fans, pumps, and fertigation systems',
      icon: 'thermometer',
      color: 'primary',
    },
    {
      id: 'control',
      name: 'Control Layer',
      description: 'HMI-PLC Cabinet',
      details:
        'Industrial PLC with safety interlocks, manual/auto modes, and MQTT communication protocols',
      icon: 'cpu',
      color: 'secondary',
    },
    {
      id: 'communication',
      name: 'Communication Layer',
      description: '4G Router & MQTT',
      details: 'Secure TLS-encrypted data transmission with backup buffering for network outages',
      icon: 'wifi',
      color: 'accent',
    },
    {
      id: 'cloud',
      name: 'Cloud Layer',
      description: 'AI & Data Platform',
      details: 'Hybrid AI engine with rule-based safety and ML optimization for adaptive control',
      icon: 'cloud',
      color: 'primary',
    },
    {
      id: 'user',
      name: 'User Layer',
      description: 'Remote Dashboard',
      details:
        'Real-time monitoring, quality metrics, manual overrides, and comprehensive reporting',
      icon: 'monitor',
      color: 'secondary',
    },
  ],
  features: [
    'Autonomous climate control with AI optimization',
    'Real-time fertigation management and dosing',
    'Computer vision for quality assessment',
  ],
} as const;

type ProcessProps = Partial<typeof DEFAULT_PROCESS>;

export default function Process(props: ProcessProps) {
  const config = { ...DEFAULT_PROCESS, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      thermometer: Thermometer,
      cpu: Cpu,
      wifi: Wifi,
      cloud: Cloud,
      monitor: Monitor,
      droplets: Droplets,
      zap: Zap,
      database: Database,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Cpu;
    return <IconComponent className="h-8 w-8" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground border-primary',
      secondary: 'bg-secondary text-secondary-foreground border-secondary',
      accent: 'bg-accent text-accent-foreground border-accent',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="process" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="description">{config.description}</span>
          </p>
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Process Flow */}
        <div className="grid gap-8 md:gap-12">
          {config.layers.map((layer, idx) => (
            <div key={layer.id} className="relative">
              {/* Connection Line */}
              {idx < config.layers.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-px h-12 bg-border transform -translate-x-1/2 z-10" />
              )}

              <Card className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-12 items-center">
                    {/* Icon & Badge */}
                    <div className="md:col-span-2 flex flex-col items-center space-y-4">
                      <div className={`p-4 rounded-full ${getColorClasses(layer.color)}`}>
                        {getIcon(layer.icon)}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Layer {idx + 1}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          <span data-editable={`layers[${idx}].name`}>{layer.name}</span>
                        </h3>
                        <p className="text-lg text-muted-foreground mb-3">
                          <span data-editable={`layers[${idx}].description`}>
                            {layer.description}
                          </span>
                        </p>
                        <p className="text-foreground leading-relaxed">
                          <span data-editable={`layers[${idx}].details`}>{layer.details}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Key System Capabilities</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {config.features.map((feature, idx) => (
              <Card key={idx} className="bg-muted text-muted-foreground border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      <span data-editable={`features[${idx}]`}>{feature}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
