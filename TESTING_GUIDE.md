# 🧪 Performance Testing Guide

## Automated Testing Tools

### 1. Google PageSpeed Insights
**URL**: https://pagespeed.web.dev/

**What to check**:
- Mobile performance score (target: 85+)
- Desktop performance score (target: 90+)
- Core Web Vitals (LCP, FID, CLS)
- Opportunities to improve
- Diagnostics

**How to use**:
1. Enter your deployed URL
2. Wait for analysis (1-2 minutes)
3. Review mobile and desktop scores
4. Check "Opportunities" section
5. Implement suggestions

---

### 2. Lighthouse (Built-in Chrome DevTools)
**Access**: Chrome DevTools → Lighthouse tab

**What to check**:
- Performance
- Accessibility
- Best Practices
- SEO
- PWA

**How to use**:
```
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Wait for report
5. Review scores and suggestions
```

**Target Scores**:
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
- PWA: 90+

---

### 3. WebPageTest
**URL**: https://webpagetest.org/

**What to check**:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
- Speed Index

**How to use**:
1. Enter URL
2. Select test location and browser
3. Run test
4. Review waterfall chart
5. Identify slowest resources

**Target Metrics**:
- FCP: < 1.8s
- LCP: < 2.5s
- TTI: < 3.8s
- CLS: < 0.1

---

### 4. GTmetrix
**URL**: https://gtmetrix.com/

**What to check**:
- Performance score
- Structure score
- PageSpeed insights
- YSlow analysis
- Waterfall chart

**How to use**:
1. Enter URL
2. Run analysis
3. Compare with previous reports
4. Track performance over time

---

## Manual Testing

### Mobile Device Testing

#### iOS Testing
```bash
1. Use Safari on actual iPhone/iPad
2. Open DevTools (Settings → Safari → Advanced → Web Inspector)
3. Check:
   - Layout responsiveness
   - Animation smoothness
   - Touch interaction responsiveness
   - Loading times
   - Battery drain
```

#### Android Testing
```bash
1. Use Chrome on actual Android device
2. Open Chrome DevTools via chrome://inspect
3. Check:
   - Layout responsiveness
   - Animation smoothness
   - Touch interaction responsiveness
   - Loading times
   - Memory usage
```

### Network Throttling

#### Test on 3G (in Chrome DevTools)
```
1. Open DevTools → Network tab
2. Click throttle dropdown (by default "No throttling")
3. Select "Slow 3G"
4. Reload page
5. Verify load time
```

**Expected time**: < 5 seconds on 3G

#### Test on 4G
```
1. Open DevTools → Network tab
2. Select "Fast 3G"
3. Reload page
4. Verify load time
```

**Expected time**: < 2 seconds on 4G

### CPU Throttling

#### Simulate Low-End Devices
```
1. Open DevTools → Performance tab
2. Click settings (gear icon)
3. Enable "Throttle CPU"
4. Select 4x or 6x slowdown
5. Record performance
```

---

## Specific Performance Checks

### Core Web Vitals

#### 1. Largest Contentful Paint (LCP)
**What**: Time until largest content element is visible

**Target**: < 2.5s

**How to measure**:
```javascript
// In browser console
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.renderTime || entry.loadTime);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```

#### 2. First Input Delay (FID)
**What**: Delay between user input and response

**Target**: < 100ms

**How to measure**:
```javascript
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('FID:', entry.processingDuration);
  }
}).observe({type: 'first-input', buffered: true});
```

#### 3. Cumulative Layout Shift (CLS)
**What**: Unexpected layout changes

**Target**: < 0.1

**How to measure**:
```javascript
let clsValue = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
      console.log('CLS:', clsValue);
    }
  }
}).observe({type: 'layout-shift', buffered: true});
```

### Bundle Size Check

```bash
# View bundle size
npm run build

# Expected output shows size of dist folder
# Target: < 300KB for initial load
```

### Performance Profiling

#### Record Performance Timeline
```
1. Open DevTools → Performance tab
2. Click record button
3. Perform actions (scroll, click, navigate)
4. Stop recording
5. Analyze flame chart
6. Look for long tasks (> 50ms)
```

---

## CI/CD Integration

### Lighthouse CI

#### Setup
```bash
npm install -g @lhci/cli@latest

# Create lighthouserc.json
{
  "ci": {
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.85 }],
        "categories:accessibility": ["error", { "minScore": 0.90 }]
      }
    }
  }
}
```

#### Run
```bash
lhci autorun
```

---

## Regular Monitoring

### Monthly Checklist
- [ ] Run PageSpeed Insights
- [ ] Run Lighthouse audit
- [ ] Test on real mobile devices
- [ ] Check Core Web Vitals
- [ ] Monitor bundle size
- [ ] Check SEO metrics
- [ ] Test form submissions
- [ ] Verify all links work

### Performance Budget

**Set targets**:
- Bundle size: < 300KB
- FCP: < 1.8s
- LCP: < 2.5s
- CLS: < 0.1
- Lighthouse: 85+

---

## Debugging Performance Issues

### Issue: Slow Load Time
**Diagnosis**:
1. Use WebPageTest waterfall
2. Identify slowest resources
3. Check if 3D scenes are loaded on mobile
4. Verify lazy loading is working

**Solutions**:
- Enable lazy loading
- Reduce image sizes
- Defer heavy JavaScript
- Enable compression

### Issue: High CLS (Layout Shift)
**Diagnosis**:
1. Use DevTools Performance tab
2. Look for layout-shift entries
3. Identify elements causing shifts

**Solutions**:
- Set explicit dimensions on images
- Avoid inserting content dynamically
- Use transform/opacity instead of positional changes

### Issue: Jank During Scroll
**Diagnosis**:
1. Record Performance timeline
2. Look for long tasks > 50ms
3. Check main thread blocking

**Solutions**:
- Disable animations on mobile
- Use requestAnimationFrame
- Debounce scroll events
- Use passive listeners

### Issue: High Memory Usage
**Diagnosis**:
1. Open DevTools → Memory tab
2. Take heap snapshot
3. Find large objects

**Solutions**:
- Unload 3D scenes
- Lazy load images
- Clear unused timers
- Optimize animations

---

## Performance Optimization Tips

### For Development
```javascript
// Use React DevTools Profiler
// Record and analyze component renders
// Check for unnecessary re-renders
```

### For Production
```javascript
// Enable compression (gzip/brotli)
// Use CDN for static assets
// Enable caching headers
// Minify all assets
// Use async/defer on scripts
```

### For Monitoring
```javascript
// Set up real user monitoring (RUM)
// Use Sentry for error tracking
// Monitor Core Web Vitals
// Track user interactions
```

---

## Resources

### Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Documentation
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Core Web Vitals Documentation](https://web.dev/vitals/)
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/)

### Learning
- [Google's Web Performance Course](https://web.dev/performance/)
- [Frontend Masters: Web Performance](https://frontendmasters.com/courses/web-perf/)
- [Udemy: Website Performance Optimization](https://www.udemy.com/course/web-performance-optimization/)

---

**Last Updated**: December 19, 2025  
**Version**: 1.0
