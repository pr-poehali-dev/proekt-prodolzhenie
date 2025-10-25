import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Icon from '@/components/ui/icon';

interface HeroCarouselProps {
  playSound: (type: 'hover' | 'click' | 'generate') => void;
}

const HeroCarousel = ({ playSound }: HeroCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const heroImages = [
    'https://cdn.poehali.dev/files/902a10c0-1041-4974-99e4-814f00cd8f66.jpg',
    'https://cdn.poehali.dev/files/551e82a5-ca95-4040-a740-c6af304236dd.jpeg',
    'https://cdn.poehali.dev/files/d738d541-5687-4f75-a0dc-4090bb5cda22.jpeg',
    'https://cdn.poehali.dev/files/dcb69336-e2e0-4b0d-b269-05d66e810674.jpeg',
    'https://cdn.poehali.dev/files/7c5ea764-f371-4fdd-a1a3-e38d0c869a2a.jpeg'
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      playSound('click');
    });

    let autoplay: NodeJS.Timeout;
    
    if (!isHovering) {
      autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    }

    return () => {
      if (autoplay) clearInterval(autoplay);
    };
  }, [emblaApi, isHovering, playSound]);

  return (
    <div 
      className="relative overflow-hidden" 
      ref={emblaRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex">
        {heroImages.map((img, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
            <div className="relative h-[70vh] w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a] z-10"></div>
              <div className="absolute inset-0 spotlight-effect z-[5]"></div>
              <img 
                src={img} 
                alt={`Hero ${idx + 1}`}
                className="w-full h-full object-cover"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                  filter: 'blur(0px) brightness(0.7)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => { scrollPrev(); playSound('click'); }}
        onMouseEnter={() => playSound('hover')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/20 hover:bg-primary/40 backdrop-blur-md p-3 rounded-full border border-primary/30 transition-all"
      >
        <Icon name="ChevronLeft" size={32} className="text-accent" />
      </button>
      <button
        onClick={() => { scrollNext(); playSound('click'); }}
        onMouseEnter={() => playSound('hover')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/20 hover:bg-primary/40 backdrop-blur-md p-3 rounded-full border border-primary/30 transition-all"
      >
        <Icon name="ChevronRight" size={32} className="text-accent" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { emblaApi?.scrollTo(idx); playSound('click'); }}
            onMouseEnter={() => playSound('hover')}
            className={`w-3 h-3 rounded-full transition-all blur-[0.5px] ${
              idx === selectedIndex ? 'bg-accent w-8' : 'bg-muted/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
