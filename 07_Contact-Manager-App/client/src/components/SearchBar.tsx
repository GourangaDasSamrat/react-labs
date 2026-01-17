import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useContacts } from '@/context/ContactContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContacts();

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search by name, email, or phone..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchBar;
