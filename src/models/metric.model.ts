import store from 'react-native-simple-store';
import {Metric, MetricItem, Metrics} from '../types/metric.types';

const blueprint: Metrics = {
  meeting_interactions: {
    name: 'Meeting Interactions',
    items: [],
  },
};

export const getMetrics = async (): Promise<Metrics> => {
  let metrics = await store.get('metrics');
  if (!metrics) {
    metrics = blueprint;
    await store.save('metrics', metrics);
  }
  return metrics;
};

export const createMetricItem = async (
  id: string,
  item: MetricItem,
): Promise<Metrics> => {
  let metrics = await store.get('metrics');
  metrics[id].items.push(item);
  store.save('metrics', metrics);
  return metrics;
};

export const createMetric = async (
  id: string,
  metric: Metric,
): Promise<Metrics> => {
  let metrics = await store.get('metrics');
  metrics[id] = metric;
  store.save('metrics', metrics);
  return metrics;
};
