export interface PlatformItem {
  id: string;
  name: string;
  label: string;
  url: string;
  icon: 'douyin' | 'bilibili' | 'xiaohongshu' | 'wechat' | 'channels' | 'generic';
  colorType: 'warm' | 'cool';
  isModal?: boolean;
}

export type TypewriterStatus = 'idle' | 'typing' | 'done';
