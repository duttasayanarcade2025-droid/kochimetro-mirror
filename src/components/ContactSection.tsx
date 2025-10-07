import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Customer Care",
      details: ["1800-425-1345", "0484-2808080"],
      color: "text-metro-teal"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@kochimetro.org", "customercare@kochimetro.org"],
      color: "text-metro-purple"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["KMRL Corporate Office", "Palarivattom, Kochi - 682025"],
      color: "text-metro-blue"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "text-orange-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Get In Touch</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-metro-teal/10 to-metro-purple/10`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card className="bg-gradient-to-br from-metro-teal/10 to-metro-purple/10 border-metro-teal/20">
              <CardHeader>
                <CardTitle className="text-lg">Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  Lost & Found Inquiry
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Smart Card Issues
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Accessibility Services
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Corporate Inquiries
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-metro-teal/20 to-metro-blue/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-metro-teal/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map Location</p>
                <p className="text-sm text-muted-foreground">KMRL Corporate Office, Palarivattom</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;