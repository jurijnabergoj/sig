interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: "primary" | "secondary";
}

const PageHeader = ({ title, subtitle, variant = "primary" }: PageHeaderProps) => {
  return (
    <div className={`${variant === "primary" ? "gradient-hero" : "bg-secondary"} py-6`}>
      <div className="container mx-auto px-4">
        <h1 className={`text-2xl md:text-4xl ${
          variant === "primary" ? "text-primary-foreground" : "text-secondary-foreground"
        } mb-2`}>
          {title}
        </h1>
        {subtitle && (
          <h4 className={`text-md ${
            variant === "primary" ? "text-primary-foreground/80" : "text-secondary-foreground/80"
          }`}>
            {subtitle}
          </h4>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
