import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const Stacked = ({ width, height }) => {

  return (
    // <ChartComponent
    //   width={width}
    //   height={height}
    //   id="charts"
    //   primaryYAxis={stackedPrimaryXAxis}
    //   chartArea={{border:{width:0}}}
    //   tooltip={{enable: true}}
    //   primaryXAxis={stackedPrimaryYAxis}
    //   legendSettings={{background:"white"}}
    // >
    //   <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    //   <SeriesCollectionDirective>
    //     {stackedCustomSeries.map((item,i) => (
    //       <SeriesDirective key={i} {...item} />
    //     ))}
    //   </SeriesCollectionDirective>
    // </ChartComponent>
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
