import React from "react";
import { Pie as PieNivo } from "@nivo/pie";
import { ResponsivePie } from "@nivo/pie";
import "./pie.css";
import { ReactComponent as GroupSvg } from "./Group.svg";

export function Pie1({ data }) {
  const commonProperties = {
    width: 900,
    height: 500,
    fontWeight: "bold",
    margin: { top: 80, right: 120, bottom: 80, left: 120 },
    data: data,
    animate: true,
  };

  const textColor = (e) => {
    if (e.label === "pro") {
      return "white";
    }
    return "back";
  };

  return (
    <PieNivo
      {...commonProperties}
      sliceLabel={function (e) {
        return e.id + " " + e.value + " kg/an";
      }}
      colors={function (e) {
        return e.color;
      }}
      enableRadialLabels={false}
      slicesLabelsTextColor={textColor}
      legends={[]}
    />
  );
}

export function Pie2({ data }) {
  const commonProperties = {
    width: 900,
    height: 500,
    fontWeight: "bold",
    margin: { top: 80, right: 120, bottom: 80, left: 120 },
    data: data,
    animate: true,
  };

  const textColor = (e) => {
    if (e.label === "pro") {
      return "white";
    }
    return "back";
  };

  return (
    <PieNivo
      {...commonProperties}
      sliceLabel={function (e) {
        return e.value + " kg/an";
      }}
      colors={function (e) {
        return e.color;
      }}
      radialLabelsTextColor="#ffffff"
      slicesLabelsTextColor={textColor}
      legends={[]}
    />
  );
}

function Draw() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "80",
        width: "120px",
        height: "120px",
        borderRadius: "100%",
        backgroundColor: "blue",
      }}
    >
      <GroupSvg />
      <span style={{ fontWeight: "bold", fontFamily: "Paris2024" }}>
        45420 kg/an
      </span>
      <span style={{ fontFamily: "Source Sans Pro" }}>Après actions</span>
    </div>
  );
}

export function Pie3({ data }) {
  const commonProperties = {
    fontWeight: "bold",
    margin: { top: 0, right: 60, bottom: 80, left: 60 },
    data: data,
    animate: true,
  };

  const textColor = (e) => {
    if (e.label === "pro") {
      return "white";
    }
    return "back";
  };

  return (
    <div
      style={{ position: "relative", backgroundColor: "red", height: "500px" }}
    >
      <ResponsivePie
        {...commonProperties}
        sliceLabel={function (e) {
          return e.value + " kg/an";
        }}
        colors={function (e) {
          return e.color;
        }}
        radialLabelsTextColor="#ffffff"
        slicesLabelsTextColor={textColor}
        legends={[]}
      />
      <div
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}
      >
        <ResponsivePie
          margin={{ top: 0, right: 60, bottom: 80, left: 60 }}
          data={[
            {
              id: "pro",
              label: "pro",
              value: 80,
              color: "hsl(0, 0%, 77%)",
            },
          ]}
          isInteractive={false}
          enableSlicesLabels={false}
          colors="#4A4A4A"
          enableRadialLabels={false}
          slicesLabelsTextColor={textColor}
          legends={[]}
        />
      </div>
      {/*<div style={{position: 'absolute', width: '100%', height: '100%', top: 0}}>*/}
      {/*    <ResponsivePie*/}
      {/*        margin={{ top: 0, right: 60, bottom: 80, left: 60 }}*/}
      {/*        data={[{*/}
      {/*            id: "pro",*/}
      {/*            label: "pro",*/}
      {/*            value: 80,*/}
      {/*            color: "hsl(0, 0%, 77%)",*/}
      {/*        }]}*/}
      {/*        isInteractive={false}*/}
      {/*        enableSlicesLabels={false}*/}
      {/*        colors="green"*/}
      {/*        enableRadialLabels={false}*/}
      {/*        slicesLabelsTextColor={textColor}*/}
      {/*        legends={[]}*/}
      {/*    />*/}
      {/*</div>*/}
      <div
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}
      >
        <Draw />
      </div>
    </div>
  );
}
