import { j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { c as createLucideIcon } from "./index-B-6m-sKj.js";
import { B as Brain } from "./brain-BEMsr-o5.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Award = createLucideIcon("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trophy = createLucideIcon("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = createLucideIcon("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]);
const achievements = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Graduated with 8.54/10 GPA in Computer Science Engineering",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Pioneered AI-powered plant identification platform with advanced ML integration",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Automation Expertise",
    description: "Developed scalable workflow automation systems using N8N and modern APIs",
    color: "text-accent"
  },
  {
    icon: Trophy,
    title: "Professional Certifications",
    description: "Google Cybersecurity, Canva Web Development, and AI-Powered Shopping Ads certifications",
    color: "text-primary"
  }
];
const AchievementsSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "achievements",
      "aria-labelledby": "achievements-heading",
      "aria-label": "Professional achievements and recognitions",
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-5xl sm:text-6xl mb-6",
                  "aria-hidden": "true",
                  children: "🏆"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "achievements-heading",
                  className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Achievements" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Excellence Driven — Committed to delivering outstanding results through innovation and dedication" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            role: "list",
            "aria-label": "List of professional achievements",
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto",
            children: achievements.map((achievement, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                role: "listitem",
                "aria-label": achievement.title,
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: index * 0.1 },
                className: "card-modern p-6 sm:p-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        achievement.icon,
                        {
                          className: `w-7 h-7 ${achievement.color}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-semibold mb-3", children: achievement.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: achievement.description })
                ]
              },
              achievement.title
            ))
          }
        )
      ] })
    }
  );
};
export {
  AchievementsSection as default
};
