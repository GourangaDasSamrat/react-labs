import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Contact, useContacts } from '@/context/ContactContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const navigate = useNavigate();
  const { addContact } = useContacts();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Omit<Contact, 'id' | 'createdAt'>) => {
    try {
      setIsLoading(true);
      await addContact(data);
      toast({
        title: 'Success',
        description: 'Contact added successfully!',
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add contact. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Contacts
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Add New Contact</CardTitle>
            <CardDescription>
              Fill in the details below to add a new contact to your list
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm
              onSubmit={handleSubmit}
              onCancel={() => navigate('/')}
              submitLabel="Add Contact"
              isLoading={isLoading}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddContact;
