import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
}

const NewsCard = ({ id, title, description, date, coverImage }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`}>
      <Card className="group overflow-hidden transition-smooth hover:shadow-medium hover:-translate-y-1 h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <time>{date}</time>
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-smooth">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
