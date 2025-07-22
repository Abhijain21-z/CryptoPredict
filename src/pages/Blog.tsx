import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Bitcoin Price Prediction 2024: Expert Analysis and Market Trends",
      excerpt: "Comprehensive analysis of Bitcoin's potential price movements in 2024, including technical indicators and market sentiment.",
      author: "Crypto Team",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Analysis",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Understanding Cryptocurrency Market Volatility",
      excerpt: "Learn about the factors that drive crypto market volatility and how to navigate uncertain market conditions.",
      author: "Market Analyst",
      date: "2024-01-10",
      readTime: "6 min",
      category: "Education",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Top 10 Altcoins to Watch in 2024",
      excerpt: "Discover the most promising alternative cryptocurrencies that could outperform the market this year.",
      author: "Research Team",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Research",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Crypto Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest cryptocurrency news, analysis, and educational content from our expert team.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">More Articles Coming Soon!</h3>
          <p className="text-muted-foreground">
            We're working on publishing more in-depth analysis and educational content about cryptocurrency markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;