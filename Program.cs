using SriMukesh.Portfolio.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseDefaultFiles();
app.UseStaticFiles();

// In-memory contact submission store
var contactSubmissions = new List<ContactMessageRequest>();

// 1. Health Endpoint
app.MapGet("/api/health", () => Results.Ok(new 
{ 
    Status = "Healthy", 
    App = "Sri Mukesh B - Modern UX/UI Portfolio (.NET Core + HTML5/CSS3/JS)",
    Timestamp = DateTime.UtcNow 
}));

// 2. Portfolio Data API Endpoint
app.MapGet("/api/portfolio", () =>
{
    var profile = new PortfolioProfile(
        Name: "Sri Mukesh B",
        Title: "UX/UI Designer & Product Thinker",
        Location: "Tirupattur, India",
        Email: "Srimukesh25@gmail.com",
        Phone: "+91 9944795780",
        LinkedIn: "https://linkedin.com",
        Behance: "https://behance.net",
        Quote: "I believe that consistency is key to solving the problems and creating impactful user experiences.",
        Summary: "Empathetic UX/UI Designer with 4+ years of experience in the IT industry. Skilled in crafting user-centric and visually appealing interfaces for web, mobile and dashboards. Proficient in Figma, Adobe XD, and Illustrator, with expertise in end-to-end product design—from problem identification to final UI delivery.",
        Roles: new List<string> { "UX/UI Designer", "Product Designer", "Design System Specialist", "UX Researcher", "Mentor" },
        Stats: new List<StatItem>
        {
            new("Years of Experience", "4+", "Years", "In IT & Digital Product Design"),
            new("Wireframes & Flows", "35+", "Screens", "Crafted for Enterprise B2B Systems"),
            new("Design Tasks Tracked", "65+", "Tasks", "With 25% Project Efficiency Boost"),
            new("Mentees Guided", "6+", "Designers", "Secured job placements in tech")
        },
        Projects: new List<ProjectItem>
        {
            new(
                Id: "dance-chero",
                Title: "Dance Chero – All-in-One Dance Learning App",
                Subtitle: "Interactive mobile experience for dance enthusiasts and studio coaches",
                Category: "Mobile App",
                Tags: new List<string> { "Mobile UX", "Gamification", "Prototyping", "User Testing" },
                Metric: "+35% Engagement",
                Description: "Developed a mobile application enabling students to join live & recorded classes, track learning progress, and explore diverse dance styles, complete with scheduled video uploads and peer reviews.",
                Gradient: "from-emerald-600 via-green-600 to-teal-700",
                CaseStudy: new CaseStudyDetails(
                    Problem: "Dance learners often struggle with disjointed video tutorials, lack of personalized progress tracking, and zero feedback loops from professional choreographers.",
                    Research: "Conducted 1-on-1 interviews with 25+ aspiring dancers and studio instructors to identify key drop-off points in digital dance practice routines.",
                    Solution: "Created an intuitive 4-step learning flow: Discover -> Master Choreography -> Video Rehearsal Recording -> AI & Mentor Feedback loop.",
                    Impact: "Boosted user retention by 35% during initial prototype user testing, with 90% positive feedback on the visual rehearsal player."
                )
            ),
            new(
                Id: "linkedin-resume",
                Title: "LinkedIn Resume Access – Hiring Flow Enhancement",
                Subtitle: "Streamlining candidate discovery and profile resume interactions",
                Category: "Product Enhancement",
                Tags: new List<string> { "Product UX", "Recruitment Flow", "Interaction Design", "Figma" },
                Metric: "-25% Search Time",
                Description: "Redesigned LinkedIn's talent profile flow by architecting 1-Click Resume Upload and Recruiter Quick Access features, dramatically elevating entry-level candidate visibility.",
                Gradient: "from-green-600 via-emerald-600 to-teal-600",
                CaseStudy: new CaseStudyDetails(
                    Problem: "Recruiters spent excessive clicks navigating external links and multi-page menus to review freshers' resumes, leading to high drop-offs.",
                    Research: "Analyzed recruiter task efficiency metrics and candidate application funnels to map the cognitive load of resume verification.",
                    Solution: "Integrated an embedded hover-preview drawer and standardized PDF parsing badge on profile headers for instantaneous review.",
                    Impact: "Reduced recruiter resume retrieval time by 25% and increased profile view-to-interview contact rate for fresh graduates."
                )
            ),
            new(
                Id: "uxify",
                Title: "Uxify – UI/UX Learning App for Beginners",
                Subtitle: "Bite-sized design education, practical tool workouts & interview readiness",
                Category: "EdTech Mobile App",
                Tags: new List<string> { "EdTech", "Design Education", "Design System", "Micro-Learning" },
                Metric: "+40% Satisfaction",
                Description: "Engineered a beginner-friendly mobile application that teaches core UI/UX fundamentals with interactive tool practice, automated portfolio critiques, and curated interview drills.",
                Gradient: "from-emerald-700 via-teal-600 to-green-600",
                CaseStudy: new CaseStudyDetails(
                    Problem: "Newcomers in UI/UX feel overwhelmed by dense theoretical textbooks and lack hands-on, micro-sized interactive sandboxes.",
                    Research: "Surveyed 200+ design bootcamp students to assess primary hurdles in transitioning theory into portfolio-ready design execution.",
                    Solution: "Gamified learning paths divided into 5-minute interactive challenges, accompanied by Figma shortcut exercises and resume building wizards.",
                    Impact: "Achieved a 40% improvement in learning satisfaction score and 4.8/5 rating across 200+ beta testers."
                )
            )
        },
        Experience: new List<ExperienceItem>
        {
            new(
                Company: "Tata Consultancy Services (TCS)",
                Project: "BT Openreach – Fusion Project",
                Role: "UX/UI Designer",
                Period: "May 2025 – Present",
                Type: "Full-Time",
                Location: "Enterprise B2B Delivery Platform",
                Highlights: new List<string>
                {
                    "Designed 6+ key modules and 35+ responsive wireframes for an end-to-end (E2E) telecom delivery platform, enhancing usability and visual clarity.",
                    "Collaborated with cross-functional stakeholders and managed 65+ Jira design tickets, improving sprint velocity and cost tracking by 25%.",
                    "Leveraged Amazon Q Developer AI within VS Code to validate UI implementation with HTML, CSS, and basic JavaScript, streamlining Figma-to-code fidelity."
                },
                Technologies: new List<string> { "Figma", "Design Systems", "Amazon Q AI", "Jira", "HTML/CSS", "Wireframing", "B2B UX" }
            ),
            new(
                Company: "Tata Consultancy Services (TCS)",
                Project: "TM Malaysia – TM Vital Project",
                Role: "UX Researcher & UI Designer",
                Period: "Mar 2024 – Apr 2025",
                Type: "Full-Time",
                Location: "Telekom Malaysia Digital Portal",
                Highlights: new List<string>
                {
                    "Conducted extensive competitive analysis & SWOT research across TM Global, TM ONE, and TM Unity to steer user-focused product decisions.",
                    "Conceptualized and designed the official TM Vital brand logo, capturing agile innovation and modern digital transformation.",
                    "Optimized user task flows and restructured visual hierarchy, increasing user satisfaction by 30% and accessibility (WCAG) compliance by 20%."
                },
                Technologies: new List<string> { "Figma", "UX Research", "SWOT Analysis", "Brand Identity", "WCAG Accessibility", "Information Architecture" }
            ),
            new(
                Company: "Tata Communications",
                Project: "Internal IT Tools Modernization",
                Role: "UX Designer (Transitioned from System Admin)",
                Period: "Dec 2021 – Feb 2024",
                Type: "Full-Time",
                Location: "Enterprise Internal Systems",
                Highlights: new List<string>
                {
                    "Spearheaded the UX redesign of core IT management dashboards utilized daily by 500+ internal employees.",
                    "Identified and eliminated 10+ operational workflow bottlenecks via heuristic evaluation and user journey mapping.",
                    "Cut navigation confusion by 30% and improved task completion speed across internal IT departments."
                },
                Technologies: new List<string> { "Adobe XD", "User Journey Mapping", "Heuristic Evaluation", "Workflow Mapping", "Dashboard Design" }
            )
        },
        Certifications: new List<CertificationItem>
        {
            new("Master Digital Product Design: UX Research & UI Design", "Udemy", "Certified", "Product Design", "Comprehensive end-to-end digital product creation covering UX research methodologies, Figma mastery, and rapid prototyping.", true),
            new("TCS Elevate Wings1 – UI/UX Design Technology", "TCS iON, Tata Consultancy Services", "TCS Internal Honors", "Enterprise UX", "Advanced enterprise UX/UI design processes, high-fidelity prototyping, and real-world industrial case studies.", true),
            new("Product Experience UX/UI Testing", "Tata Consultancy Services", "Specialized", "UX Testing", "In-depth usability testing protocols, heuristic UX audits, and quantitative/qualitative user feedback telemetry.", true),
            new("Learn Adobe XD for UI/UX Design", "Udemy", "Certified", "UI Prototyping", "Built end-to-end user flows, interactive UI specs, clickable prototypes, and micro-interactions in Adobe XD.", true),
            new("Figma Workshop Mastery", "Growth School", "Certified", "Figma Ecosystem", "Hands-on expertise in design tokens, component architecture, variant states, and collaborative design workflows.", true)
        },
        Achievements: new List<AchievementItem>
        {
            new("Best UX Design Presentation", "Krabble Bootcamp, Chennai", "First Place / Honor", "Awarded for demonstrating innovative design thinking, exhaustive user empathy research, and high-fidelity prototype execution.", "award"),
            new("Star Performer Award", "Tata Consultancy Services (TCS)", "Excellence Recognition", "Recognized for outstanding contribution in enterprise UX research, stakeholder alignment, and design delivery.", "star"),
            new("Design Mentorship & Leadership", "Independent Community", "6+ Mentees Placed", "Mentored and coached 6+ aspiring UI/UX designers 1-on-1, helping them build portfolio case studies and secure tech jobs.", "users")
        }
    );

    return Results.Ok(profile);
});

// 3. Contact Form Submission API
app.MapPost("/api/contact", (ContactMessageRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) || 
        string.IsNullOrWhiteSpace(request.Email) || 
        string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new ContactMessageResponse(false, "Name, email and message are required.", DateTime.UtcNow));
    }

    contactSubmissions.Add(request);
    Console.WriteLine($"[Contact Received] From: {request.Name} ({request.Email}) at {DateTime.UtcNow:s}");

    return Results.Ok(new ContactMessageResponse(
        Success: true, 
        Message: "Thank you for reaching out! Sri Mukesh will review your message and reply promptly.", 
        Timestamp: DateTime.UtcNow
    ));
});

// Fallback to index.html for Single Page Experience
app.MapFallbackToFile("index.html");

app.Run();
