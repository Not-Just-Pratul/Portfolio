import { j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { C as CodeXml } from "./code-xml-wNtKblNO.js";
import { B as Brain } from "./brain-BEMsr-o5.js";
import { c as createLucideIcon } from "./index-B-6m-sKj.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Palette = createLucideIcon("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
const services = [
  {
    icon: CodeXml,
    title: "Web Development",
    description: "Full-stack development with modern frameworks, responsive design, and optimal performance.",
    emoji: "💻"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing AI-powered features, automation workflows, and intelligent user experiences.",
    emoji: "🤖"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with focus on accessibility, user experience, and visual appeal.",
    emoji: "🎨"
  }
];
const ServicesSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "services",
      "aria-labelledby": "services-heading",
      "aria-label": "Professional services offered",
      className: "relative py-24 sm:py-32 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.header,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "text-center mb-16 sm:mb-20",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                id: "services-heading",
                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
                children: [
                  "What I ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Do" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            role: "list",
            "aria-label": "List of services",
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto",
            children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                role: "listitem",
                "aria-label": service.title,
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: index * 0.15 },
                className: "card-modern p-6 sm:p-8 group text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-5xl sm:text-6xl mb-6",
                      "aria-hidden": "true",
                      children: service.emoji
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-semibold mb-4", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: service.description })
                ]
              },
              service.title
            ))
          }
        )
      ] })
    }
  );
};
export {
  ServicesSection as default
};
