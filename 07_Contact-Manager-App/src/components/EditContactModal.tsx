import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ContactForm from './ContactForm';
import { Contact, useContacts } from '@/context/ContactContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface EditContactModalProps {
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditContactModal = ({
  contact,
  isOpen,
  onClose,
}: EditContactModalProps) => {
  const { updateContact } = useContacts();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  if (!contact) return null;

  const handleSubmit = async (data: Omit<Contact, 'id' | 'createdAt'>) => {
    try {
      setIsLoading(true);
      await updateContact(contact.id, data);
      toast({
        title: 'Success',
        description: 'Contact updated successfully!',
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update contact. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Contact</DialogTitle>
        </DialogHeader>

        <ContactForm
          initialData={contact}
          onSubmit={handleSubmit}
          onCancel={onClose}
          submitLabel="Update Contact"
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditContactModal;
