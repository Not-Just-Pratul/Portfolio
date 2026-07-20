import { j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { C as CodeXml } from "./code-xml-COH8WnIx.js";
import { c as createLucideIcon } from "./index-BKfyU-Nz.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Database = createLucideIcon("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Heart = createLucideIcon("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
const skillCategories = [
  {
    icon: CodeXml,
    title: "Programming Languages",
    number: "01",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "TypeScript"]
  },
  {
    icon: Database,
    title: "Databases & Tools",
    number: "02",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "VS Code", "WordPress", "N8N"]
  },
  {
    icon: Heart,
    title: "Soft Skills",
    number: "03",
    skills: [
      "Empathy",
      "Adaptability",
      "Team Collaboration",
      "Learning Agility",
      "Analytical Thinking",
      "Problem Solving"
    ]
  }
];
const SkillsSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "skills",
      "aria-labelledby": "skills-heading",
      "aria-label": "Technical and professional skills",
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
                  id: "skills-heading",
                  className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                  children: [
                    "Technical ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Skills" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto", children: "A comprehensive toolkit for building modern, scalable applications" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            role: "list",
            "aria-label": "Skill categories",
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto",
            children: skillCategories.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                role: "listitem",
                "aria-label": category.title,
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: index * 0.15 },
                className: "card-modern p-6 sm:p-8 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(category.icon, { className: "w-7 h-7 text-primary" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-5xl font-bold text-primary/20",
                        "aria-hidden": "true",
                        children: category.number
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-semibold mb-6", children: category.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "ul",
                    {
                      role: "list",
                      "aria-label": `${category.title} skills`,
                      className: "space-y-3",
                      children: category.skills.map((skill, skillIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.li,
                        {
                          role: "listitem",
                          initial: { opacity: 0, x: -20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true },
                          transition: {
                            duration: 0.5,
                            delay: 0.3 + skillIndex * 0.05
                          },
                          className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "w-1.5 h-1.5 rounded-full bg-primary",
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill })
                          ]
                        },
                        skillIndex
                      ))
                    }
                  )
                ]
              },
              category.number
            ))
          }
        )
      ] })
    }
  );
};
export {
  SkillsSection as default
};
