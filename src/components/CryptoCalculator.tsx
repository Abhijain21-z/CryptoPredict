import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const CryptoCalculator = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [taxRate, setTaxRate] = useState("");
  const [platformFee, setPlatformFee] = useState("");
  const [otherCharges, setOtherCharges] = useState("");
  
  const cryptoOptions = [
    { name: "Bitcoin", symbol: "BTC", price: 43250 },
    { name: "Ethereum", symbol: "ETH", price: 2580 },
    { name: "Binance Coin", symbol: "BNB", price: 315 },
    { name: "Cardano", symbol: "ADA", price: 0.52 },
    { name: "Solana", symbol: "SOL", price: 98.5 },
    { name: "Polkadot", symbol: "DOT", price: 7.2 },
    { name: "Dogecoin", symbol: "DOGE", price: 0.085 },
    { name: "Avalanche", symbol: "AVAX", price: 38.5 }
  ];

  const currencies = [
    { code: "USD", name: "US Dollar", rate: 1, symbol: "$" },
    { code: "INR", name: "Indian Rupee", rate: 83.12, symbol: "₹" },
    { code: "EUR", name: "Euro", rate: 0.85, symbol: "€" },
    { code: "GBP", name: "British Pound", rate: 0.73, symbol: "£" },
    { code: "JPY", name: "Japanese Yen", rate: 110.5, symbol: "¥" },
    { code: "CAD", name: "Canadian Dollar", rate: 1.25, symbol: "C$" },
    { code: "AUD", name: "Australian Dollar", rate: 1.45, symbol: "A$" },
    { code: "CNY", name: "Chinese Yuan", rate: 6.45, symbol: "¥" }
  ];

  useEffect(() => {
    if (selectedCrypto) {
      const crypto = cryptoOptions.find(c => c.symbol === selectedCrypto);
      if (crypto) {
        setCryptoPrice(crypto.price);
      }
    }
  }, [selectedCrypto]);

  useEffect(() => {
    const currency = currencies.find(c => c.code === selectedCurrency);
    if (currency) {
      setExchangeRate(currency.rate);
    }
  }, [selectedCurrency]);

  const calculateFinalPrice = () => {
    if (!amount || !cryptoPrice) return 0;

    const cryptoAmount = parseFloat(amount);
    const basePrice = cryptoAmount * cryptoPrice;
    const convertedPrice = basePrice * exchangeRate;
    
    const tax = convertedPrice * (parseFloat(taxRate) || 0) / 100;
    const platform = convertedPrice * (parseFloat(platformFee) || 0) / 100;
    const other = parseFloat(otherCharges) || 0;
    
    return convertedPrice + tax + platform + other;
  };

  const getBreakdown = () => {
    if (!amount || !cryptoPrice) return null;

    const cryptoAmount = parseFloat(amount);
    const basePrice = cryptoAmount * cryptoPrice;
    const convertedPrice = basePrice * exchangeRate;
    const tax = convertedPrice * (parseFloat(taxRate) || 0) / 100;
    const platform = convertedPrice * (parseFloat(platformFee) || 0) / 100;
    const other = parseFloat(otherCharges) || 0;
    const finalPrice = calculateFinalPrice();

    return {
      basePrice: convertedPrice,
      tax,
      platform,
      other,
      finalPrice
    };
  };

  const breakdown = getBreakdown();
  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency);

  return (
    <section id="calculator" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-6xl mx-auto bg-secondary/50 border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-3xl mb-2">
            <Calculator className="h-8 w-8 text-primary" />
            Crypto Investment Calculator
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Calculate your crypto investment with taxes, fees, and currency conversion
          </p>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Crypto Selection */}
            <div className="space-y-2">
              <Label htmlFor="crypto">Select Cryptocurrency</Label>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose crypto" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border z-50">
                  {cryptoOptions.map((crypto) => (
                    <SelectItem key={crypto.symbol} value={crypto.symbol}>
                      {crypto.name} ({crypto.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Buy</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.00000001"
              />
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border z-50">
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.name} ({currency.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Current Price Display */}
            <div className="space-y-2">
              <Label>Current Price</Label>
              <div className="h-10 px-3 py-2 bg-muted rounded-md flex items-center">
                <span className="text-sm">
                  {selectedCurrencyData?.symbol}{(cryptoPrice * exchangeRate).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tax Rate */}
            <div className="space-y-2">
              <Label htmlFor="tax">Tax Rate (%)</Label>
              <Input
                id="tax"
                type="number"
                placeholder="0"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                step="0.1"
              />
            </div>

            {/* Platform Fee */}
            <div className="space-y-2">
              <Label htmlFor="platform">Platform Fee (%)</Label>
              <Input
                id="platform"
                type="number"
                placeholder="0"
                value={platformFee}
                onChange={(e) => setPlatformFee(e.target.value)}
                step="0.1"
              />
            </div>

            {/* Other Charges */}
            <div className="space-y-2">
              <Label htmlFor="other">Other Charges</Label>
              <Input
                id="other"
                type="number"
                placeholder="0"
                value={otherCharges}
                onChange={(e) => setOtherCharges(e.target.value)}
                step="0.01"
              />
            </div>
          </div>

          {/* Results */}
          {breakdown && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Price Breakdown
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>{selectedCurrencyData?.symbol}{breakdown.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax ({taxRate || 0}%):</span>
                    <span>{selectedCurrencyData?.symbol}{breakdown.tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee ({platformFee || 0}%):</span>
                    <span>{selectedCurrencyData?.symbol}{breakdown.platform.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other Charges:</span>
                    <span>{selectedCurrencyData?.symbol}{breakdown.other.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-success" />
                  Final Amount
                </h3>
                <div className="text-2xl font-bold text-success">
                  {selectedCurrencyData?.symbol}{breakdown.finalPrice.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  You will get {amount} {selectedCrypto}
                </div>
                <Button className="w-full mt-4">
                  Proceed to Buy
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      </div>
    </section>
  );
};

export default CryptoCalculator;
