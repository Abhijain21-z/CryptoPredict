import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Shield, BookOpen, Scale, DollarSign } from "lucide-react";

const Disclaimer = () => {
  const lastUpdated = "January 15, 2024";

  const riskFactors = [
    {
      title: "Market Volatility",
      description: "Cryptocurrency markets are highly volatile and can experience extreme price fluctuations"
    },
    {
      title: "Regulatory Risk",
      description: "Regulatory changes can significantly impact cryptocurrency markets and investments"
    },
    {
      title: "Technology Risk",
      description: "Technical issues, security breaches, or network problems can affect cryptocurrency values"
    },
    {
      title: "Liquidity Risk",
      description: "Some cryptocurrencies may have limited liquidity, making them difficult to buy or sell"
    },
    {
      title: "Counterparty Risk",
      description: "Exchanges and other service providers may fail or become insolvent"
    },
    {
      title: "Loss of Capital",
      description: "You may lose some or all of your invested capital when trading cryptocurrencies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-destructive/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Risk Disclaimer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information about the risks associated with cryptocurrency trading and investments.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Disclaimer */}
          <Card className="mb-8 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Important Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <p className="font-semibold text-destructive">
                  CryptoPredict does not provide financial, investment, or trading advice. All information provided on our platform is for educational and informational purposes only.
                </p>
                <p className="text-muted-foreground">
                  The content on this website, including but not limited to market analysis, price predictions, and educational materials, 
                  should not be construed as personalized investment advice or recommendations to buy, sell, or hold any cryptocurrency or other financial instrument.
                </p>
                <p className="text-muted-foreground">
                  <strong>You acknowledge and agree that any investment decisions you make are solely your responsibility and are made at your own risk.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* No Financial Advice */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Educational Content Only
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our platform provides educational content and analysis tools to help users understand cryptocurrency markets. 
                  This includes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market data visualization and analysis tools</li>
                  <li>• Educational articles about cryptocurrency technology</li>
                  <li>• Historical market trend analysis</li>
                  <li>• General information about blockchain technology</li>
                </ul>
                <p className="text-muted-foreground">
                  <strong>None of this content constitutes financial advice or investment recommendations.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                Risk Factors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Cryptocurrency trading and investing involves substantial risk of loss. Consider the following risk factors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riskFactors.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-semibold mb-2 text-destructive">{risk.title}</h4>
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accuracy Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Accuracy and Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties 
                  of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
                </p>
                <p>
                  <strong>Market predictions and analysis are inherently uncertain and may be incorrect.</strong> Past performance 
                  does not guarantee future results, and any reliance on historical data or trends is at your own risk.
                </p>
                <p>
                  Cryptocurrency markets operate 24/7 and can change rapidly. Information on our platform may not reflect 
                  the most current market conditions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Advice */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Seek Professional Advice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong>Before making any investment decisions, we strongly recommend consulting with qualified financial advisors, 
                  tax professionals, and legal counsel.</strong>
                </p>
                <p>
                  Consider your individual financial situation, risk tolerance, investment objectives, and time horizon. 
                  Professional advisors can help you determine if cryptocurrency investments are suitable for your specific circumstances.
                </p>
                <p>
                  Tax implications of cryptocurrency transactions vary by jurisdiction and individual circumstances. 
                  Consult with tax professionals to understand your obligations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability Limitation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong>CryptoPredict, its owners, employees, and affiliates shall not be liable for any direct, indirect, 
                  incidental, special, or consequential damages arising from your use of our platform or reliance on our content.</strong>
                </p>
                <p>
                  This includes but is not limited to:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Trading losses or investment losses</li>
                  <li>• Lost profits or missed opportunities</li>
                  <li>• Data loss or system downtime</li>
                  <li>• Third-party actions or omissions</li>
                </ul>
                <p>
                  You acknowledge that you use our platform at your own risk and that your sole remedy for any dissatisfaction 
                  with our services is to stop using them.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About This Disclaimer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this disclaimer or our policies, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> legal@cryptopredict.com</p>
                <p><strong>Address:</strong> Legal Team, CryptoPredict, San Francisco, CA</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By using our platform, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;