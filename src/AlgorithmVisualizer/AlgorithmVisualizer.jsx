import React, { Component } from "react";
import Node from "./Node/Node";
import "./AlgorithmVisualizer.css";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";

export default class AlgorithmVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)

    //create initial node array for 2D array
    const nodes = [];

    //nested for loop to create 2D
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 40; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5, //isStart only true if row == 10 and col == 5
          isFinish: row === 10 && col === 35, //isFinish only true if row == 10 and col == 35
        };
        currentRow.push(currentNode); //create 50 array elements inside currentRow array
      }
      nodes.push(currentRow);

      //push row array into nodes array to build 2D array
      //setState() enqueues changes to the component state and tells React that
      //this component and its children need to be re-rendered with the updated state.
    }
    this.setState({ nodes });
  }

  render() {
    //set local variable nodes to global variable nodes
    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          //.map() iterates through array and does something to each element
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { isStart, isFinish } = node;
                return (
                  <Node
                    key={nodeIdx}
                    isStart={isStart}
                    isFinish={isFinish}
                    test={"foo"}
                    test={"bar"}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
