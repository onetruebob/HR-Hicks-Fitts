import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const style = {
  container: {
    margin: '2em'
  },
  button: {
    margin: 12
  }
};

class Home extends Component {
  render() {
    return (
      <div style={style.container}>
        <Card>
          <CardTitle title="Instructions" />
          <CardText>
            <div>
              <p>
                Your task in each test is to locate the button with the word &quot;Otter&quot; as quickly as you can and
                click or tap it.
              </p>
            </div>
          </CardText>
          <CardActions>
            <RaisedButton label="Let's get started!" primary={true} onClick={() => this.props.nextTest()} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      nextTest: () => push('/single')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
