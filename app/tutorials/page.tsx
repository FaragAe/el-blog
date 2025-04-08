import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, Clock, Users, BookOpen, Code, Shield, Database, Cpu } from "lucide-react";

const tutorials = [
  {
    title: "مقدمة في الأمن السيبراني",
    description: "تعلم أساسيات الأمن السيبراني وأهم المفاهيم",
    category: "مبتدئ",
    duration: "٣ ساعات",
    students: "١٢٣٤",
    icon: Shield,
    color: "bg-blue-500/10",
    modules: ["مقدمة في الأمن السيبراني", "التهديدات الأمنية", "أساسيات الحماية"]
  },
  {
    title: "اختبار الاختراق المتقدم",
    description: "تعلم تقنيات اختبار الاختراق المتقدمة",
    category: "متقدم",
    duration: "٥ ساعات",
    students: "٨٩٦",
    icon: Code,
    color: "bg-purple-500/10",
    modules: ["أدوات اختبار الاختراق", "تقنيات الاستغلال", "كتابة التقارير"]
  },
  {
    title: "تحليل البرمجيات الخبيثة",
    description: "تعلم كيفية تحليل البرمجيات الخبيثة",
    category: "خبير",
    duration: "٨ ساعات",
    students: "٥٦٧",
    icon: Cpu,
    color: "bg-green-500/10",
    modules: ["أساسيات التحليل", "التحليل الثابت", "التحليل الديناميكي"]
  },
  {
    title: "أمن قواعد البيانات",
    description: "حماية قواعد البيانات من الهجمات",
    category: "متوسط",
    duration: "٤ ساعات",
    students: "٧٨٩",
    icon: Database,
    color: "bg-red-500/10",
    modules: ["مقدمة في أمن قواعد البيانات", "SQL Injection", "تشفير البيانات"]
  }
];

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Terminal className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">الدورات التدريبية</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            دورات تدريبية احترافية في مجال الأمن السيبراني، مصممة لمساعدتك في تطوير مهاراتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className={`group p-6 ${tutorial.color} border-border/40 transition-all duration-300 hover:shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-background/50">
                  <tutorial.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-mono">
                      {tutorial.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 ml-1" />
                      {tutorial.students} طالب
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {tutorial.modules.map((module, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 ml-1" />
                      {tutorial.duration}
                    </div>
                    <Button className="group-hover:bg-primary/90 transition-colors">
                      ابدأ التعلم
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}