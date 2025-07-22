// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

interface SetTextOptions {
  speed?: 'instant' | 'fast' | 'normal' | 'slow' | number;
}

export class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private resolve!: () => void;
  private queue: QueueItem[] = [];
  private frameRequest!: number;
  private frame: number = 0;
  private currentChangeRate: number = 0.28;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
  }

  setText(newText: string, options: SetTextOptions = {}): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    
    // Get speed configuration based on options
    const speedConfig = this.getSpeedConfig(options.speed || 'normal');
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * speedConfig.minDelay);
      const end = start + Math.floor(Math.random() * speedConfig.maxDelay);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.currentChangeRate = speedConfig.changeRate;
    this.update();
    return promise;
  }

  private update = (): void => {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < this.currentChangeRate) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  private getSpeedConfig(speed: 'instant' | 'fast' | 'normal' | 'slow' | number) {
    // Handle number speed values as changeRate multipliers
    if (typeof speed === 'number') {
      const baseConfig = { minDelay: 40, maxDelay: 40, changeRate: 0.28 };
      return {
        ...baseConfig,
        changeRate: Math.max(0.1, Math.min(1.0, baseConfig.changeRate * speed))
      };
    }
    
    switch (speed) {
      case 'instant':
        return { minDelay: 1, maxDelay: 5, changeRate: 0.8 };
      case 'fast':
        return { minDelay: 10, maxDelay: 20, changeRate: 0.5 };
      case 'slow':
        return { minDelay: 60, maxDelay: 80, changeRate: 0.15 };
      case 'normal':
      default:
        return { minDelay: 40, maxDelay: 40, changeRate: 0.28 };
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
