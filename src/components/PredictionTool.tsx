import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const TOP_20_CRYPTOS = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "binancecoin", name: "BNB", symbol: "BNB" },
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "cardano", name: "Cardano", symbol: "ADA" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT" },
  { id: "chainlink", name: "Chainlink", symbol: "LINK" },
  { id: "litecoin", name: "Litecoin", symbol: "LTC" },
  { id: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH" },
  { id: "stellar", name: "Stellar", symbol: "XLM" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
  { id: "matic-network", name: "Polygon", symbol: "MATIC" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
  { id: "uniswap", name: "Uniswap", symbol: "UNI" },
  { id: "cosmos", name: "Cosmos", symbol: "ATOM" },
  { id: "algorand", name: "Algorand", symbol: "ALGO" },
  { id: "near", name: "NEAR Protocol", symbol: "NEAR" },
  { id: "fantom", name: "Fantom", symbol: "FTM" },
  { id: "sandbox", name: "The Sandbox", symbol: "SAND" },
  { id: "decentraland", name: "Decentraland", symbol: "MANA" }
];

const TIME_PERIODS = [
  { value: "1h", label: "1 Hour" },
  { value: "24h", label: "24 Hours" },
  { value: "7d", label: "7 Days" },
  { value: "30d", label: "30 Days" }
];

const PredictionTool = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<typeof TOP_20_CRYPTOS[0] | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generatePrediction = () => {
    if (!selectedCrypto || !selectedPeriod) return;
    
    setIsLoading(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const currentPrice = Math.random() * 50000 + 1000;
      const changePercent = (Math.random() - 0.5) * 20; // -10% to +10%
      const predictedPrice = currentPrice * (1 + changePercent / 100);
      
      setPrediction({
        crypto: selectedCrypto,
        period: selectedPeriod,
        currentPrice: currentPrice.toFixed(2),
        predictedPrice: predictedPrice.toFixed(2),
        changePercent: changePercent.toFixed(2),
        confidence: Math.random() * 30 + 70, // 70-100%
        factors: [
          "Market sentiment analysis",
          "Technical indicators",
          "Trading volume patterns",
          "Historical price movements"
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-lg p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Crypto Price Prediction</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Select Cryptocurrency</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedCrypto ? `${selectedCrypto.name} (${selectedCrypto.symbol})` : "Choose crypto"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full max-h-60 overflow-y-auto bg-secondary border-secondary">
              {TOP_20_CRYPTOS.map((crypto) => (
                <DropdownMenuItem 
                  key={crypto.id} 
                  onClick={() => setSelectedCrypto(crypto)}
                  className="hover:bg-primary/10"
                >
                  {crypto.name} ({crypto.symbol})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Time Period</label>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="bg-secondary/50 border-secondary">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-secondary border-secondary">
              {TIME_PERIODS.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={generatePrediction}
            disabled={!selectedCrypto || !selectedPeriod || isLoading}
            className="w-full"
          >
            {isLoading ? "Analyzing..." : "Get Prediction"}
          </Button>
        </div>
      </div>
      
      {prediction && (
        <Card className="bg-secondary/30 border-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Prediction for {prediction.crypto.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Price:</span>
                  <span className="font-medium">${prediction.currentPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Predicted Price:</span>
                  <span className="font-medium">${prediction.predictedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Change:</span>
                  <span className={`font-medium ${parseFloat(prediction.changePercent) >= 0 ? 'text-success' : 'text-warning'}`}>
                    {prediction.changePercent}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confidence:</span>
                  <span className="font-medium">{prediction.confidence.toFixed(0)}%</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Analysis Factors:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {prediction.factors.map((factor, index) => (
                    <li key={index}>• {factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PredictionTool;