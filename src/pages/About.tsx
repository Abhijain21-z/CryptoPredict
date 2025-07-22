import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, Target, Award, BarChart3 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive market analysis tools and real-time data visualization."
    },
    {
      icon: TrendingUp,
      title: "Price Predictions",
      description: "AI-powered algorithms to help analyze cryptocurrency market trends."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data privacy and security are our top priorities."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced analysts and developers passionate about cryptocurrency."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Cryptocurrencies" },
    { number: "24/7", label: "Market Monitoring" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <TrendingUp className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">About CryptoPredict</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of cryptocurrency enthusiasts and data scientists dedicated to providing 
            comprehensive market analysis and educational resources for the crypto community.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To democratize cryptocurrency analysis by providing accessible, accurate, and comprehensive 
              market insights that empower users to make informed decisions in the digital asset space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading platform for cryptocurrency market analysis and education, 
                  helping millions of users navigate the complex world of digital assets with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Transparency in all our analysis</li>
                  <li>• Educational approach to complex topics</li>
                  <li>• User privacy and data protection</li>
                  <li>• Continuous innovation and improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools and resources for cryptocurrency analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground">
            Numbers that reflect our commitment to the crypto community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Important Notice</h3>
            <p className="text-muted-foreground">
              CryptoPredict provides educational content and analysis tools for informational purposes only. 
              We do not provide financial advice, and all investment decisions should be made at your own risk. 
              Always conduct your own research and consult with qualified financial advisors before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;