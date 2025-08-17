import CountdownTimer from "@/components/CountdownTimer";
import EmailNotifyForm from "@/components/EmailNotifyForm";
const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl mx-auto text-center space-y-16">
          
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="text-2xl font-bold tracking-wider text-text-primary">
              WUFAI
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-hero">
              WUFAI
            </h1>
            
            {/* Subheading */}
            <h2 className="text-subtitle">
              Curating Bhutan & Kenya, Differently.
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
      <footer className="py-8 text-center">
        <p className="text-footer">
          Coming Soon. Stay tuned for the future of destination travel.
        </p>
      </footer>
    </div>
  );
};

export default Index;
