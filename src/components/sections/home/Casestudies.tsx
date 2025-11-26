'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Zap, Droplets, Thermometer, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CASE_STUDIES = {
  title: 'AI-Driven Greenhouse Success Stories',
  subtitle:
    'Real-world implementations of autonomous climate and fertigation control systems delivering measurable results',
  ctaText: 'View All Case Studies',
  ctaHref: '/case-studies',
  studies: [
    {
      id: '1',
      title: 'Netherlands Tomato Farm',
      location: 'Westland, Netherlands',
      crop: 'Cherry Tomatoes',
      imageUrl: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&h=600&fit=crop',
      imageAlt: 'Modern hydroponic greenhouse with tomato plants',
      description:
        'Autonomous climate control with AI-optimized fertigation increased yield by 34% while reducing water consumption by 28%',
      metrics: [
        { label: 'Yield Increase', value: '34%', icon: 'TrendingUp' },
        { label: 'Water Savings', value: '28%', icon: 'Droplets' },
        { label: 'Energy Efficiency', value: '22%', icon: 'Zap' },
      ],
      technologies: ['Climate AI', 'Fertigation Control', 'Vision Analysis'],
      duration: '12 months',
      size: '2.5 hectares',
    },
    {
      id: '2',
      title: 'California Lettuce Operation',
      location: 'Salinas Valley, CA',
      crop: 'Leafy Greens',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      imageAlt: 'Hydroponic lettuce growing system with automated controls',
      description:
        'Multi-zone climate management with predictive analytics reduced crop loss by 45% and optimized harvest timing',
      metrics: [
        { label: 'Crop Loss Reduction', value: '45%', icon: 'Eye' },
        { label: 'Temperature Control', value: '±0.5°C', icon: 'Thermometer' },
        { label: 'Harvest Optimization', value: '18%', icon: 'TrendingUp' },
      ],
      technologies: ['Predictive Analytics', 'Multi-zone Control', 'Quality Monitoring'],
      duration: '8 months',
      size: '1.8 hectares',
    },
    {
      id: '3',
      title: 'Japanese Strawberry Facility',
      location: 'Miyagi Prefecture, Japan',
      crop: 'Premium Strawberries',
      imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      imageAlt: 'High-tech strawberry greenhouse with automated systems',
      description:
        'Precision fertigation with AI-driven quality assessment achieved premium grade rates of 89% with 31% faster growth cycles',
      metrics: [
        { label: 'Premium Grade Rate', value: '89%', icon: 'Eye' },
        { label: 'Growth Acceleration', value: '31%', icon: 'TrendingUp' },
        { label: 'Resource Efficiency', value: '26%', icon: 'Droplets' },
      ],
      technologies: ['Precision Fertigation', 'Quality AI', 'Growth Optimization'],
      duration: '10 months',
      size: '0.9 hectares',
    },
  ],
} as const;

type CaseStudiesProps = Partial<typeof DEFAULT_CASE_STUDIES>;

export default function Casestudies(props: CaseStudiesProps) {
  const config = { ...DEFAULT_CASE_STUDIES, ...props };
  const navigate = useSmartNavigation();
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const icons = {
      TrendingUp: TrendingUp,
      Droplets: Droplets,
      Zap: Zap,
      Eye: Eye,
      Thermometer: Thermometer,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || TrendingUp;
    return <IconComponent className="h-4 w-4" />;
  };

  const handleViewAllClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="case-studies" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:gap-12 mb-12">
          {config.studies.map((study, idx) => (
            <Card
              key={study.id}
              className={`bg-card text-card-foreground border-border transition-all duration-300 hover:shadow-lg ${
                selectedStudy === study.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedStudy(selectedStudy === study.id ? null : study.id)}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <Image
                    src={study.imageUrl}
                    alt={study.imageAlt}
                    data-editable-src={`studies[${idx}].imageUrl`}
                    fill
                    className="object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <span data-editable={`studies[${idx}].crop`}>{study.crop}</span>
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl font-bold">
                        <span data-editable={`studies[${idx}].title`}>{study.title}</span>
                      </CardTitle>
                      <div className="text-sm text-muted-foreground text-right">
                        <div data-editable={`studies[${idx}].size`}>{study.size}</div>
                        <div data-editable={`studies[${idx}].duration`}>{study.duration}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      <span data-editable={`studies[${idx}].location`}>{study.location}</span>
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-foreground mb-6 leading-relaxed">
                      <span data-editable={`studies[${idx}].description`}>{study.description}</span>
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, metricIdx) => (
                        <div key={metricIdx} className="text-center p-3 bg-muted rounded-lg">
                          <div className="flex justify-center mb-2 text-primary">
                            {getIcon(metric.icon)}
                          </div>
                          <div className="font-bold text-lg text-foreground">
                            <span data-editable={`studies[${idx}].metrics[${metricIdx}].value`}>
                              {metric.value}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <span data-editable={`studies[${idx}].metrics[${metricIdx}].label`}>
                              {metric.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIdx) => (
                        <Badge
                          key={techIdx}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                        >
                          <span data-editable={`studies[${idx}].technologies[${techIdx}]`}>
                            {tech}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleViewAllClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
