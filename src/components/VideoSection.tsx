import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "How Cardiovita Works",
      thumbnail: "/video-thumb-1.jpg",
      duration: "3:42"
    },
    {
      id: 2,
      title: "Real Customer Testimonials",
      thumbnail: "/video-thumb-2.jpg",
      duration: "5:18"
    },
    {
      id: 3,
      title: "The Science Behind The Formula",
      thumbnail: "/video-thumb-3.jpg",
      duration: "4:25"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See The Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn how thousands are transforming their health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary fill-primary" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;