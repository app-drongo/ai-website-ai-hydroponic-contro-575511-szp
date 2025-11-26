'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Cpu, Thermometer, Droplets, Zap, Shield, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'AI-Driven Hydroponic Greenhouse Control System',
  subtitle: 'Autonomous Climate and Fertigation Management',
  description:
    'Revolutionary 5-layer architecture combining HMI-PLC panels, 4G connectivity, and cloud AI for real-time greenhouse optimization. Achieve 40% higher yields with precision environmental control.',
  ctaText: 'View System Demo',
  ctaHref: '/demo',
  secondaryCtaText: 'Technical Specs',
  secondaryCtaHref: '/specifications',
  videoThumbnail:
    'https://media.istockphoto.com/id/859371624/photo/smart-agriculture-concept-agronomist-or-farmer-use-artificial-intelligence-and-augmented.webp?a=1&b=1&s=612x612&w=0&k=20&c=aqNykV9yyEQJUXDDMwhghZk58hKAW4gBaAduGVkQb5A=',
  videoAlt: 'AI Greenhouse Control System Dashboard',
  features: [
    'Real-time AI optimization',
    '5-layer system architecture',
    'Industrial PLC integration',
  ],
  metrics: [
    { label: 'Yield Increase', value: '40%', icon: 'trending-up' },
    { label: 'Energy Efficiency', value: '35%', icon: 'zap' },
    { label: 'Water Savings', value: '50%', icon: 'droplets' },
  ],
  systemLayers: [
    'Field Layer (Sensors & Actuators)',
    'Control Layer (HMI-PLC Cabinet)',
    'Communication Layer (4G & MQTT)',
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % config.metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.metrics.length]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    // Video play logic would go here
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTAClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-5 w-5" />;
      case 'droplets':
        return <Droplets className="h-5 w-5" />;
      default:
        return <Thermometer className="h-5 w-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Cpu className="h-3 w-3 mr-1" />
                <span data-editable="subtitle">{config.subtitle}</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-3">
              {config.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="bg-card text-card-foreground">
                  <Shield className="h-3 w-3 mr-1" />
                  <span data-editable={`features[${idx}]`}>{feature}</span>
                </Badge>
              ))}
            </div>

            {/* System Layers */}
            <Card className="bg-card text-card-foreground border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-card-foreground">System Architecture</h3>
                <ul className="space-y-2">
                  {config.systemLayers.map((layer, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                      <span data-editable={`systemLayers[${idx}]`}>{layer}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleCTAClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryCTAClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Media Column */}
          <div className="space-y-6">
            {/* Video/Demo Card */}
            <Card className="bg-card text-card-foreground border-border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={config.videoThumbnail}
                  alt={config.videoAlt}
                  data-editable-src="videoThumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={handleVideoPlay}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-16 w-16 p-0"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              {config.metrics.map((metric, idx) => (
                <Card
                  key={idx}
                  className={`bg-card text-card-foreground border-border transition-all duration-300 ${
                    currentMetric === idx ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">
                      {getMetricIcon(metric.icon)}
                    </div>
                    <div className="text-2xl font-bold text-card-foreground">
                      <span data-editable={`metrics[${idx}].value`}>{metric.value}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span data-editable={`metrics[${idx}].label`}>{metric.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
