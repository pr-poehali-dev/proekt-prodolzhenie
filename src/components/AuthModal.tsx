import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AuthModalProps {
  showAuth: boolean;
  setShowAuth: (show: boolean) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  handleAuth: (email: string, password: string) => void;
}

const AuthModal = ({
  showAuth,
  setShowAuth,
  isLogin,
  setIsLogin,
  handleAuth
}: AuthModalProps) => {
  if (!showAuth) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setShowAuth(false)}>
      <Card className="bg-card/95 backdrop-blur-md border-primary/30 w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {isLogin ? 'Вход в аккаунт' : 'Регистрация'}
            <button onClick={() => setShowAuth(false)}>
              <Icon name="X" size={24} className="text-muted-foreground hover:text-foreground" />
            </button>
          </CardTitle>
          <CardDescription>
            {isLogin ? 'Войдите чтобы сохранить свои истории' : 'Создайте аккаунт для путешествия в мир историй'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-primary/20 focus:border-primary/50 outline-none transition-all"
              id="auth-email"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm">Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-primary/20 focus:border-primary/50 outline-none transition-all"
              id="auth-password"
            />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm">Повторите пароль</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-primary/20 focus:border-primary/50 outline-none transition-all"
              />
            </div>
          )}

          <Button 
            className="w-full bg-primary hover:bg-primary/80"
            onClick={() => {
              const email = (document.getElementById('auth-email') as HTMLInputElement)?.value;
              const password = (document.getElementById('auth-password') as HTMLInputElement)?.value;
              if (email && password) handleAuth(email, password);
            }}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>

          {isLogin && (
            <button className="w-full text-sm text-muted-foreground hover:text-accent transition-all">
              Забыли пароль? Восстановить через почту
            </button>
          )}

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-accent hover:underline"
            >
              {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
