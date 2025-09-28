import { Play, Image as ImageIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import metroTrain from '@/assets/metro-train.jpg';

const MediaGallerySection = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Kochi Metro Rail being a perfect blend of advanced technology',
      thumbnail: metroTrain,
      duration: '2:45'
    },
    {
      id: 2,
      type: 'image',
      title: 'Metro Station Certificate',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      type: 'image',
      title: 'Train Operations',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      type: 'image',
      title: 'Metro Interior Design',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div>
            <div className="relative group cursor-pointer">
              <img
                src={metroTrain}
                alt="Kochi Metro Video"
                className="w-full h-80 object-cover rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full w-16 h-16 p-0">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 rounded p-2">
                  <p className="text-white text-sm font-medium">
                    Kochi Metro Rail being a perfect blend of advanced technology
                  </p>
                  <div className="flex items-center mt-1 text-white/80 text-xs">
                    <Video className="w-3 h-3 mr-1" />
                    Watch later
                    <span className="ml-auto">Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content and Gallery */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Media & Gallery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From the first-ever themed Metro stations to the brightest coaches, we bring to you a system that is not just a means of transportation but an extended part of your everyday life. Get a glimpse of how creative and unique we are:
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              {mediaItems.slice(1).map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="w-full h-32 bg-gradient-to-br from-metro-teal to-blue-400"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        {item.type === 'video' ? (
                          <Play className="w-6 h-6 text-white" fill="currentColor" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-xs font-medium line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <Button className="bg-metro-teal hover:bg-metro-teal/90 text-white">
                View All Media
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallerySection;