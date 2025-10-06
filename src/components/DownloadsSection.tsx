import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Map, Calendar, BookOpen, FileImage, Info } from 'lucide-react';

const downloadCategories = [
  {
    title: "Timetables & Schedules",
    icon: Calendar,
    color: "text-metro-teal",
    bgColor: "bg-metro-teal",
    items: [
      { name: "Complete Metro Timetable 2024", size: "2.4 MB", format: "PDF", downloads: "15.2K" },
      { name: "Line 1 Schedule", size: "856 KB", format: "PDF", downloads: "8.7K" },
      { name: "Line 2 Schedule", size: "742 KB", format: "PDF", downloads: "6.1K" },
      { name: "Holiday Schedule 2024", size: "512 KB", format: "PDF", downloads: "3.4K" }
    ]
  },
  {
    title: "Maps & Routes",
    icon: Map,
    color: "text-metro-blue",
    bgColor: "bg-metro-blue",
    items: [
      { name: "Metro Network Map (High Resolution)", size: "5.8 MB", format: "PDF", downloads: "22.3K" },
      { name: "Station Area Maps - All Stations", size: "12.4 MB", format: "ZIP", downloads: "9.8K" },
      { name: "Line 1 Route Map", size: "3.2 MB", format: "PDF", downloads: "11.5K" },
      { name: "Line 2 Route Map", size: "2.9 MB", format: "PDF", downloads: "8.9K" },
      { name: "Feeder Bus Routes", size: "4.1 MB", format: "PDF", downloads: "5.2K" }
    ]
  },
  {
    title: "Fare & Ticketing",
    icon: FileText,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    items: [
      { name: "Fare Chart & Pricing", size: "1.1 MB", format: "PDF", downloads: "18.9K" },
      { name: "Smart Card User Guide", size: "2.3 MB", format: "PDF", downloads: "12.4K" },
      { name: "Group Booking Information", size: "890 KB", format: "PDF", downloads: "4.7K" },
      { name: "Monthly Pass Details", size: "1.5 MB", format: "PDF", downloads: "7.8K" }
    ]
  },
  {
    title: "Passenger Guides",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-600",
    items: [
      { name: "First Time Rider Guide", size: "3.7 MB", format: "PDF", downloads: "14.2K" },
      { name: "Safety & Security Guidelines", size: "2.1 MB", format: "PDF", downloads: "6.5K" },
      { name: "Accessibility Services Guide", size: "1.8 MB", format: "PDF", downloads: "3.9K" },
      { name: "Metro Etiquette & Rules", size: "1.2 MB", format: "PDF", downloads: "5.1K" }
    ]
  },
  {
    title: "Station Information",
    icon: Info,
    color: "text-green-600",
    bgColor: "bg-green-600",
    items: [
      { name: "Station Facilities Directory", size: "4.2 MB", format: "PDF", downloads: "8.3K" },
      { name: "Parking Information - All Stations", size: "2.8 MB", format: "PDF", downloads: "7.6K" },
      { name: "Last Mile Connectivity Guide", size: "3.5 MB", format: "PDF", downloads: "5.9K" }
    ]
  },
  {
    title: "Media & Brochures",
    icon: FileImage,
    color: "text-cyan-600",
    bgColor: "bg-cyan-600",
    items: [
      { name: "Kochi Metro Brochure 2024", size: "8.9 MB", format: "PDF", downloads: "11.7K" },
      { name: "Metro Photos Collection", size: "45.2 MB", format: "ZIP", downloads: "4.2K" },
      { name: "Annual Report 2023-24", size: "15.6 MB", format: "PDF", downloads: "6.8K" },
      { name: "Sustainability Report", size: "6.4 MB", format: "PDF", downloads: "2.9K" }
    ]
  }
];

const DownloadsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Resources</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Downloads & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access timetables, maps, guides, and other helpful resources for your metro journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {downloadCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>
                        {category.items.length} resources available
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all cursor-pointer border border-transparent hover:border-border"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm group-hover:text-metro-teal transition-colors truncate">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.format}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{item.size}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.downloads} downloads
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Links */}
        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-metro-teal/5 to-metro-blue/5 border-metro-teal/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-metro-teal" />
              Need Help?
            </CardTitle>
            <CardDescription>
              Can't find what you're looking for? We're here to help
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Request Custom Document
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download All Resources
              </Button>
              <Button variant="outline" className="gap-2">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadsSection;
