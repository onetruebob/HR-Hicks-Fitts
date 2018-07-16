import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const style = {
    container: {
        margin: '2em'
    }
};

const ResultCard = ({ testName, totalTime }) => (
    <Card style={style.container} key={testName}>
        <CardTitle title={`${testName} Test`} />
        <CardText>
            <p>Completed in {totalTime} milliseconds.</p>
        </CardText>
    </Card>
);

class Results extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <div>{this.props.results.map(ResultCard)}</div>;
    }
}

const mapStateToProps = state => ({
    results: state.hicksDemo.demoTimings
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Results);
