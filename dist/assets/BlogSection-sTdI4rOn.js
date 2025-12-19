import { a as reactExports, j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { a as cn, B as Button } from "./index-B-6m-sKj.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { C as Calendar } from "./calendar-Cn3J2S4A.js";
import { E as ExternalLink } from "./external-link-CCPSadrl.js";
import "./vendor-ui-BEL27KUT.js";
const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const blogs = [
  {
    id: 1,
    title: "2025 Tech Preview: 10 Game-Changing Innovations Every Tech Enthusiast Needs to Know",
    description: "Explore the most exciting technological innovations set to transform 2025, from AI breakthroughs to quantum computing advances.",
    date: "2025-01-01",
    displayDate: "Jan 2025",
    readTime: "8 min read",
    link: "https://medium.com/@pratul.exe/2025-tech-preview-10-game-changing-innovations-every-tech-enthusiast-needs-to-know-275ffb7ac814",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  }
];
const BlogSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "blog",
      "aria-labelledby": "blog-heading",
      className: "relative py-24 sm:py-32 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.header,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  id: "blog-heading",
                  className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                  children: [
                    "Latest ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Articles" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Insights and perspectives on technology, development, and innovation" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto space-y-10", children: blogs.map((blog, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.article,
          {
            "aria-labelledby": `blog-title-${blog.id}`,
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-modern overflow-hidden group hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 relative h-64 md:h-auto overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: blog.image,
                    alt: `Cover image for article: ${blog.title}`,
                    loading: "lazy",
                    decoding: "async",
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 bg-gradient-to-r from-background/30 to-transparent",
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Calendar,
                        {
                          className: "w-4 h-4",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: blog.date, children: blog.displayDate })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blog.readTime })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CardTitle,
                    {
                      id: `blog-title-${blog.id}`,
                      className: "text-2xl group-hover:text-gradient transition-all",
                      children: blog.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base mt-3", children: blog.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "group/btn", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: blog.link,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    "aria-label": `Read article: ${blog.title}`,
                    children: [
                      "Read on Medium",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ExternalLink,
                        {
                          className: "ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform",
                          "aria-hidden": "true"
                        }
                      )
                    ]
                  }
                ) }) })
              ] })
            ] }) })
          },
          blog.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: 0.3 },
            className: "text-center mt-12",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://medium.com/@pratul.exe",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ExternalLink,
                    {
                      className: "w-5 h-5 mr-2",
                      "aria-hidden": "true"
                    }
                  ),
                  "View All Articles"
                ]
              }
            ) })
          }
        )
      ] })
    }
  );
};
export {
  BlogSection as default
};
