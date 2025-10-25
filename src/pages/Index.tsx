import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SettingsModal from '@/components/SettingsModal';
import AuthModal from '@/components/AuthModal';
import HomeSection from '@/components/HomeSection';
import CharactersSection from '@/components/CharactersSection';
import LibrarySection from '@/components/LibrarySection';
import CommunitySection from '@/components/CommunitySection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [generatedCharacter, setGeneratedCharacter] = useState<any>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [musicVolume, setMusicVolume] = useState(0.3);
  const [soundVolume, setSoundVolume] = useState(0.4);
  const [user, setUser] = useState<{email: string} | null>(null);
  
  const [backgroundMusic] = useState(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_4a888f744c.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    return audio;
  });

  useEffect(() => {
    backgroundMusic.volume = musicVolume;
  }, [musicVolume, backgroundMusic]);

  const playSound = (type: 'hover' | 'click' | 'generate') => {
    const sounds = {
      hover: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3',
      click: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c610232532.mp3',
      generate: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3'
    };
    const audio = new Audio(sounds[type]);
    audio.volume = soundVolume;
    audio.play().catch(() => {});
  };

  const handleAuth = (email: string, password: string) => {
    playSound('click');
    setUser({ email });
    setShowAuth(false);
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play().catch(() => {});
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const races = ['Человек', 'Эльф', 'Дварф', 'Орк', 'Полурослик'];
  const classes = ['Воин', 'Маг', 'Плут', 'Жрец', 'Следопыт'];

  const generateCharacter = () => {
    playSound('generate');
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
    <div className="min-h-screen bg-[#0a0e1a] relative overflow-hidden">
      <div className="stars-bg absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          user={user}
          setUser={setUser}
          setShowAuth={setShowAuth}
          setShowSettings={setShowSettings}
          playSound={playSound}
        />

        <SettingsModal
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          musicVolume={musicVolume}
          setMusicVolume={setMusicVolume}
          soundVolume={soundVolume}
          setSoundVolume={setSoundVolume}
          isMusicPlaying={isMusicPlaying}
          toggleMusic={toggleMusic}
        />

        <AuthModal
          showAuth={showAuth}
          setShowAuth={setShowAuth}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuth={handleAuth}
        />

        {activeSection === 'home' && (
          <HomeSection
            user={user}
            setActiveSection={setActiveSection}
            setShowAuth={setShowAuth}
            playSound={playSound}
          />
        )}

        {activeSection === 'characters' && (
          <CharactersSection
            generatedCharacter={generatedCharacter}
            generateCharacter={generateCharacter}
            playSound={playSound}
          />
        )}

        {activeSection === 'library' && <LibrarySection />}

        {activeSection === 'community' && <CommunitySection />}

        <footer className="border-t border-primary/20 mt-20 py-8 bg-card/30 backdrop-blur">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© 2024 Midnight Chronicles. Создавай магию каждый день.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
