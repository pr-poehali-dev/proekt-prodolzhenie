import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SettingsModalProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  musicVolume: number;
  setMusicVolume: (volume: number) => void;
  soundVolume: number;
  setSoundVolume: (volume: number) => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const SettingsModal = ({
  showSettings,
  setShowSettings,
  musicVolume,
  setMusicVolume,
  soundVolume,
  setSoundVolume,
  isMusicPlaying,
  toggleMusic
}: SettingsModalProps) => {
  if (!showSettings) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setShowSettings(false)}>
      <Card className="bg-card/95 backdrop-blur-md border-primary/30 w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Настройки
            <button onClick={() => setShowSettings(false)}>
              <Icon name="X" size={24} className="text-muted-foreground hover:text-foreground" />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm">Фоновая музыка</label>
              <span className="text-sm text-muted-foreground">{Math.round(musicVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={musicVolume * 100}
              onChange={(e) => setMusicVolume(Number(e.target.value) / 100)}
              className="w-full accent-primary"
            />
            <button
              onClick={toggleMusic}
              className="w-full px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-all"
            >
              <Icon name={isMusicPlaying ? 'Volume2' : 'VolumeX'} className="inline mr-2" size={18} />
              {isMusicPlaying ? 'Выключить музыку' : 'Включить музыку'}
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm">Звуки интерфейса</label>
              <span className="text-sm text-muted-foreground">{Math.round(soundVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={soundVolume * 100}
              onChange={(e) => setSoundVolume(Number(e.target.value) / 100)}
              className="w-full accent-primary"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsModal;
