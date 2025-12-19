import { a as reactExports, j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { c as createLucideIcon } from "./index-B-6m-sKj.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
]);
const testimonials = [
  {
    name: "Client from Fiverr",
    role: "Software Developer",
    content: "Pratul's work exceeded our expectations. The attention to detail and creative solutions were outstanding.",
    avatar: "SJ"
  },
  {
    name: "Harshvardhan Mangla",
    role: "IT Manager at Mangla Tubes Pvt. Limited",
    content: "Working with Pratul was a game-changer. The final product was both beautiful and highly functional.",
    avatar: "MC"
  },
  {
    name: "Mentors at Oasis Infobyte",
    role: "UI/UX Developer",
    content: "Exceptional design skills combined with technical expertise. Pratul delivered beyond what we imagined.",
    avatar: "ER"
  },
  {
    name: "Joshua",
    role: "Cloud Developer at CloudScale",
    content: "Pratul's ability to translate complex requirements into elegant solutions is truly remarkable.",
    avatar: "DK"
  },
  {
    name: "Client from UpWork",
    role: "Design Director at Creative Co",
    content: "A rare combination of artistic vision and technical prowess. Highly recommended for any project.",
    avatar: "LA"
  },
  {
    name: "Client from Fiverr",
    role: "VP Engineering at DataFlow",
    content: "Professional, efficient, and incredibly talented. Pratul brought our vision to life perfectly.",
    avatar: "JW"
  }
];
const TestimonialsSection = () => {
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "testimonials",
      "aria-labelledby": "testimonials-heading",
      "aria-label": "Client testimonials and feedback",
      className: "relative py-24 sm:py-32 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.header,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "testimonials-heading",
                  className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground",
                  children: "Client Testimonials"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", children: "What people say about working with me" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: scrollRef,
            role: "list",
            "aria-label": "Testimonials carousel",
            className: "flex gap-6 overflow-hidden select-none",
            style: { scrollbarWidth: "none", msOverflowStyle: "none" },
            children: duplicatedTestimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                role: "listitem",
                "aria-label": `Testimonial from ${testimonial.name}`,
                className: "flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] card-modern p-6 sm:p-8 hover:scale-105 transition-transform duration-300",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Quote,
                    {
                      className: "w-10 h-10 text-primary mb-4 opacity-50",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/90 mb-6 leading-relaxed text-sm sm:text-base", children: [
                    "“",
                    testimonial.content,
                    "”"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold",
                        "aria-label": `Avatar of ${testimonial.name}`,
                        children: testimonial.avatar
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: testimonial.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: testimonial.role })
                    ] })
                  ] })
                ]
              },
              index
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent" })
        ] })
      ]
    }
  );
};
export {
  TestimonialsSection as default
};
