import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  backstory: string;
}

interface CharactersSectionProps {
  generatedCharacter: Character | null;
  generateCharacter: () => void;
  playSound: (type: 'hover' | 'click' | 'generate') => void;
}

const CharactersSection = ({ generatedCharacter, generateCharacter, playSound }: CharactersSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Генератор Персонажей</h2>
        
        <div className="text-center mb-8">
          <Button 
            size="lg" 
            onClick={generateCharacter}
            className="bg-primary hover:bg-primary/80 text-lg px-12 py-6"
          >
            <Icon name="Wand2" className="mr-2" size={24} />
            Сгенерировать персонажа
          </Button>
        </div>

        {generatedCharacter && (
          <Card className="bg-card/90 backdrop-blur border-primary/30 animate-scale-in">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{generatedCharacter.name}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {generatedCharacter.race} • {generatedCharacter.class} • Уровень {generatedCharacter.level}
                  </CardDescription>
                </div>
                <Badge className="bg-secondary text-card text-lg px-4 py-2">
                  LVL {generatedCharacter.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Характеристики</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(generatedCharacter.stats).map(([stat, value]) => (
                    <div key={stat} className="bg-muted/30 rounded-lg p-4 text-center border border-primary/20">
                      <div className="text-2xl font-bold text-primary">{value as number}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {stat === 'strength' && 'Сила'}
                        {stat === 'dexterity' && 'Ловкость'}
                        {stat === 'constitution' && 'Телосложение'}
                        {stat === 'intelligence' && 'Интеллект'}
                        {stat === 'wisdom' && 'Мудрость'}
                        {stat === 'charisma' && 'Харизма'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Предыстория</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {generatedCharacter.backstory}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  <Icon name="Save" className="mr-2" size={18} />
                  Сохранить
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Share2" className="mr-2" size={18} />
                  Поделиться
                </Button>
                <Button variant="outline" className="flex-1" onClick={generateCharacter}>
                  <Icon name="RefreshCw" className="mr-2" size={18} />
                  Новый
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {!generatedCharacter && (
          <Card className="bg-card/50 backdrop-blur border-dashed border-primary/30">
            <CardContent className="text-center py-16">
              <Icon name="Sparkles" className="mx-auto text-muted-foreground mb-4" size={48} />
              <p className="text-muted-foreground text-lg">
                Нажми кнопку выше, чтобы создать своего первого персонажа
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CharactersSection;
