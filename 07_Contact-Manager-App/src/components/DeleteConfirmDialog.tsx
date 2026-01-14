import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Contact, useContacts } from '@/context/ContactContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface DeleteConfirmDialogProps {
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteConfirmDialog = ({
  contact,
  isOpen,
  onClose,
}: DeleteConfirmDialogProps) => {
  const { deleteContact } = useContacts();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!contact) return null;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteContact(contact.id);
      toast({
        title: 'Deleted',
        description: 'Contact has been deleted successfully.',
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete contact. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Contact</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete{' '}
            <span className="font-semibold text-foreground">
              {contact.firstName} {contact.lastName}
            </span>
            ? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmDialog;
