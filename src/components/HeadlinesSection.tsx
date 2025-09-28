import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const HeadlinesSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Lissie Metro Station Is Now Town Hall Metro Station",
      date: "March 15, 2020",
      excerpt: "Lissie Metro Station will now be known as Town Hall Metro Station...",
      image: "/api/placeholder/300/200",
      category: "Station Updates"
    },
    {
      id: 2,
      title: "KMRL's Ridership Zooms Ahead: Records All Time High On 1 January 2020",
      date: "January 2, 2020",
      excerpt: "Kochi Metro Rail Limited (KMRL) recorded its highest ever single day ridership...",
      image: "/api/placeholder/300/200",
      category: "Ridership"
    },
    {
      id: 3,
      title: "KMRL Conducts A Fun Event To Promote Use Of Public Transport And Cycling",
      date: "December 10, 2019",
      excerpt: "Kochi Metro Rail Limited organized a special event to promote sustainable transportation...",
      image: "/api/placeholder/300/200",
      category: "Events"
    },
    {
      id: 4,
      title: "FROM TODAY EVERY 15 March, 2020 WILL BE PUBLIC TRANSPORT DAY",
      date: "March 15, 2020",
      excerpt: "Kochi Metro announces special initiative to promote public transportation usage...",
      image: "/api/placeholder/300/200",
      category: "Announcements"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-metro-teal font-medium mb-2">Headlines</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Keeping Track
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kochi Metro has made it to the headlines of all major dailies. Get Kochi Metro news updates, articles and media releases in one single tab here:
            </p>
          </div>
          
          {/* Featured News Grid */}
          <div className="grid grid-cols-2 gap-4">
            {newsItems.slice(0, 4).map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-32 bg-gradient-to-br from-metro-teal to-blue-400"></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm text-gray-900 group-hover:text-metro-teal transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Full News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-metro-teal to-blue-400"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-metro-teal transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="text-metro-teal hover:text-metro-teal hover:bg-metro-teal/10 p-0">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadlinesSection;