import React, { Component } from 'react';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTestTimer, endTestTimer } from '../../modules/hicks-demo';
import { push } from 'react-router-redux';

const style = {
  container: {
    margin: '2em'
  },
  button: {
    margin: 12
  }
};

class SingleButton extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startTestTimer();
  }

  render() {
    return (
      <div style={style.container}>
        <Card>
          <CardTitle title="Single Button" />
          <CardActions>
            <RaisedButton
              label={this.props.termToFind}
              primary={true}
              onClick={() => {
                this.props.endTestTimer();
                window.alert("Easy right? Let's continue on to the next test");
                return this.props.nextTest();
              }}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  termToFind: state.hicksDemo.termToFind,
  test: state.hicksDemo.currentTest
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startTestTimer,
      endTestTimer: _ => {
        return endTestTimer('Single');
      },
      nextTest: () => push('/random')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleButton);
