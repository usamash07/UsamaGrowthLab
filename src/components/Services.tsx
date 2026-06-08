import { Search, Target, PenTool, ArrowRight, BarChart3, LineChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Drive organic traffic with advanced keyword research, on-page optimization, technical SEO audits, and strategic link building that positions your brand at the top of search results.',
    features: ['Keyword Research', 'Technical Audits', 'Link Building', 'Local SEO'],
    gradient: 'from-accent-cyan to-accent-blue',
    iconBg: 'bg-accent-cyan/10',
  },
  {
    icon: Target,
    title: 'Meta/Google Ads Campaigns',
    description: 'Maximize ROI with precision-targeted paid campaigns across Google, Facebook, and Instagram. Data-driven optimization that converts clicks into customers.',
    features: ['Campaign Strategy', 'A/B Testing', 'Retargeting', 'Analytics'],
    gradient: 'from-accent-blue to-accent-purple',
    iconBg: 'bg-accent-blue/10',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Build authority and engage audiences with compelling content strategies. From blog posts to video scripts, I create content that ranks and converts.',
    features: ['Content Strategy', 'Blog Writing', 'Video Scripts', 'Social Content'],
    gradient: 'from-accent-purple to-accent-cyan',
    iconBg: 'bg-accent-purple/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-navy-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <LineChart className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-navy-200">What I Offer</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals, backed by data and delivered with precision.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-accent-cyan" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-accent-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-white/5 text-sm text-navy-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent-cyan font-medium group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 glass-card p-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-accent-cyan" />
            <div>
              <div className="text-2xl font-bold text-white">Data-Driven</div>
              <div className="text-sm text-navy-400">Every decision backed by analytics</div>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-accent-blue" />
            <div>
              <div className="text-2xl font-bold text-white">Results-Focused</div>
              <div className="text-sm text-navy-400">ROI is our north star</div>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <LineChart className="w-8 h-8 text-accent-purple" />
            <div>
              <div className="text-2xl font-bold text-white">Scalable</div>
              <div className="text-sm text-navy-400">Strategies that grow with you</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
