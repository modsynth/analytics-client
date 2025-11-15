import { useEffect, useRef } from 'react';
import { AnalyticsClient } from './index';

/**
 * React hook for analytics
 */
export function useAnalytics(trackingId: string) {
  const clientRef = useRef<AnalyticsClient | null>(null);

  useEffect(() => {
    if (!clientRef.current) {
      clientRef.current = new AnalyticsClient(trackingId);
    }
  }, [trackingId]);

  return {
    trackPageView: (page: string) => {
      clientRef.current?.trackPageView(page);
    },
    trackEvent: (category: string, action: string, label?: string, value?: number) => {
      clientRef.current?.trackEvent(category, action, label, value);
    },
  };
}
