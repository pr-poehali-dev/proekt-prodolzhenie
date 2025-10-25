import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  user: { email: string } | null;
  setUser: (user: { email: string } | null) => void;
  setShowAuth: (show: boolean) => void;
  setShowSettings: (show: boolean) => void;
  playSound: (type: 'hover' | 'click' | 'generate') => void;
}

const Navigation = ({
  activeSection,
  setActiveSection,
  user,
  setUser,
  setShowAuth,
  setShowSettings,
  playSound
}: NavigationProps) => {
  return (
    <nav className="border-b border-primary/20 bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Moon" className="text-accent" size={32} />
          <h1 className="text-2xl font-bold text-primary">Midnight Chronicles</h1>
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => { setActiveSection('community'); playSound('click'); }}
            onMouseEnter={() => playSound('hover')}
            className={`capitalize transition-all hover:text-primary ${
              activeSection === 'community' ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Сообщество
          </button>
          
          {!user && (
            <button
              onClick={() => { setShowAuth(true); playSound('click'); }}
              onMouseEnter={() => playSound('hover')}
              className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-all text-accent"
            >
              Войти
            </button>
          )}
          
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">{user.email}</span>
              <button
                onClick={() => { setUser(null); playSound('click'); }}
                onMouseEnter={() => playSound('hover')}
                className="text-muted-foreground hover:text-destructive transition-all"
              >
                <Icon name="LogOut" size={20} />
              </button>
            </div>
          )}

          <button
            onClick={() => { setShowSettings(true); playSound('click'); }}
            onMouseEnter={() => playSound('hover')}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-all"
            title="Настройки"
          >
            <Icon name="Settings" size={20} className="text-accent" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
