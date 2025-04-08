import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: "تحليل متعمق: ثغرة Log4Shell وتأثيرها",
    category: "تحليل ثغرات",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2072",
    date: "٢٠ مارس ٢٠٢٤",
    readTime: "١٥ دقيقة",
    excerpt: "تحليل تقني مفصل للثغرة الأمنية الخطيرة وكيفية الحماية منها"
  },
  {
    title: "تقنيات التشفير الحديثة في عام 2024",
    category: "تشفير",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    date: "١٥ مارس ٢٠٢٤",
    readTime: "١٠ دقائق",
    excerpt: "نظرة شاملة على أحدث تقنيات التشفير وتطبيقاتها"
  },
  {
    title: "دليل عملي لاختبار الاختراق الأخلاقي",
    category: "اختبار اختراق",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    date: "١٠ مارس ٢٠٢٤",
    readTime: "٢٠ دقيقة",
    excerpt: "خطوات عملية لإجراء اختبارات الاختراق بشكل احترافي"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 font-mono">المدونة</h1>
        
        <div className="grid gap-8">
          {posts.map((post, i) => (
            <article 
              key={i}
              className="group bg-card rounded-xl border border-border/40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4 font-mono">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-mono">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      {post.readTime} قراءة
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}