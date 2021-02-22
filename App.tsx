import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {MetricTile} from './src/components/metric-tile.component';
import {
  createMetric,
  createMetricItem,
  getMetrics,
} from './src/models/metric.model';
import {Metrics} from './src/types/metric.types';
import {isToday} from './src/utils/date.utils';
import {Button} from './src/components/button.component';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [allMetrics, setAllMetrics] = useState<Metrics>({});

  useEffect(() => {
    (async () => {
      setAllMetrics(await getMetrics());
    })();
  });

  const increment = async (id: string) => {
    const metrics = await createMetricItem(id, {date: new Date().getTime()});
    setAllMetrics(metrics);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {Object.keys(allMetrics).map((key) => {
            const metric = allMetrics[key];
            return (
              <MetricTile
                key={metric.name}
                count={
                  metric.items.filter((item) => {
                    return isToday(item.date);
                  }).length
                }
                name={metric.name}
                onPress={() => increment(key)}
              />
            );
          })}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Button
              shape="circle"
              onPress={() => {
                Alert.prompt('Metric name', undefined, (name) => {
                  createMetric(name, {
                    name,
                    items: [],
                  });
                });
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
