export type ChartType = 'weekly' | 'star' | 'music' | 'social' | 'real';

export type ChartItem = {
  rank: number;
  targetIdx: string;
  'targetImg:': string;
  targetName: string;
  detail: {
    entertainment: string;
  };
};
