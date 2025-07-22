import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search cryptocurrencies..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-secondary/50 border-secondary focus:border-primary w-full"
      />
    </div>
  );
};

export default SearchBar;