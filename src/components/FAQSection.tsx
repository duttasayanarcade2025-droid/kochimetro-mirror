import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const FAQSection = () => {
  const faqs = [
    {
      category: "Ticketing & Fares",
      questions: [
        {
          q: "How do I purchase a metro ticket?",
          a: "You can purchase tickets at automated ticket vending machines (ATVMs) at all metro stations, through our mobile app, or at the ticket counter. We accept cash, cards, UPI, and digital wallets."
        },
        {
          q: "What are the fare charges?",
          a: "Metro fares range from ₹10 to ₹50 based on distance traveled. The minimum fare of ₹10 covers up to 2 km, while the maximum fare of ₹50 applies to journeys over 19 km. Smart card users enjoy a 5% discount."
        },
        {
          q: "Can I use the same smart card for multiple people?",
          a: "No, smart cards are designed for individual use only. Each passenger must have their own smart card or token for entry and exit through the automatic fare gates."
        },
        {
          q: "What is the validity of a metro token?",
          a: "Metro tokens are valid for single journey use only and must be used on the day of purchase. They are valid for 2 hours from the time of issue."
        }
      ]
    },
    {
      category: "Operations & Timings",
      questions: [
        {
          q: "What are the metro operating hours?",
          a: "The metro operates from 5:30 AM to 10:00 PM on weekdays and from 6:00 AM to 11:00 PM on weekends and public holidays. First and last train timings vary by station."
        },
        {
          q: "How frequent are the metro trains?",
          a: "During peak hours (7:00 AM - 10:00 AM and 5:00 PM - 8:00 PM), trains run every 5-7 minutes. During off-peak hours, the frequency is approximately 10-15 minutes."
        },
        {
          q: "Is there a transfer facility between lines?",
          a: "Yes, passengers can transfer between Line 1 and Line 2 at designated interchange stations. An additional 5 minutes should be allowed for transfers."
        }
      ]
    },
    {
      category: "Services & Facilities",
      questions: [
        {
          q: "Are metro stations accessible for persons with disabilities?",
          a: "Yes, all metro stations are fully accessible with elevators, tactile pathways, wheelchair-accessible toilets, reserved seating in trains, and assistance services. Contact station staff for any special requirements."
        },
        {
          q: "Can I carry luggage in the metro?",
          a: "Yes, passengers can carry reasonable personal luggage. Large items or items that may inconvenience other passengers should be avoided. Security screening is mandatory for all luggage."
        },
        {
          q: "Is WiFi available at metro stations?",
          a: "Free WiFi is available at select major stations. Look for 'KMRL-WiFi' network and follow the login instructions. Additional stations are being added to the WiFi network progressively."
        },
        {
          q: "Are there parking facilities at metro stations?",
          a: "Yes, most metro stations offer both two-wheeler and four-wheeler parking facilities. Parking charges vary by station and duration. Some stations also offer park-and-ride facilities with discounted metro fares."
        }
      ]
    },
    {
      category: "Safety & Security",
      questions: [
        {
          q: "What items are prohibited in the metro?",
          a: "Prohibited items include weapons, explosives, flammable substances, sharp objects, and items that may cause inconvenience or safety hazards to other passengers. All baggage is subject to security screening."
        },
        {
          q: "What should I do in case of emergency?",
          a: "In case of emergency, contact the nearest metro staff, use emergency help points available on platforms and inside trains, or call the emergency helpline. Follow staff instructions and remain calm."
        },
        {
          q: "How is metro safety ensured?",
          a: "We employ multiple safety measures including CCTV surveillance, security personnel at all stations, emergency communication systems, fire safety equipment, and regular safety drills. All trains have emergency buttons for passenger use."
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Help Center</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Kochi Metro services, ticketing, and facilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-metro-teal to-metro-purple rounded-full" />
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border rounded-lg px-4 hover:border-metro-teal/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:text-metro-teal hover:no-underline py-4">
                      <span className="font-medium pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-metro-teal/10 to-metro-purple/10 border-metro-teal/20">
            <div className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer support team is here to help you with any queries
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:18004251345" className="inline-block">
                  <Card className="hover-lift cursor-pointer">
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                      <p className="font-semibold text-metro-teal">1800-425-1345</p>
                    </div>
                  </Card>
                </a>
                <a href="mailto:info@kochimetro.org" className="inline-block">
                  <Card className="hover-lift cursor-pointer">
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                      <p className="font-semibold text-metro-teal">info@kochimetro.org</p>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;