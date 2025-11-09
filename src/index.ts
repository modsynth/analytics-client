export class AnalyticsClient {
  private trackingId: string;

  constructor(trackingId: string) {
    this.trackingId = trackingId;
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', this.trackingId);
  }

  trackPageView(page: string) {
    if (typeof window === 'undefined') return;
    (window as any).gtag?.('config', this.trackingId, { page_path: page });
  }

  trackEvent(category: string, action: string, label?: string, value?: number) {
    if (typeof window === 'undefined') return;
    (window as any).gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export default AnalyticsClient;
