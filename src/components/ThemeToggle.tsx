import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-2xl w-11 h-11 hover:bg-card/50 transition-all duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;
