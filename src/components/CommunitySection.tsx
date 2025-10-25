import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CommunitySection = () => {
  return (
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
  );
};

export default CommunitySection;
