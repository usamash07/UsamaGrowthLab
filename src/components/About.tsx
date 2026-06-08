import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Code, LineChart, Users2 } from 'lucide-react';

const highlights = [
  { icon: Briefcase, text: '7+ Years Experience' },
  { icon: Users2, text: '50+ Projects Delivered' },
  { icon: LineChart, text: 'Data-Driven Approach' },
  { icon: Code, text: 'Technical Expertise' },
];

const skills = [
  'SEO & SEM',
  'Google Analytics',
  'Meta Ads Manager',
  'Content Strategy',
  'Marketing Automation',
  'A/B Testing',
  'Data Visualization',
  'Conversion Optimization',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-accent-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <GraduationCap className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-navy-200">About Me</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Crafting Digital Success <span className="gradient-text">Stories</span>
            </h2>

            <div className="space-y-4 text-navy-300 leading-relaxed mb-8">
              <p>
                I'm <span className="text-white font-semibold">Usama Ahmed</span>, a digital marketing strategist with a passion for helping businesses unlock their growth potential. With over 7 years of experience, I've helped startups and established brands alike navigate the complex digital landscape.
              </p>
              <p>
                My approach combines creative thinking with rigorous data analysis. I believe every marketing decision should be backed by insights, not intuition alone. This methodology has enabled me to consistently deliver results that exceed expectations.
              </p>
              <p>
                From launching successful ad campaigns to building comprehensive content strategies, I bring a full-stack marketing perspective that ensures every channel works in harmony toward your business goals.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="p-2 rounded-lg bg-accent-cyan/10">
                    <item.icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <span className="font-medium text-white">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 text-accent-cyan">
                <MapPin className="w-4 h-4" />
                Available Worldwide
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue">
                <Calendar className="w-4 h-4" />
                Open for Projects
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="gradient-border p-8 bg-navy-900/50">
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-navy-200 hover:border-accent-cyan/30 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Stats in card */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold gradient-text mb-1">$2M+</div>
                  <div className="text-sm text-navy-400">Ad Spend Managed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold gradient-text mb-1">20+</div>
                  <div className="text-sm text-navy-400">Industries Served</div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <div className="font-semibold text-white">Growth Focused</div>
                  <div className="text-xs text-navy-400">Results-driven strategies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
