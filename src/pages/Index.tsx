import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [generatedCharacter, setGeneratedCharacter] = useState<any>(null);

  const races = ['Человек', 'Эльф', 'Дварф', 'Орк', 'Полурослик'];
  const classes = ['Воин', 'Маг', 'Плут', 'Жрец', 'Следопыт'];

  const generateCharacter = () => {
    const race = races[Math.floor(Math.random() * races.length)];
    const charClass = classes[Math.floor(Math.random() * classes.length)];
    
    const character = {
      name: `${['Альдор', 'Теренс', 'Лирель', 'Морган', 'Каэль'][Math.floor(Math.random() * 5)]}`,
      race,
      class: charClass,
      level: Math.floor(Math.random() * 20) + 1,
      stats: {
        strength: Math.floor(Math.random() * 18) + 3,
        dexterity: Math.floor(Math.random() * 18) + 3,
        constitution: Math.floor(Math.random() * 18) + 3,
        intelligence: Math.floor(Math.random() * 18) + 3,
        wisdom: Math.floor(Math.random() * 18) + 3,
        charisma: Math.floor(Math.random() * 18) + 3,
      },
      backstory: [
        'Выросший в тени древних руин, познал тайны забытых цивилизаций.',
        'Потомок легендарных героев, несущий бремя славного рода.',
        'Странник из далёких земель, ищущий своё истинное предназначение.',
        'Хранитель древних знаний, защищающий мир от надвигающейся тьмы.'
      ][Math.floor(Math.random() * 4)]
    };
    
    setGeneratedCharacter(character);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#2D1B4E] to-[#1A1F2C]">
      <nav className="border-b border-primary/20 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Moon" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-primary">Midnight Chronicles</h1>
          </div>
          <div className="flex gap-6">
            {['home', 'characters', 'library', 'community'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-all hover:text-primary ${
                  activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'characters' && 'Персонажи'}
                {section === 'library' && 'Библиотека'}
                {section === 'community' && 'Сообщество'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge className="bg-primary/20 text-accent border-primary/30 text-lg px-6 py-2">
              ✨ Powered by AI
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Midnight Chronicles
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Создавай уникальные истории, персонажей и миры с помощью ИИ.
              <br />
              <span className="text-accent">Твоё путешествие без границ начинается сейчас.</span>
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-lg px-8 py-6"
                onClick={() => setActiveSection('characters')}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Создать персонажа
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-lg px-8 py-6"
                onClick={() => setActiveSection('library')}
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Библиотека
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-2" size={40} />
                  <CardTitle>Персонажи</CardTitle>
                  <CardDescription>Генерируй уникальных героев с детальными характеристиками</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
                <CardHeader>
                  <Icon name="Scroll" className="text-accent mb-2" size={40} />
                  <CardTitle>Истории</CardTitle>
                  <CardDescription>Создавай эпические сюжеты и приключения</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
                <CardHeader>
                  <Icon name="Globe" className="text-secondary mb-2" size={40} />
                  <CardTitle>Миры</CardTitle>
                  <CardDescription>Строй целые вселенные с богатой историей</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'characters' && (
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
      )}

      {activeSection === 'library' && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Библиотека Историй</h2>
            
            <Tabs defaultValue="stories" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="stories">Истории</TabsTrigger>
                <TabsTrigger value="worlds">Миры</TabsTrigger>
                <TabsTrigger value="campaigns">Кампании</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stories" className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover-scale">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Scroll" className="text-accent" size={24} />
                        История {i}: Тени Забытого Королевства
                      </CardTitle>
                      <CardDescription>
                        Эпическое приключение в мире древней магии и тёмных секретов
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Badge variant="outline">Фэнтези</Badge>
                        <Badge variant="outline">Приключения</Badge>
                        <Badge variant="outline">12 глав</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="worlds">
                <Card className="bg-card/50 border-dashed border-primary/30">
                  <CardContent className="text-center py-16">
                    <Icon name="Globe" className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-muted-foreground">Создай свой первый мир</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="campaigns">
                <Card className="bg-card/50 border-dashed border-primary/30">
                  <CardContent className="text-center py-16">
                    <Icon name="Map" className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-muted-foreground">Начни свою первую кампанию</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'community' && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Сообщество</h2>
            <Card className="bg-card/80 backdrop-blur border-primary/20">
              <CardContent className="py-16">
                <Icon name="Users" className="mx-auto text-primary mb-4" size={64} />
                <p className="text-xl text-muted-foreground mb-6">
                  Присоединяйся к сообществу создателей историй
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" variant="outline">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Форум
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Trophy" className="mr-2" size={20} />
                    Рейтинг
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t border-primary/20 mt-20 py-8 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Midnight Chronicles. Создавай магию каждый день.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
