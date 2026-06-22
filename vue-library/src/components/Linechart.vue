<template>
  <div ref="chartRef" />
</template>

<script setup lang="ts">
import { Chart } from "highcharts";
import {ref, onMounted, onUnmounted} from "vue";

/* This is bad. Importing the modules makes SSR go boom */
// import Highcharts from "highcharts";
// import Exporting from "highcharts/modules/exporting";
// import ExportData from "highcharts/modules/export-data";

const chartRef = ref(null);
let chart: Chart | null = null;

onMounted(async () => {
  /* This is where we should import. Here DOM exists and modules can call window. if they want */
  const Highcharts = (await import("highcharts")).default;
  const { default: Exporting } = await import("highcharts/modules/exporting");
  const { default: ExportData } = await import("highcharts/modules/export-data");
  console.log(Exporting, ExportData);
  // @ts-ignore
  chart = Highcharts.chart(chartRef.value, {
    chart: { type: "line" },
    title: { text: "Monthly Sales" },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: { text: "Units" },
    },
    series: [
      {
        name: "Product A",
        data: [120, 95, 180, 140, 210, 175],
      },
      {
        name: "Product B",
        data: [80, 130, 100, 160, 90, 200],
      },
    ],
  });
});

onUnmounted(() => {
  chart?.destroy();
});
</script>
