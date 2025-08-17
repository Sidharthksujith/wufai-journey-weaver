import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailNotifyForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "We'll notify you when WUFAI launches.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 text-base border-border-light rounded-xl bg-background"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 font-medium transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Notify Me'}
        </Button>
      </div>
    </form>
  );
};

export default EmailNotifyForm;