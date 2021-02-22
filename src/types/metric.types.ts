export type MetricItem = {
  date: number;
};

export type Metric = {
  name: string;
  items: MetricItem[];
};

export type Metrics = {
  [id: string]: Metric;
};
