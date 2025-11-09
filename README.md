# Analytics Client

> Frontend analytics client (Google Analytics)

## Installation
```bash
npm install @modsynth/analytics-client
```

## Usage
```typescript
import { AnalyticsClient } from '@modsynth/analytics-client';

const analytics = new AnalyticsClient('GA-TRACKING-ID');

// Track page view
analytics.trackPageView('/home');

// Track event
analytics.trackEvent('User', 'signup', 'Newsletter', 1);
```

## Version
v0.1.0

## License
MIT
