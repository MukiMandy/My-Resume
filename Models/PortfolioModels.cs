namespace SriMukesh.Portfolio.Models;

public record ContactMessageRequest(
    string Name,
    string Email,
    string Message
);

public record ContactMessageResponse(
    bool Success,
    string Message,
    DateTime Timestamp
);

public record PortfolioProfile(
    string Name,
    string Title,
    string Location,
    string Email,
    string Phone,
    string LinkedIn,
    string Behance,
    string Quote,
    string Summary,
    List<string> Roles,
    List<StatItem> Stats,
    List<ProjectItem> Projects,
    List<ExperienceItem> Experience,
    List<CertificationItem> Certifications,
    List<AchievementItem> Achievements
);

public record StatItem(string Label, string Value, string Suffix, string Description);

public record ProjectItem(
    string Id,
    string Title,
    string Subtitle,
    string Category,
    List<string> Tags,
    string Metric,
    string Description,
    string Gradient,
    CaseStudyDetails CaseStudy
);

public record CaseStudyDetails(string Problem, string Research, string Solution, string Impact);

public record ExperienceItem(
    string Company,
    string Project,
    string Role,
    string Period,
    string Type,
    string Location,
    List<string> Highlights,
    List<string> Technologies
);

public record CertificationItem(string Title, string Issuer, string Date, string Badge, string Description, bool Verified);

public record AchievementItem(string Title, string Organization, string Award, string Description, string Icon);
