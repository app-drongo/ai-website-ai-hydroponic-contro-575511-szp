'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Thermometer, Droplets, Zap, Brain, Shield, BarChart3, Wifi, Settings } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'AI-Driven Hydroponic Greenhouse Control System',
  subtitle: 'Autonomous climate and fertigation management through intelligent PLC integration',
  description:
    'Complete 5-layer architecture from field sensors to cloud AI, delivering real-time optimization for maximum yield and efficiency.',
  ctaText: 'View System Architecture',
  ctaHref: '/architecture',
  features: [
    {
      id: 'field-layer',
      icon: 'Thermometer',
      title: 'Field Layer Intelligence',
      description:
        'Advanced sensor array monitoring air temperature, humidity, CO₂, pH, EC, and light intensity with PLC-controlled actuators for ventilation, fertigation, and climate control.',
      technologies: ['Modbus-RTU', '4-20mA', 'Digital I/O', 'Safety Interlocks'],
    },
    {
      id: 'control-layer',
      icon: 'Settings',
      title: 'HMI-PLC Control Hub',
      description:
        'Industrial-grade PLC with embedded safety logic, manual/auto switching, and real-time local decision making with HMI touch panel interface.',
      technologies: ['Ladder Logic', 'MQTT Client', 'Local Buffer', 'Emergency Override'],
    },
    {
      id: 'communication',
      icon: 'Wifi',
      title: '4G Cloud Connectivity',
      description:
        'Secure MQTT over TLS communication through industrial 4G router with store-and-forward capability during network outages.',
      technologies: ['MQTT/TLS', 'Device Authentication', 'Network Redundancy', 'Data Buffering'],
    },
    {
      id: 'ai-platform',
      icon: 'Brain',
      title: 'Cloud AI Engine',
      description:
        'Hybrid AI system combining rule-based safety constraints with adaptive optimization algorithms for long-term learning and performance improvement.',
      technologies: ['FastAPI', 'TimescaleDB', 'Computer Vision', 'Contextual Bandits'],
    },
    {
      id: 'monitoring',
      icon: 'BarChart3',
      title: 'Real-Time Dashboard',
      description:
        'Comprehensive monitoring interface with live telemetry, quality metrics, fertigation status, and manual override capabilities for complete system visibility.',
      technologies: ['WebSocket', 'Real-time Charts', 'Alarm Management', 'Mobile Responsive'],
    },
    {
      id: 'safety',
      icon: 'Shield',
      title: 'Multi-Layer Safety',
      description:
        'Redundant safety systems with local PLC guardrails, thermal protection, overcurrent monitoring, and emergency shutdown procedures.',
      technologies: ['Hardware Interlocks', 'Watchdog Timers', 'Fail-Safe Design', 'Audit Logging'],
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Thermometer,
      Droplets,
      Zap,
      Brain,
      Shield,
      BarChart3,
      Wifi,
      Settings,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Settings;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
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
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      <span data-editable={`features[${idx}].technologies[${techIdx}]`}>
                        {tech}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Deploy Intelligent Greenhouse Control?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience autonomous climate management with our proven 5-layer architecture
            </p>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
