import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Pencil,
  Mail,
  Phone,
  Building,
  FileText,
  Calendar,
} from 'lucide-react';
import { Contact } from '@/context/ContactContext';
import { format } from 'date-fns';

interface ViewContactModalProps {
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (contact: Contact) => void;
}

const ViewContactModal = ({
  contact,
  isOpen,
  onClose,
  onEdit,
}: ViewContactModalProps) => {
  if (!contact) return null;

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-semibold">
              {getInitials(contact.firstName, contact.lastName)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {contact.firstName} {contact.lastName}
              </h3>
              {contact.company && (
                <p className="text-sm text-muted-foreground">
                  {contact.company}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{contact.phone}</span>
            </div>
            {contact.company && (
              <div className="flex items-center gap-3 text-foreground">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span>{contact.company}</span>
              </div>
            )}
            {contact.notes && (
              <div className="flex items-start gap-3 text-foreground">
                <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm">{contact.notes}</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <span>
                Added {format(new Date(contact.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => onEdit(contact)}>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewContactModal;
