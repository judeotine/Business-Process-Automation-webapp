import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Automate Your Business Processes
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8">
          Design, deploy, and monitor automated workflows without coding. Streamline your operations and boost productivity.
        </p>
        <div className="flex gap-4">
          <Link href="/auth/signup">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <Bot className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">No-Code Automation</h3>
            <p className="text-muted-foreground">
              Build complex workflows with our intuitive drag-and-drop interface. No coding required.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <Zap className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Instant Integration</h3>
            <p className="text-muted-foreground">
              Connect with your favorite tools and services in minutes using our pre-built integrations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <Shield className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Rest easy with our enterprise-grade security features and compliance standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}