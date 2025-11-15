# Analytics Client

[![npm version](https://badge.fury.io/js/%40modsynth%2Fanalytics-client.svg)](https://www.npmjs.com/package/@modsynth/analytics-client)
[![npm downloads](https://img.shields.io/npm/dm/@modsynth/analytics-client.svg)](https://www.npmjs.com/package/@modsynth/analytics-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Frontend analytics client with React hooks

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- Google Analytics integration
- Page view tracking
- Event tracking
- TypeScript support
- ✨ **React Hook**: `useAnalytics` hook for React components (v0.2.0)
- ✨ **Type-Safe Events**: TypeScript definitions for events (v0.2.0)

## What's New in v0.2.0

- **useAnalytics Hook**: React hook for easy analytics integration
- **Type Safety**: Full TypeScript support for analytics events

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

Current version: `v0.2.0`

## License

MIT
