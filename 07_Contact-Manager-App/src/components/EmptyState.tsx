import { Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  type: 'no-contacts' | 'no-results';
}

const EmptyState = ({ type }: EmptyStateProps) => {
  if (type === 'no-results') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/30 mb-4">
          <Search className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No Results Found
        </h3>
        <p className="text-muted-foreground max-w-sm">
          We couldn't find any contacts matching your search. Try adjusting your
          search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
        <Users className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        No Contact Information
      </h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        Your contact list is empty. Start by adding your first contact to keep
        track of your connections.
      </p>
      <Button asChild>
        <Link to="/add-contact">Add Your First Contact</Link>
      </Button>
    </div>
  );
};

export default EmptyState;
