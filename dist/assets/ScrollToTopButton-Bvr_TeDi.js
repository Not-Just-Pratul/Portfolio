import { a as reactExports, j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { c as createLucideIcon, B as Button } from "./index-BKfyU-Nz.js";
import { A as AnimatePresence, m as motion } from "./vendor-animation-B5fVPTGx.js";
import "./vendor-ui-BEL27KUT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.5, y: 50 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.5, y: 50 },
      transition: { duration: 0.3, ease: "easeOut" },
      className: "fixed bottom-8 right-8 z-50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "holographic",
          onClick: scrollToTop,
          className: "w-14 h-14 rounded-full shadow-elevated",
          "aria-label": "Scroll to top",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-6 h-6" })
        }
      )
    }
  ) });
};
export {
  ScrollToTopButton as default
};
