
import { useState, useEffect } from "react";
import { Linkedin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

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
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-24 flex-1 flex flex-col">
        {/* Header */}
        <header 
          className={cn(
            "mb-8 sm:mb-12 transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center font-playfair text-renaissance mb-3 sm:mb-4">
            Renaissance Educator
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground font-playfair max-w-xl mx-auto">
            Join me on a mission to spark a new education renaissance
          </p>
        </header>

        {/* Profile Section */}
        <section 
          className={cn(
            "mb-8 sm:mb-12 transition-opacity duration-700 delay-100",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative overflow-hidden rounded-full mb-4 sm:mb-6">
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
                  <div className="w-6 sm:w-8 h-6 sm:h-8 border-2 border-primary/20 border-t-primary/80 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-playfair mb-2">
              Sam Vuong
            </h2>
            <p className="text-center text-sm sm:text-base font-light text-muted-foreground mb-4 font-playfair max-w-md px-4">
              Former teacher, now working in edtech and crypto, sharing insights on education's future.
            </p>
          </div>
        </section>

        {/* Newsletter Section - Main Focus */}
        <section 
          className={cn(
            "flex-1 transition-opacity duration-700 delay-200 flex flex-col",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="bg-secondary/20 rounded-xl p-5 sm:p-8 md:p-10 flex-1 flex flex-col">
            <div className="mb-5 sm:mb-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 font-playfair">
                Join the Education Renaissance
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-playfair max-w-lg mx-auto">
                Subscribe to my newsletter for insights on education, technology, and creating a better future for learning. I share thoughts weekly on transforming education.
              </p>
            </div>
            <div className="flex justify-center w-full overflow-hidden flex-1 flex flex-col items-center">
              <iframe 
                src="https://samvuong.substack.com/embed" 
                width={isMobile ? "100%" : "480"} 
                height="150" 
                style={{ border: "1px solid #EEE", background: "white", maxWidth: "100%" }} 
                frameBorder="0" 
                scrolling="no"
                title="Newsletter Signup"
                className="max-w-full mx-auto rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Selected Posts - Simple Version */}
        <section 
          className={cn(
            "mt-8 sm:mt-12 transition-opacity duration-700 delay-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <h4 className="text-center text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6 font-medium">
            Featured Essays
          </h4>
          
          <div className="space-y-4 sm:space-y-5 max-w-lg mx-auto px-2 sm:px-0">
            <article className="group">
              <a 
                href="https://samvuong.substack.com/p/why-i-left-teaching-and-now-work-in-crypto?r=3hcsl2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block space-y-2"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium group-hover:text-primary/90 transition-colors article-link inline-flex items-center gap-1 font-playfair text-center mx-auto">
                  Why I Left Teaching and Now Work in Crypto
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-70 transition-opacity" />
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
                <h3 className="text-base sm:text-lg md:text-xl font-medium group-hover:text-primary/90 transition-colors article-link inline-flex items-center gap-1 font-playfair text-center mx-auto">
                  Can Montessori Work for Middle Schoolers?
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-70 transition-opacity" />
                </h3>
                <div className="w-full h-px bg-border group-hover:bg-primary/20 transition-colors"></div>
              </a>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className={cn(
            "mt-8 sm:mt-12 transition-opacity duration-700 delay-400",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex justify-center space-x-6">
            <a 
              href="https://x.com/samjvuong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors social-icon"
              aria-label="Twitter/X Profile"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/samjanevuong/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors social-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
