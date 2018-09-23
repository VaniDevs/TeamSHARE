import React from 'react';
import {Line} from 'react-chartjs-2';

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Families Helped',
      fill: false,
      backgroundColor: '#A7D5F5',
      borderColor: '#A7D5F5',
      borderCapStyle: 'butt',
      data: [10, 10, 8, 10, 15, 20, 24, 22, 26]
    }
  ]
};



class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
	componentWillMount(){
		this.setState(initialState);
	}
	render() {
		return (
			<Line data={this.state} />
		);
	}
};

export default Graph;