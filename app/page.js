import Link from 'next/link';
import { Calendar, Clock, Shield, Terminal, Lock, Code, Mail, Github, Linkedin, Twitter, Bug, FileSearch, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070"
            alt="Hero"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Profile Image */}
            <div className="animate-float">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden gradient-border bg-background p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <span className="gradient-text font-mono text-lg">~/cybersecurity-blog</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">root@</span>
                <span className="gradient-text">cybersecurity</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                &gt; تحليل ثغرات | اختبار اختراق | هندسة عكسية | تشفير
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Twitter className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg group gradient-border bg-background hover:bg-background/50 transition-all duration-300 w-full sm:w-auto h-14"
              >
                تصفح المقالات التقنية
                <Code className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="group w-full sm:w-auto h-14"
              >
                <Link href="/contact">
                  تواصل معي
                  <Mail className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text">خدماتي الاحترافية</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              أقدم مجموعة متكاملة من الخدمات الأمنية لحماية أنظمتك وبياناتك
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Bug,
                title: 'اختبار الاختراق',
                description: 'تقييم شامل لأمن أنظمتك وتحديد نقاط الضعف المحتملة',
                color: 'from-blue-500/10 to-blue-600/10'
              },
              {
                icon: FileSearch,
                title: 'تحليل الثغرات',
                description: 'فحص دقيق للتطبيقات والأنظمة لاكتشاف الثغرات الأمنية',
                color: 'from-purple-500/10 to-purple-600/10'
              },
              {
                icon: Database,
                title: 'حماية البيانات',
                description: 'تطبيق أفضل ممارسات حماية البيانات وتشفيرها',
                color: 'from-green-500/10 to-green-600/10'
              },
              {
                icon: Cpu,
                title: 'الهندسة العكسية',
                description: 'تحليل البرمجيات الخبيثة وفهم آليات عملها',
                color: 'from-red-500/10 to-red-600/10'
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group p-6 rounded-xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${service.color}`}
              >
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Terminal className="h-6 w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">آخر التحليلات الأمنية</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <article itemScope itemType="http://schema.org/BlogPosting" className="group">
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  itemProp="image"
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2072"
                  alt="مقال رئيسي"
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mb-4 font-mono backdrop-blur-sm">
                    تحليل ثغرات
                  </div>
                  <h3 itemProp="headline" className="text-2xl font-bold mb-2 font-mono">تحليل متعمق: ثغرة Log4Shell وتأثيرها</h3>
                  <p itemProp="description" className="text-muted-foreground mb-4">تحليل تقني مفصل للثغرة الأمنية الخطيرة وكيفية الحماية منها</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time itemProp="datePublished" className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      ٢٠ مارس ٢٠٢٤
                    </time>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      ١٥ دقيقة قراءة
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Recent Posts Grid */}
            <div className="grid gap-6">
              {[
                {
                  title: "تقنيات التشفير الحديثة في عام 2024",
                  category: "تشفير",
                  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
                  date: "١٥ مارس ٢٠٢٤",
                  color: "bg-blue-500/10"
                },
                {
                  title: "دليل عملي لاختبار الاختراق الأخلاقي",
                  category: "اختبار اختراق",
                  image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                  date: "١٥ مارس ٢٠٢٤",
                  color: "bg-purple-500/10"
                },
                {
                  title: "تحليل برمجيات خبيثة باستخدام التقنيات المتقدمة",
                  category: "هندسة عكسية",
                  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
                  date: "١٥ مارس ٢٠٢٤",
                  color: "bg-green-500/10"
                }
              ].map((post, i) => (
                <article key={i} itemScope itemType="http://schema.org/BlogPosting" className="group flex gap-6 items-start bg-card/50 p-4 rounded-xl border border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-40 h-28 overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      itemProp="image"
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className={`inline-block ${post.color} text-primary px-2 py-1 rounded-full text-xs mb-2 font-mono`}>
                      {post.category}
                    </div>
                    <h3 itemProp="headline" className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors font-mono line-clamp-2">
                      {post.title}
                    </h3>
                    <time itemProp="datePublished" className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 ml-1" />
                      {post.date}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Lock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">مجالات التخصص</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'تحليل ثغرات', count: '24', icon: '🔍', color: 'from-blue-500/10 to-blue-600/10' },
              { title: 'اختبار اختراق', count: '18', icon: '🛡️', color: 'from-purple-500/10 to-purple-600/10' },
              { title: 'هندسة عكسية', count: '15', icon: '⚡', color: 'from-green-500/10 to-green-600/10' },
              { title: 'تشفير', count: '12', icon: '🔐', color: 'from-red-500/10 to-red-600/10' },
            ].map((category) => (
              <div 
                key={category.title} 
                className={`p-6 rounded-xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${category.color}`}
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-semibold mb-2 font-mono">{category.title}</h3>
                <p className="text-muted-foreground">{category.count} مقال</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-8 sm:p-12 rounded-xl border border-border/40 shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <Terminal className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">$ subscribe --newsletter</h2>
              <p className="text-muted-foreground mb-8">
                اشترك للحصول على آخر التحديثات والتحليلات الأمنية مباشرة إلى بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-[2] px-4 py-2 rounded-md bg-background border border-border focus:border-primary transition-colors font-mono order-1 sm:order-2"
                />
                <Button size="lg" className="flex-1 order-2 sm:order-1">اشتراك</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}