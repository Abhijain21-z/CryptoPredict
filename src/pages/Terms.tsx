import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from "lucide-react";

const Terms = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using CryptoPredict, you agree to be bound by these Terms and Conditions",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Your continued use constitutes acceptance of any changes"
      ]
    },
    {
      icon: Shield,
      title: "Service Description",
      content: [
        "CryptoPredict provides cryptocurrency market analysis and educational content",
        "Our platform offers tools for analyzing market trends and data visualization",
        "We provide educational resources about cryptocurrency markets",
        "All content is for informational and educational purposes only"
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree not to use our services for any illegal or unauthorized purpose",
        "You must not attempt to interfere with or disrupt our services"
      ]
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We are not liable for any trading losses or investment decisions",
        "Our liability is limited to the maximum extent permitted by law",
        "We do not guarantee the accuracy of market data or predictions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of CryptoPredict and our cryptocurrency analysis services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Agreement Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Welcome to CryptoPredict. These Terms and Conditions ("Terms") govern your use of our website, 
                services, and any related applications or platforms (collectively, the "Services").
              </p>
              <p className="text-muted-foreground">
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                Please read these Terms carefully before using our Services.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <section.icon className="h-5 w-5 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notice */}
          <Card className="mb-8 border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 mb-4">
                <strong>No Financial Advice:</strong> CryptoPredict provides educational content and analysis tools only. 
                We do not provide financial, investment, or trading advice.
              </p>
              <p className="text-amber-700">
                <strong>Risk Warning:</strong> Cryptocurrency investments carry substantial risk of loss and may not be suitable for all investors. 
                Always conduct your own research and consult with qualified financial advisors before making investment decisions.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Content</h4>
                  <p className="text-sm text-muted-foreground">
                    All content on CryptoPredict, including but not limited to text, graphics, logos, and software, 
                    is the property of CryptoPredict or its licensors and is protected by intellectual property laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Your Content</h4>
                  <p className="text-sm text-muted-foreground">
                    You retain ownership of any content you submit to our Services, but grant us a license to use, 
                    display, and distribute such content in connection with our Services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Uses</h4>
                  <p className="text-sm text-muted-foreground">
                    You may not reproduce, distribute, modify, or create derivative works of our content without 
                    explicit written permission.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By You</h4>
                  <p className="text-sm text-muted-foreground">
                    You may stop using our Services at any time. If you have an account, you may delete it through 
                    your account settings or by contacting us.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Us</h4>
                  <p className="text-sm text-muted-foreground">
                    We may terminate or suspend your access to our Services at any time, with or without cause, 
                    and with or without notice, particularly if you violate these Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Effect of Termination</h4>
                  <p className="text-sm text-muted-foreground">
                    Upon termination, your right to use our Services will cease immediately, and we may delete 
                    your account and any associated data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About These Terms?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> legal@cryptopredict.com</p>
                <p><strong>Address:</strong> Legal Team, CryptoPredict, San Francisco, CA</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                These terms are governed by the laws of California, United States.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;