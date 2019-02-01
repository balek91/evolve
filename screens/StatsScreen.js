import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'
import { VictoryPie, VictoryChart, VictoryLine, VictoryGroup, VictoryBar } from "victory-native";

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <ViewBackgroundImage namePage={'STATS'}>
        <VictoryPie
          colorScale={["tomato", "orange", "green", "navy"]}
          data={[
            { x: "Cloud9", y: 25 },
            { x: "Faze Clan", y: 30 },
            { x: "BIG Clan", y: 45 },
            { x: "compLexity", y: 30 }
          ]}
          labelRadius={75}
          style={{ labels: { fill: "white", fontSize: 16 } }}
        />

        <VictoryChart
          style={{
            parent: {
              border: "1px solid #ccc"
            }
          }}>
          <VictoryLine
            style={{
              data: { stroke: "green", strokeWidth: 5 },

            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />

        </VictoryChart>

        <VictoryChart>
          <VictoryGroup offset={20}
            colorScale={"qualitative"}
          >
            <VictoryBar
              data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
            />
          </VictoryGroup>
        </VictoryChart>

      </ViewBackgroundImage>
    )
  }
}