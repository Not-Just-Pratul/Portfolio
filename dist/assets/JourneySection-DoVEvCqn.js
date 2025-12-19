import { j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { c as createLucideIcon } from "./index-B-6m-sKj.js";
import { G as GraduationCap } from "./graduation-cap-BCgY0b69.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Briefcase = createLucideIcon("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lightbulb = createLucideIcon("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rocket = createLucideIcon("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);
const journeySteps = [
  {
    year: "2023",
    title: "Oasis Infobyte Intern",
    description: "Web Developer and Designer, built multiple interactive applications",
    icon: Briefcase,
    color: "from-primary to-secondary"
  },
  {
    year: "2023-2024",
    title: "AI & Automation Focus",
    description: "Specialized in AI integration, workflow automation, and modern web technologies",
    icon: Lightbulb,
    color: "from-secondary to-accent"
  },
  {
    year: "2025",
    title: "Graduated DBUU",
    description: "Bachelor of Technology in Computer Science with 8.54 GPA",
    icon: GraduationCap,
    color: "from-accent to-primary"
  },
  {
    year: "2025",
    title: "Mangla Cor-Tubi Private Limited",
    description: "IT Specialist / Automation – supported enterprise automation projects",
    icon: Rocket,
    color: "from-primary to-accent"
  }
];
const JourneySection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "journey",
      "aria-labelledby": "journey-heading",
      "aria-label": "Professional journey and career timeline",
      className: "relative py-24 sm:py-32 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.header,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "text-center mb-16 sm:mb-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  id: "journey-heading",
                  className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                  children: [
                    "The ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Journey" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto", children: "A timeline of growth, learning, and professional milestones" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              role: "list",
              "aria-label": "Career timeline",
              className: "space-y-16",
              children: journeySteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.article,
                {
                  role: "listitem",
                  "aria-label": `${step.title} in ${step.year}`,
                  initial: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: index * 0.2 },
                  className: `relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 md:left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow-primary`,
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "w-8 h-8 text-white" })
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            whileHover: { y: -4 },
                            className: "card-modern p-6",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "time",
                                {
                                  dateTime: step.year,
                                  className: "inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3",
                                  children: step.year
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: step.description })
                            ]
                          }
                        )
                      }
                    )
                  ]
                },
                index
              ))
            }
          )
        ] })
      ] })
    }
  );
};
export {
  JourneySection as default
};
