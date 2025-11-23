import { Award, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-foreground mb-4">
            About <span className="text-primary">Our Club</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bebas text-foreground">
              Established 2017 in Paphos, Cyprus
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Paphos Boxing Club is Cyprus's premier boxing training academy, combining traditional boxing 
              techniques with modern training methodologies. Our mission is to develop champions both inside 
              and outside the ring.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a complete beginner looking to learn the basics or an experienced fighter 
              aiming to sharpen your skills, our world-class facility and expert coaching staff provide 
              the perfect environment for your boxing journey.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-primary font-bebas text-2xl">
                <div className="w-12 h-0.5 bg-primary" />
                Body Art Training Academy
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-glow transition-all duration-300">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-2xl font-bebas mb-3">Professional Coaching</h4>
              <p className="text-muted-foreground">
                Train with certified coaches who have decades of combined experience in competitive boxing 
                and training champions.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-glow transition-all duration-300">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-2xl font-bebas mb-3">Results-Driven Programs</h4>
              <p className="text-muted-foreground">
                Structured training programs designed to help you achieve your goals, whether fitness, 
                competition, or personal development.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-glow transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-2xl font-bebas mb-3">Supportive Community</h4>
              <p className="text-muted-foreground">
                Join a welcoming community of passionate boxers who support and motivate each other 
                to reach new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
