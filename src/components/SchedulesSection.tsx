import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Download, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scheduleData = {
  weekday: {
    line1: {
      firstTrain: "5:45 AM",
      lastTrain: "10:00 PM",
      frequency: "6-8 minutes",
      peakHours: "7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM",
      peakFrequency: "4-6 minutes"
    },
    line2: {
      firstTrain: "6:00 AM",
      lastTrain: "9:45 PM",
      frequency: "8-10 minutes",
      peakHours: "7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM",
      peakFrequency: "6-8 minutes"
    }
  },
  weekend: {
    line1: {
      firstTrain: "6:00 AM",
      lastTrain: "10:00 PM",
      frequency: "8-10 minutes",
      peakHours: "10:00 AM - 6:00 PM",
      peakFrequency: "6-8 minutes"
    },
    line2: {
      firstTrain: "6:15 AM",
      lastTrain: "9:45 PM",
      frequency: "10-12 minutes",
      peakHours: "10:00 AM - 6:00 PM",
      peakFrequency: "8-10 minutes"
    }
  }
};

const holidaySchedules = [
  { date: "2024-04-14", name: "Vishu", schedule: "Sunday Schedule" },
  { date: "2024-08-15", name: "Independence Day", schedule: "Sunday Schedule" },
  { date: "2024-08-26", name: "Onam", schedule: "Extended Hours (5:00 AM - 11:00 PM)" },
  { date: "2024-10-02", name: "Gandhi Jayanti", schedule: "Sunday Schedule" },
  { date: "2024-12-25", name: "Christmas", schedule: "Sunday Schedule" }
];

const SchedulesSection = () => {
  const [dayType, setDayType] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Train Timings</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Metro Schedules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your journey with our comprehensive metro train schedules
          </p>
        </div>

        <Tabs defaultValue="weekday" className="w-full max-w-4xl mx-auto" onValueChange={(v) => setDayType(v as 'weekday' | 'weekend')}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="weekday" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Weekday (Mon-Fri)
            </TabsTrigger>
            <TabsTrigger value="weekend" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Weekend (Sat-Sun)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weekday" className="space-y-6">
            {/* Line 1 Schedule */}
            <Card className="border-l-4 border-l-metro-teal">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Line 1
                      <Badge variant="secondary">Aluva - Ernakulam South</Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Weekday Schedule (Monday - Friday)
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-metro-teal rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">First Train</span>
                      <span className="text-lg font-bold text-metro-teal">{scheduleData.weekday.line1.firstTrain}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">Last Train</span>
                      <span className="text-lg font-bold text-metro-teal">{scheduleData.weekday.line1.lastTrain}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Regular Frequency</p>
                      <p className="text-lg font-bold">{scheduleData.weekday.line1.frequency}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-metro-teal/10 to-metro-blue/10 rounded-lg border border-metro-teal/20">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Peak Hours</p>
                      <p className="text-xs mb-1">{scheduleData.weekday.line1.peakHours}</p>
                      <p className="text-lg font-bold text-metro-teal">{scheduleData.weekday.line1.peakFrequency}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Line 2 Schedule */}
            <Card className="border-l-4 border-l-metro-blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Line 2
                      <Badge variant="secondary" className="bg-metro-blue/20">Kadavanthra - Tripunithura</Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Weekday Schedule (Monday - Friday)
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-metro-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">First Train</span>
                      <span className="text-lg font-bold text-metro-blue">{scheduleData.weekday.line2.firstTrain}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">Last Train</span>
                      <span className="text-lg font-bold text-metro-blue">{scheduleData.weekday.line2.lastTrain}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Regular Frequency</p>
                      <p className="text-lg font-bold">{scheduleData.weekday.line2.frequency}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-metro-blue/10 to-metro-teal/10 rounded-lg border border-metro-blue/20">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Peak Hours</p>
                      <p className="text-xs mb-1">{scheduleData.weekday.line2.peakHours}</p>
                      <p className="text-lg font-bold text-metro-blue">{scheduleData.weekday.line2.peakFrequency}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekend" className="space-y-6">
            {/* Weekend Line 1 */}
            <Card className="border-l-4 border-l-metro-teal">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Line 1
                      <Badge variant="secondary">Aluva - Ernakulam South</Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Weekend Schedule (Saturday - Sunday)
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-metro-teal rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">First Train</span>
                      <span className="text-lg font-bold text-metro-teal">{scheduleData.weekend.line1.firstTrain}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">Last Train</span>
                      <span className="text-lg font-bold text-metro-teal">{scheduleData.weekend.line1.lastTrain}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Regular Frequency</p>
                      <p className="text-lg font-bold">{scheduleData.weekend.line1.frequency}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-metro-teal/10 to-metro-blue/10 rounded-lg border border-metro-teal/20">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Peak Hours</p>
                      <p className="text-xs mb-1">{scheduleData.weekend.line1.peakHours}</p>
                      <p className="text-lg font-bold text-metro-teal">{scheduleData.weekend.line1.peakFrequency}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekend Line 2 */}
            <Card className="border-l-4 border-l-metro-blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Line 2
                      <Badge variant="secondary" className="bg-metro-blue/20">Kadavanthra - Tripunithura</Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Weekend Schedule (Saturday - Sunday)
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-metro-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">First Train</span>
                      <span className="text-lg font-bold text-metro-blue">{scheduleData.weekend.line2.firstTrain}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">Last Train</span>
                      <span className="text-lg font-bold text-metro-blue">{scheduleData.weekend.line2.lastTrain}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Regular Frequency</p>
                      <p className="text-lg font-bold">{scheduleData.weekend.line2.frequency}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-metro-blue/10 to-metro-teal/10 rounded-lg border border-metro-blue/20">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Peak Hours</p>
                      <p className="text-xs mb-1">{scheduleData.weekend.line2.peakHours}</p>
                      <p className="text-lg font-bold text-metro-blue">{scheduleData.weekend.line2.peakFrequency}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Holiday Schedule */}
        <Card className="mt-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Holiday & Special Event Schedules
            </CardTitle>
            <CardDescription>
              Metro operates on modified schedules during holidays and special events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {holidaySchedules.map((holiday, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div>
                    <p className="font-semibold">{holiday.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(holiday.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                  <Badge variant="outline">{holiday.schedule}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Timetable */}
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            <Download className="w-4 h-4 mr-2" />
            Download Complete Timetable (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchedulesSection;
