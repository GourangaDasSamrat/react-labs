import { useState, useMemo } from 'react';
import { useContacts, Contact } from '@/context/ContactContext';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import FilterDropdown from '@/components/FilterDropdown';
import ContactCard from '@/components/ContactCard';
import EmptyState from '@/components/EmptyState';
import ViewContactModal from '@/components/ViewContactModal';
import EditContactModal from '@/components/EditContactModal';
import DeleteConfirmDialog from '@/components/DeleteConfirmDialog';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { contacts, loading, error, searchTerm, sortBy } = useContacts();
  const [viewContact, setViewContact] = useState<Contact | null>(null);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const [deleteContact, setDeleteContact] = useState<Contact | null>(null);

  const filteredAndSortedContacts = useMemo(() => {
    let result = [...contacts];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(term) ||
          contact.lastName.toLowerCase().includes(term) ||
          contact.email.toLowerCase().includes(term) ||
          contact.phone.includes(term),
      );
    }

    // Sort contacts
    result.sort((a, b) => {
      switch (sortBy) {
        case 'firstName':
          return a.firstName.localeCompare(b.firstName);
        case 'lastName':
          return a.lastName.localeCompare(b.lastName);
        case 'oldest':
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        default:
          return 0;
      }
    });

    return result;
  }, [contacts, searchTerm, sortBy]);

  const handleViewContact = (contact: Contact) => {
    setViewContact(contact);
  };

  const handleEditFromView = (contact: Contact) => {
    setViewContact(null);
    setEditContact(contact);
  };

  const LoadingSkeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="p-4 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Contacts
          </h1>
          <p className="text-muted-foreground">
            Manage and organize all your contacts in one place
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <SearchBar />
          <FilterDropdown />
        </div>

        {loading && <LoadingSkeleton />}

        {error && (
          <div className="text-center py-8">
            <p className="text-destructive mb-2">Error: {error}</p>
            <p className="text-muted-foreground text-sm">
              Make sure JSON-server is running on http://localhost:5000
            </p>
          </div>
        )}

        {!loading && !error && contacts.length === 0 && (
          <EmptyState type="no-contacts" />
        )}

        {!loading &&
          !error &&
          contacts.length > 0 &&
          filteredAndSortedContacts.length === 0 && (
            <EmptyState type="no-results" />
          )}

        {!loading && !error && filteredAndSortedContacts.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onView={handleViewContact}
                onEdit={setEditContact}
                onDelete={setDeleteContact}
              />
            ))}
          </div>
        )}

        {!loading && !error && contacts.length > 0 && (
          <p className="text-center text-muted-foreground text-sm mt-6">
            Showing {filteredAndSortedContacts.length} of {contacts.length}{' '}
            contacts
          </p>
        )}
      </main>

      <ViewContactModal
        contact={viewContact}
        isOpen={!!viewContact}
        onClose={() => setViewContact(null)}
        onEdit={handleEditFromView}
      />

      <EditContactModal
        contact={editContact}
        isOpen={!!editContact}
        onClose={() => setEditContact(null)}
      />

      <DeleteConfirmDialog
        contact={deleteContact}
        isOpen={!!deleteContact}
        onClose={() => setDeleteContact(null)}
      />
    </div>
  );
};

export default Index;
