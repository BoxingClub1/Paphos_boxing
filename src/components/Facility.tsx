import { Clock, MapPin, Wifi, Lock, Wind, Droplets } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const Facility = () => {
  const amenities = [
    { icon: Clock, label: "24/7 Access" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: Wind, label: "Air Conditioned" },
    { icon: Lock, label: "Secure Lockers" },
    { icon: Droplets, label: "Showers" },
    { icon: MapPin, label: "Central Location" },
  ];

  return (
    <section id="facility" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-foreground mb-4">
            World-Class <span className="text-primary">Facility</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bebas text-foreground">
              State-of-the-Art Equipment
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our 2,000+ sq ft facility features professional-grade boxing equipment, multiple training 
              areas, and everything you need to train like a champion.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Professional Boxing Ring</h4>
                  <p className="text-muted-foreground">Competition-standard ring for sparring and technique training</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Heavy Bags & Speed Bags</h4>
                  <p className="text-muted-foreground">Multiple training bags for power and speed development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cardio & Strength Equipment</h4>
                  <p className="text-muted-foreground">Modern equipment for comprehensive fitness training</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Training Zones</h4>
                  <p className="text-muted-foreground">Dedicated areas for different training styles and skill levels</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-deep h-[500px]">
            <img 
              src={gymInterior} 
              alt="Paphos Boxing Club Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-boxing-dark/80 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-lg text-center hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{amenity.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facility;
