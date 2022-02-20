import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { useEffect, useState } from "react"
import { getTreeById, getwater } from "../services/api"
import { Link, useParams } from "react-router-dom"

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = () => {
	// render() {

		const { treeId } = useParams()

		const [tree, setTree] = useState({})
	  
		const onGetTreeWater = (id) => {
		  getwater(id).then((res) => {
			setTree(res)
		  })
		}
	  
		useEffect(() => {
		  onGetTreeWater(treeId)
		}, [])

		console.log(tree)

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: tree.title
			},
			axisY: {
				title: tree.titleY,
				includeZero: false,
				suffix: tree.prefix
			},
			axisX: {
				title: "Day",
				prefix: "D",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Day {x}: {y}%",
				dataPoints: tree.arraydata
			}]
		}
		
		return (
			<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	// }
}

export default LineChart;                           