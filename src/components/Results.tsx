import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUpRight, Award, LucideIcon } from 'lucide-react';

interface ResultItem {
  icon: LucideIcon;
  stat: string;
  label: string;
  project: string;
  description: string;
  gradientClass: string;
  bgClass: string;
  textClass: string;
}

const results: ResultItem[] = [
  {
    icon: TrendingUp,
    stat: '+40%',
    label: 'Traffic Increase',
    project: 'E-commerce Brand',
    description: 'Organic traffic growth through comprehensive SEO strategy',
    gradientClass: 'bg-gradient-to-r from-[#22d3ee] to-transparent',
    bgClass: 'bg-[#22d3ee]/10',
    textClass: 'text-[#22d3ee]',
  },
  {
    icon: DollarSign,
    stat: '3.5x',
    label: 'ROAS Achieved',
    project: 'SaaS Startup',
    description: 'Return on ad spend through optimized Meta campaigns',
    gradientClass: 'bg-gradient-to-r from-[#3b82f6] to-transparent',
    bgClass: 'bg-[#3b82f6]/10',
    textClass: 'text-[#3b82f6]',
  },
  {
    icon: ShoppingCart,
    stat: '+65%',
    label: 'Conversion Rate',
    project: 'Fashion Retailer',
    description: 'Improved checkout flow and retargeting setup',
    gradientClass: 'bg-gradient-to-r from-[#a855f7] to-transparent',
    bgClass: 'bg-[#a855f7]/10',
    textClass: 'text-[#a855f7]',
  },
  {
    icon: Users,
    stat: '150K+',
    label: 'Leads Generated',
    project: 'B2B Technology',
    description: 'Qualified leads through integrated content strategy',
    gradientClass: 'bg-gradient-to-r from-[#22d3ee] to-transparent',
    bgClass: 'bg-[#22d3ee]/10',
    textClass: 'text-[#22d3ee]',
  },
  {
    icon: ArrowUpRight,
    stat: '250%',
    label: 'Revenue Growth',
    project: 'Health & Wellness',
    description: 'Total revenue increase across all marketing channels',
    gradientClass: 'bg-gradient-to-r from-[#3b82f6] to-transparent',
    bgClass: 'bg-[#3b82f6]/10',
    textClass: 'text-[#3b82f6]',
  },
  {
    icon: Award,
    stat: 'Top 3',
    label: 'Search Rankings',
    project: 'Legal Services',
    description: 'Achieved first-page rankings for 50+ keywords',
    gradientClass: 'bg-gradient-to-r from-[#a855f7] to-transparent',
    bgClass: 'bg-[#a855f7]/10',
    textClass: 'text-[#a855f7]',
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32 bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Award className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-navy-200">Proven Results</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Measurable Impact, <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Numbers don't lie. Here are some of the results I've delivered for clients across various industries.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={result.label}
              className="stat-card group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${result.gradientClass} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`mb-4 inline-flex p-3 rounded-xl ${result.bgClass}`}>
                <result.icon className={`w-6 h-6 ${result.textClass}`} />
              </div>

              {/* Stat */}
              <div className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {result.stat}
              </div>

              {/* Label & Project */}
              <div className="text-xl font-semibold text-white mb-2">{result.label}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-accent-cyan mb-4">
                {result.project}
              </div>

              {/* Description */}
              <p className="text-navy-400 text-sm leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial/Quote */}
        <div className="mt-20 glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 text-[120px] font-display font-bold text-white/5 leading-none select-none">"</div>
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-navy-200 mb-6 max-w-4xl mx-auto leading-relaxed">
              "Usama transformed our digital presence completely. His strategic approach to SEO and paid advertising delivered results beyond our expectations. Our organic traffic increased by 40% and ROAS hit 3.5x within the first quarter."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-navy-950 font-bold text-lg">
                JD
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">James Davidson</div>
                <div className="text-sm text-navy-400">CEO, TechFlow Commerce</div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
