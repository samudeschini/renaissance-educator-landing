
import { useState, useEffect } from "react";
import { X, Linkedin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts
    setLoaded(true);
    // This ensures animations have a chance to complete
    return () => {
      // Clean up function to prevent memory leaks
      setLoaded(false);
      setImageLoaded(false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Navigation/Header */}
        <header 
          className={cn(
            "mb-16 transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-center font-playfair text-renaissance">
            Renaissance Educator
          </h1>
        </header>

        {/* About Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div 
              className={cn(
                "md:col-span-5 transition-opacity duration-700",
                loaded ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary/30 aspect-square">
                <img
                  src="/lovable-uploads/d28d213b-be69-4493-b021-7bdc768878ce.png"
                  alt="Sam Vuong"
                  className={cn(
                    "profile-image w-full h-full transition-opacity duration-700 ease-in-out",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary/80 rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            <div 
              className={cn(
                "md:col-span-7 transition-opacity duration-700 delay-100",
                loaded ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                About
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-playfair">
                Sam Vuong
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground mb-8 font-playfair">
                Hi, I'm Sam. I'm a former teacher, who left to work in edtech startups and later crypto. I'm on a mission to spark a new education renaissance.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section 
          className={cn(
            "mb-24 transition-opacity duration-700 delay-200",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Newsletter
          </div>
          <div className="bg-secondary/20 rounded-xl p-8 md:p-10">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-medium mb-3 font-playfair">
                Join the Education Renaissance
              </h3>
              <p className="text-muted-foreground font-playfair">
                Subscribe to my newsletter for insights on education, technology, and creating a better future for learning.
              </p>
            </div>
            <div className="flex justify-center w-full overflow-hidden">
              <iframe 
                src="https://samvuong.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{ border: "1px solid #EEE", background: "white" }} 
                frameBorder="0" 
                scrolling="no"
                title="Newsletter Signup"
                className="max-w-lg mx-auto rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Selected Works */}
        <section 
          className={cn(
            "mb-24 transition-opacity duration-700 delay-200",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Selected Works
          </div>
          
          <div className="space-y-8">
            <article className="group">
              <a 
                href="https://samvuong.substack.com/p/why-i-left-teaching-and-now-work-in-crypto?r=3hcsl2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block space-y-2"
              >
                <h3 className="text-xl md:text-2xl font-medium group-hover:text-primary/90 transition-colors article-link inline-flex items-center gap-1 font-playfair">
                  Why I Left Teaching and Now Work in Crypto
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity" />
                </h3>
                <div className="w-full h-px bg-border group-hover:bg-primary/20 transition-colors"></div>
              </a>
            </article>
            
            <article className="group">
              <a 
                href="https://samvuong.substack.com/p/can-montessori-work-for-middle-schoolers?r=3hcsl2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block space-y-2"
              >
                <h3 className="text-xl md:text-2xl font-medium group-hover:text-primary/90 transition-colors article-link inline-flex items-center gap-1 font-playfair">
                  Can Montessori Work for Middle Schoolers?
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity" />
                </h3>
                <div className="w-full h-px bg-border group-hover:bg-primary/20 transition-colors"></div>
              </a>
            </article>
          </div>
        </section>

        {/* Social Links */}
        <footer 
          className={cn(
            "transition-opacity duration-700 delay-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex justify-center space-x-6">
            <a 
              href="https://x.com/samjvuong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors social-icon"
              aria-label="Twitter/X Profile"
            >
              <X className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/samjanevuong/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors social-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
