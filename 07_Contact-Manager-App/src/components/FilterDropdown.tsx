import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useContacts } from '@/context/ContactContext';

const FilterDropdown = () => {
  const { sortBy, setSortBy } = useContacts();

  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="firstName">First Name (A → Z)</SelectItem>
        <SelectItem value="lastName">Last Name (A → Z)</SelectItem>
        <SelectItem value="oldest">Oldest First</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
