import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const LibrarySection = () => {
  return (
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
  );
};

export default LibrarySection;
