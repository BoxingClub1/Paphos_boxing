import { Dumbbell, Trophy, Heart, Zap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Beginner Boxing",
      description: "Learn the fundamentals of boxing including stance, footwork, and basic combinations in a supportive environment.",
      features: ["Basic techniques", "Fitness foundation", "Safety protocols", "3x per week"],
      color: "text-primary",
    },
    {
      icon: Trophy,
      title: "Competitive Training",
      description: "Advanced training program for aspiring competitive boxers with sparring, strategy, and fight preparation.",
      features: ["Advanced techniques", "Sparring sessions", "Competition prep", "5x per week"],
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Fitness Boxing",
      description: "High-intensity boxing workouts focused on cardiovascular fitness, strength, and weight management.",
      features: ["Cardio focused", "Weight loss", "Stress relief", "Flexible schedule"],
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Youth Program",
      description: "Specialized training for young athletes focusing on discipline, confidence, and fundamental boxing skills.",
      features: ["Age 8-17", "Character building", "Safe environment", "4x per week"],
      color: "text-primary",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-boxing-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas mb-4">
            Training <span className="text-primary">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the program that matches your goals and skill level. All programs include access to our 
            state-of-the-art facilities and expert coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-boxing-charcoal border border-primary/20 p-8 rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Icon className={`w-14 h-14 ${program.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bebas mb-3">{program.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            For more information about our programs, please contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
