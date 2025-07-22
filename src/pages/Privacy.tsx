import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Globe, UserCheck } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email)",
        "Usage data and analytics to improve our services",
        "Device information and browser data for security purposes",
        "Cookies and similar technologies for functionality"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our cryptocurrency analysis services",
        "To respond to your inquiries and support requests",
        "To send important updates about our platform",
        "To analyze usage patterns and enhance user experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard encryption protocols",
        "Regular security audits and vulnerability assessments",
        "Secure data storage with limited access controls",
        "No storage of sensitive financial information"
      ]
    },
    {
      icon: Globe,
      title: "Data Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Data may be shared with service providers under strict agreements",
        "Legal compliance may require data disclosure when required by law",
        "Anonymous, aggregated data may be used for research purposes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are committed to protecting your privacy and handling your data with care and transparency.
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
                <Eye className="h-5 w-5 text-primary" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                At CryptoPredict, we understand that your privacy is paramount. This Privacy Policy explains how we collect, 
                use, and protect your information when you use our cryptocurrency analysis platform and services.
              </p>
              <p className="text-muted-foreground">
                We are committed to compliance with GDPR, CCPA, and other applicable privacy regulations. 
                This policy is designed to be transparent and help you understand your rights regarding your personal data.
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

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">GDPR Rights (EU Users)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Right to access your personal data</li>
                    <li>• Right to rectification of inaccurate data</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">General Rights</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Request information about data collection</li>
                    <li>• Report data protection concerns</li>
                    <li>• Request data deletion</li>
                    <li>• Update your information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic functionality and security. These cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how users interact with our platform to improve our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AdSense Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Used to display relevant advertisements. You can manage ad preferences through your browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Copyright Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Copyright and Content Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Content Protection:</strong> All content on CryptoPredict, including analysis, predictions, 
                  articles, and tools, is protected by copyright and intellectual property laws. This content is for 
                  informational purposes only and not financial advice.
                </p>
                <p>
                  <strong>Third-Party Content:</strong> We may reference or link to third-party content and data sources. 
                  We respect all copyrights and trademarks of external sources and provide proper attribution where required.
                </p>
                <p>
                  <strong>User-Generated Content:</strong> By submitting content to our platform, you grant us a license 
                  to use, modify, and display that content. You retain ownership of your original content.
                </p>
                <p>
                  <strong>DMCA Compliance:</strong> If you believe any content infringes your copyright, please contact 
                  us at dmca@cryptopredict.com with details of the alleged infringement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Latest Crypto Blogs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Latest Crypto Blog Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest cryptocurrency analysis and market insights:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Bitcoin Price Analysis 2024</h4>
                    <p className="text-xs text-muted-foreground">Published: January 15, 2024</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Ethereum Staking Guide</h4>
                    <p className="text-xs text-muted-foreground">Published: January 12, 2024</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">DeFi Trends and Predictions</h4>
                    <p className="text-xs text-muted-foreground">Published: January 10, 2024</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Altcoin Market Analysis</h4>
                    <p className="text-xs text-muted-foreground">Published: January 8, 2024</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Crypto Tax Guidelines 2024</h4>
                    <p className="text-xs text-muted-foreground">Published: January 5, 2024</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">NFT Market Recovery Signals</h4>
                    <p className="text-xs text-muted-foreground">Published: January 3, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About Privacy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@cryptopredict.com</p>
                <p><strong>Data Protection Officer:</strong> dpo@cryptopredict.com</p>
                <p><strong>Address:</strong> Privacy Team, CryptoPredict, San Francisco, CA</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We will respond to privacy-related inquiries within 30 days as required by applicable law.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;