import { r as reactExports, j as jsxRuntimeExports } from "./vendor-ui-DEFEJ43i.js";
import { c as createLucideIcon, a as cn, B as Button, M as Mail, u as ue } from "./index-CQZf9vHe.js";
import { m as motion } from "./vendor-animation-BRMUyTOW.js";
import "./vendor-three-BSTSrd-s.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const ContactSection = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    message: "",
    company: ""
    // honeypot
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      ue.error("Please fill in all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      ue.error("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "8c61fd85-47c2-43a4-bbea-9cabd38b781e",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`
        })
      });
      const result = await response.json();
      if (result.success) {
        ue.success("Message sent successfully!", {
          description: "I'll get back to you within 24–48 hours."
        });
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        throw new Error(result.message);
      }
    } catch {
      ue.error("Failed to send message", {
        description: "Please try again or contact me directly via email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "buildwithpratul@gmail.com",
      link: "mailto:buildwithpratul@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7627067702",
      link: "tel:+917627067702"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhiwadi, Rajasthan, India",
      link: "#"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "contact",
      "aria-labelledby": "contact-heading",
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-6", "aria-hidden": "true", children: "✉️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  id: "contact-heading",
                  className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                  children: [
                    "Let’s ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Connect" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Have a project in mind? Let’s collaborate and build something impactful." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "card-modern p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    role: "form",
                    "aria-describedby": "contact-description",
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "contact-description", className: "sr-only", children: "Contact form to send a message directly to Pratul" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          name: "company",
                          value: formData.company,
                          onChange: (e) => setFormData({ ...formData, company: e.target.value }),
                          className: "hidden",
                          tabIndex: -1,
                          autoComplete: "off"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Your Name" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "name",
                            required: true,
                            maxLength: 100,
                            placeholder: "Enter your full name",
                            value: formData.name,
                            onChange: (e) => setFormData({ ...formData, name: e.target.value })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Your Email" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "email",
                            type: "email",
                            required: true,
                            maxLength: 255,
                            placeholder: "Enter your email address",
                            value: formData.email,
                            onChange: (e) => setFormData({ ...formData, email: e.target.value })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Your Message" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Textarea,
                          {
                            id: "message",
                            required: true,
                            maxLength: 1e3,
                            placeholder: "Tell me about your project or inquiry...",
                            value: formData.message,
                            onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                            className: "min-h-[150px]"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          type: "submit",
                          size: "lg",
                          className: "w-full",
                          disabled: isSubmitting,
                          "aria-live": "polite",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5 mr-2", "aria-hidden": "true" }),
                            isSubmitting ? "Sending..." : "Send Message"
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.aside,
            {
              initial: { opacity: 0, x: 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "card-modern p-8 not-italic", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Get in Touch" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: contactMethods.map((method, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.a,
                    {
                      href: method.link,
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.6, delay: index * 0.1 },
                      className: "flex items-center gap-4 p-4 rounded-xl glass-modern hover:border-primary/30 transition",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(method.icon, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: method.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: method.value })
                        ] })
                      ]
                    },
                    method.title
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://t.me/Xenithra",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 mr-2", "aria-hidden": "true" }),
                      "Connect on Telegram"
                    ]
                  }
                ) })
              ]
            }
          )
        ] })
      ] })
    }
  );
};
export {
  ContactSection as default
};
