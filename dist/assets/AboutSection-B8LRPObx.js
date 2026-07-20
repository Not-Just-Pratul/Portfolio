import { j as jsxRuntimeExports } from "./vendor-ui-DEFEJ43i.js";
import { m as motion } from "./vendor-animation-BRMUyTOW.js";
import { G as GraduationCap } from "./graduation-cap-q24Z_vap.js";
import { C as Calendar } from "./calendar-BzY2elVu.js";
import "./index-CQZf9vHe.js";
import "./vendor-three-BSTSrd-s.js";
const AboutSection = () => {
  const quickFacts = [
    "2+ years of web development experience",
    "Specialized in AI integration and automation",
    "Strong focus on user experience and accessibility",
    "Passionate about innovative digital solutions"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "about",
      "aria-labelledby": "about-heading",
      "aria-label": "About the developer",
      className: "relative py-24 sm:py-32 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "max-w-5xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                id: "about-heading",
                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
                children: [
                  "About ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Me" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "aria-label": "Professional summary", className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground leading-relaxed", children: "Innovative and detail-oriented web designer and developer with a strong focus on user experience, accessibility, and business growth." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-muted-foreground/80 leading-relaxed", children: "Adept at creating intuitive, high-impact digital solutions that enhance engagement and drive results. Passionate about blending creativity with strategic problem-solving." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Quick Facts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "ul",
                    {
                      role: "list",
                      "aria-label": "Key professional highlights",
                      className: "space-y-3",
                      children: quickFacts.map((fact, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.li,
                        {
                          role: "listitem",
                          initial: { opacity: 0, x: -20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.6, delay: index * 0.1 },
                          className: "flex items-start gap-3 text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-primary mt-1", children: "•" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fact })
                          ]
                        },
                        index
                      ))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.article,
                {
                  "aria-label": "Education and achievements",
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-modern p-6 sm:p-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-6 h-6 text-primary" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-1", children: "Education" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Academic Background" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "Dev Bhoomi Uttarakhand University (DBUU)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "Bachelor of Technology in Computer Science" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Calendar,
                              {
                                className: "w-4 h-4 text-primary",
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "time",
                              {
                                dateTime: "2024-05",
                                className: "text-muted-foreground",
                                children: "May 2024"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              "aria-label": "Grade point average",
                              className: "px-3 py-1 rounded-full bg-primary/10 text-primary font-medium",
                              children: "GPA: 8.54/10"
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        role: "list",
                        "aria-label": "Professional statistics",
                        className: "grid grid-cols-3 gap-4",
                        children: [
                          { value: "2+", label: "Years Experience" },
                          { value: "10+", label: "Projects Completed" },
                          { value: "5+", label: "Technologies Used" }
                        ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            role: "listitem",
                            initial: { opacity: 0, scale: 0.8 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: true },
                            transition: { duration: 0.6, delay: 0.3 + index * 0.1 },
                            className: "card-modern p-4 sm:p-6 text-center",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-gradient mb-1", children: stat.value }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-muted-foreground", children: stat.label })
                            ]
                          },
                          index
                        ))
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
};
export {
  AboutSection as default
};
