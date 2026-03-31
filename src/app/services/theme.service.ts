import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private storageKey = 'np-theme';

  readonly theme = signal<Theme>(this.loadStoredTheme());
  readonly resolvedTheme = signal<'light' | 'dark'>(this.resolveTheme(this.loadStoredTheme()));

  constructor() {
    effect(() => {
      const t = this.theme();
      this.applyTheme(t);
      this.resolvedTheme.set(this.resolveTheme(t));
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.storageKey, t);
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.theme() === 'auto') {
          this.resolvedTheme.set(this.resolveTheme('auto'));
          this.applyTheme('auto');
        }
      });
    }
  }

  toggle(): void {
    const current = this.resolvedTheme();
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  setTheme(t: Theme): void {
    this.theme.set(t);
  }

  private resolveTheme(t: Theme): 'light' | 'dark' {
    if (t === 'auto') {
      if (isPlatformBrowser(this.platformId)) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }
    return t;
  }

  private applyTheme(t: Theme): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const resolved = this.resolveTheme(t);
    document.documentElement.setAttribute('data-theme', resolved);
  }

  private loadStoredTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.storageKey) as Theme | null;
      if (stored === 'light' || stored === 'dark' || stored === 'auto') return stored;
    }
    return 'auto';
  }
}
