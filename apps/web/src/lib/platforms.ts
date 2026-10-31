import { PlatformItem } from '@/types';

export const PLATFORMS: PlatformItem[] = [
  {
    id: 'douyin',
    name: '抖音',
    label: '全部内容',
    url: 'https://v.douyin.com/nM1kZ4wdD9g/',
    icon: 'douyin',
    colorType: 'cool',
  },
  {
    id: 'bilibili',
    name: 'B站',
    label: '长视频与沉淀',
    url: 'https://space.bilibili.com',
    icon: 'bilibili',
    colorType: 'cool',
  },
  {
    id: 'xiaohongshu',
    name: '小红书',
    label: '生活与日常图文',
    url: 'https://www.xiaohongshu.com',
    icon: 'xiaohongshu',
    colorType: 'warm',
  },
  {
    id: 'channels',
    name: '视频号',
    label: '生活精选',
    url: '#',
    icon: 'channels',
    colorType: 'warm',
  },
  {
    id: 'wechat',
    name: '微信公众号',
    label: '深度思考与交流',
    url: '#wechat',
    icon: 'wechat',
    colorType: 'warm',
    isModal: true,
  },
];
