import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";
import PredictionTool from "@/components/PredictionTool";
import CryptoAnalyzer from "@/components/CryptoAnalyzer";
import CryptoCalculator from "@/components/CryptoCalculator";


const Index = () => {
  
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Crypto Price Prediction</h1>
            <p className="text-muted-foreground mb-4">Welcome back to your portfolio</p>
          </div>
        </header>
        
        <MarketStats />
        
        <div className="mb-8">
          <PredictionTool />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <CryptoChart />
          </div>
          <div>
            <PortfolioCard />
          </div>
        </div>
        
        <CryptoAnalyzer />
        
        <CryptoList />
        
        <CryptoCalculator />
      </div>
    </div>
  );
};

export default Index;