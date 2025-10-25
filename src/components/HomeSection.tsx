import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import HeroCarousel from './HeroCarousel';

interface HomeSectionProps {
  user: { email: string } | null;
  setActiveSection: (section: string) => void;
  setShowAuth: (show: boolean) => void;
  playSound: (type: 'hover' | 'click' | 'generate') => void;
}

const HomeSection = ({ user, setActiveSection, setShowAuth, playSound }: HomeSectionProps) => {
  return (
    <>
      <HeroCarousel playSound={playSound} />
      
      <section className="container mx-auto px-4 py-20 text-center relative z-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge className="bg-primary/20 text-accent border-primary/30 text-lg px-6 py-2">
            ✨ Powered by DeepSeek AI
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Midnight Chronicles
          </h1>
          <p className="text-2xl story-text max-w-3xl mx-auto leading-relaxed">
            <span className="text-foreground/90">Погрузись в мир интерактивных историй, где</span>{' '}
            <span className="text-accent font-semibold">DeepSeek AI</span>{' '}
            <span className="text-foreground/90">становится твоим личным рассказчиком.</span>
            <br />
            <span className="text-muted-foreground italic mt-4 block">
              Глубокие сюжеты без цензуры. Каждое решение меняет историю. Твоё путешествие начинается здесь.
            </span>
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-lg px-8 py-6"
              onClick={() => { 
                if (!user) {
                  setShowAuth(true);
                } else {
                  setActiveSection('characters'); 
                }
                playSound('click'); 
              }}
              onMouseEnter={() => playSound('hover')}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Начать историю
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-lg px-8 py-6"
              onClick={() => { setActiveSection('community'); playSound('click'); }}
              onMouseEnter={() => playSound('hover')}
            >
              <Icon name="Users" className="mr-2" size={20} />
              Сообщество
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
              <CardHeader>
                <Icon name="BookOpen" className="text-primary mb-2" size={40} />
                <CardTitle>Интерактивные истории</CardTitle>
                <CardDescription className="story-text">Нейросеть создаёт уникальный сюжет на основе твоих выборов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
              <CardHeader>
                <Icon name="Brain" className="text-accent mb-2" size={40} />
                <CardTitle>DeepSeek AI</CardTitle>
                <CardDescription className="story-text">Глубокие истории без цензуры и ограничений</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
              <CardHeader>
                <Icon name="Users" className="text-secondary mb-2" size={40} />
                <CardTitle>Сообщество</CardTitle>
                <CardDescription className="story-text">Делись историями и находи единомышленников</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
