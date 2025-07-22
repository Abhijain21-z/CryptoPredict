import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TradingViewWidget from 'react-tradingview-widget';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fetchAllCryptos = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const CryptoAnalyzer = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [open, setOpen] = useState(false);
  
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ['allCryptos'],
    queryFn: fetchAllCryptos,
    refetchInterval: 60000, // Refetch every minute
  });

  const selectedCryptoData = cryptos?.find(crypto => crypto.id === selectedCrypto);

  const getTradingViewSymbol = (cryptoId: string) => {
    const symbolMap: { [key: string]: string } = {
      'bitcoin': 'BINANCE:BTCUSDT',
      'ethereum': 'BINANCE:ETHUSDT',
      'tether': 'BINANCE:USDCUSDT',
      'binancecoin': 'BINANCE:BNBUSDT',
      'solana': 'BINANCE:SOLUSDT',
      'cardano': 'BINANCE:ADAUSDT',
      'ripple': 'BINANCE:XRPUSDT',
      'avalanche-2': 'BINANCE:AVAXUSDT',
      'dogecoin': 'BINANCE:DOGEUSDT',
      'polkadot': 'BINANCE:DOTUSDT',
      'chainlink': 'BINANCE:LINKUSDT',
      'polygon': 'BINANCE:MATICUSDT',
      'litecoin': 'BINANCE:LTCUSDT',
      'bitcoin-cash': 'BINANCE:BCHUSDT',
      'stellar': 'BINANCE:XLMUSDT',
    };
    
    return symbolMap[cryptoId] || 'BINANCE:BTCUSDT';
  };

  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex flex-col space-y-4 mb-6">
        <h2 className="text-xl font-semibold">Analyse your Crypto here</h2>
        
        <div className="w-full max-w-md">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between bg-secondary/50 border-secondary focus:border-primary"
              >
                {selectedCrypto
                  ? cryptos?.find((crypto) => crypto.id === selectedCrypto)?.name
                  : "Select cryptocurrency..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0 bg-background border-secondary">
              <Command>
                <CommandInput placeholder="Search cryptocurrency..." className="border-none" />
                <CommandList>
                  <CommandEmpty>No cryptocurrency found.</CommandEmpty>
                  <CommandGroup className="max-h-64 overflow-y-auto">
                    {cryptos?.map((crypto) => (
                      <CommandItem
                        key={crypto.id}
                        value={crypto.id}
                        onSelect={(currentValue) => {
                          setSelectedCrypto(currentValue === selectedCrypto ? "" : currentValue);
                          setOpen(false);
                        }}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img src={crypto.image} alt={crypto.name} className="w-6 h-6 rounded-full" />
                        <div className="flex-1">
                          <span className="font-medium">{crypto.name}</span>
                          <span className="text-muted-foreground ml-2">({crypto.symbol.toUpperCase()})</span>
                        </div>
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedCrypto === crypto.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {selectedCryptoData && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src={selectedCryptoData.image} alt={selectedCryptoData.name} className="w-8 h-8 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{selectedCryptoData.name}</h3>
              <p className="text-muted-foreground">{selectedCryptoData.symbol.toUpperCase()}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-lg font-semibold">${selectedCryptoData.current_price.toLocaleString()}</p>
              <p className={`text-sm ${selectedCryptoData.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {selectedCryptoData.price_change_percentage_24h >= 0 ? '+' : ''}{selectedCryptoData.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <TradingViewWidget
              symbol={getTradingViewSymbol(selectedCrypto)}
              theme="Dark"
              locale="en"
              autosize
              hide_side_toolbar={false}
              allow_symbol_change={false}
              interval="D"
              toolbar_bg="#141413"
              enable_publishing={false}
              hide_top_toolbar={false}
              save_image={false}
              container_id={`tradingview_chart_${selectedCrypto}`}
            />
          </div>
        </div>
      )}

      {!selectedCrypto && !isLoading && (
        <div className="text-center py-12 text-muted-foreground">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Select a cryptocurrency to analyze its price history and data</p>
        </div>
      )}

      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-pulse">Loading cryptocurrencies...</div>
        </div>
      )}
    </div>
  );
};

export default CryptoAnalyzer;