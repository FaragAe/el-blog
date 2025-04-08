'use client';

import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Post {
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchPost = async () => {
      try {
        // In a real app, this would be an API call using the slug
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setPost({
          title: "تحليل متعمق: ثغرة Log4Shell وتأثيرها",
          category: "تحليل ثغرات",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2072",
          date: "٢٠ مارس ٢٠٢٤",
          readTime: "١٥ دقيقة",
          content: `
            <p>هذه الثغرة الأمنية الخطيرة تؤثر على مكتبة Log4j المستخدمة على نطاق واسع...</p>
            <h2>تفاصيل الثغرة</h2>
            <p>تسمح الثغرة للمهاجمين بتنفيذ أوامر عن بعد...</p>
            <h2>كيفية الحماية</h2>
            <p>يمكن حماية أنظمتك من خلال تحديث المكتبة...</p>
          `,
          author: {
            name: "أحمد محمد",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            role: "باحث أمني"
          }
        });
      } catch (err) {
        setError('حدث خطأ أثناء تحميل المقال');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-2xl font-bold mb-4">عذراً، حدث خطأ</h1>
          <p className="text-muted-foreground mb-6">{error || 'لم يتم العثور على المقال'}</p>
          <Button asChild>
            <Link href="/blog">العودة للمدونة</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog" className="flex items-center">
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للمدونة
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute bottom-0 p-8">
            <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mb-4 font-mono backdrop-blur-sm">
              {post.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
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

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8 p-6 rounded-xl bg-card/50 border border-border/40">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-muted-foreground">{post.author.role}</p>
          </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}