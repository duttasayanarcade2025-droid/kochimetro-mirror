import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper, TrendingUp } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Extended Metro Hours During Festival Season",
    date: "2024-03-15",
    category: "Service Update",
    excerpt: "Kochi Metro will operate with extended hours during the upcoming Onam festival season to accommodate increased passenger demand.",
    image: "/placeholder.svg",
    priority: "high"
  },
  {
    id: 2,
    title: "New Smart Card Top-Up Kiosks Installed",
    date: "2024-03-12",
    category: "Infrastructure",
    excerpt: "Automated top-up kiosks have been installed at all major stations for convenient smart card recharges.",
    image: "/placeholder.svg",
    priority: "medium"
  },
  {
    id: 3,
    title: "Monthly Ridership Crosses 5 Million Mark",
    date: "2024-03-08",
    category: "Achievement",
    excerpt: "Kochi Metro Rail Limited announces record monthly ridership of over 5 million passengers, marking a significant milestone.",
    image: "/placeholder.svg",
    priority: "medium"
  },
  {
    id: 4,
    title: "Line 2 Extension Work Progressing Ahead of Schedule",
    date: "2024-03-05",
    category: "Expansion",
    excerpt: "Construction work for the Line 2 extension to Info Park is progressing 15% ahead of schedule with completion expected by Q4 2024.",
    image: "/placeholder.svg",
    priority: "high"
  },
  {
    id: 5,
    title: "New Mobile App Features Launched",
    date: "2024-03-01",
    category: "Technology",
    excerpt: "Updated Kochi Metro app now includes real-time train tracking, digital tickets, and journey planning features.",
    image: "/placeholder.svg",
    priority: "low"
  },
  {
    id: 6,
    title: "Green Energy Initiative: Solar Panels at 10 Stations",
    date: "2024-02-28",
    category: "Sustainability",
    excerpt: "Solar panel installations completed at 10 metro stations as part of the green energy initiative, reducing carbon footprint by 30%.",
    image: "/placeholder.svg",
    priority: "medium"
  }
];

const NewsSection = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Service Update": "bg-blue-500/10 text-blue-700 border-blue-500/20",
      "Infrastructure": "bg-purple-500/10 text-purple-700 border-purple-500/20",
      "Achievement": "bg-green-500/10 text-green-700 border-green-500/20",
      "Expansion": "bg-orange-500/10 text-orange-700 border-orange-500/20",
      "Technology": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
      "Sustainability": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
    };
    return colors[category] || "bg-muted/50 text-muted-foreground";
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Newspaper className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Latest Updates</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            News & Announcements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, updates, and developments from Kochi Metro
          </p>
        </div>

        {/* Featured News */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {newsItems.slice(0, 2).map((item) => (
            <Card key={item.id} className="overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-metro-teal/20 to-metro-blue/20 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-metro-teal/30" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-metro-teal transition-colors cursor-pointer">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.slice(2).map((item) => (
            <Card key={item.id} className="hover-lift cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={`text-xs ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="text-base group-hover:text-metro-teal transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All News & Updates
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
