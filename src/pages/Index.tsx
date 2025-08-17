import CountdownTimer from "@/components/CountdownTimer";
import EmailNotifyForm from "@/components/EmailNotifyForm";
const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl mx-auto text-center space-y-12">
          
          {/* Logo Section */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/938e4f3b-6dfe-4057-8ebb-f9827640925a.png" 
              alt="WUFAI Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-hero">
              WUFAI
            </h1>
            
            {/* Subheading */}
            <h2 className="text-subtitle">
              A Travel Company Curating Bhutan & Kenya, Differently.
            </h2>
            
            {/* Intro Line */}
            <p className="text-intro max-w-xl mx-auto">
              We are creating an exclusive space for experiences and stories worth sharing.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center">
            <CountdownTimer />
          </div>

          {/* Email Notify Form */}
          <div className="w-full max-w-md mx-auto">
            <EmailNotifyForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-footer">
          Coming Soon. Stay tuned for the future of destination travel.
        </p>
      </footer>
    </div>
  );
};

export default Index;
