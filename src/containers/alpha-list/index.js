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
    // margin: 12
  }
};

const TermButton = (term, termToFind, endTestTimer, nextTest) => (
  <CardActions key={term}>
    <RaisedButton
      label={term}
      primary={true}
      style={style.button}
      onClick={_ => {
        if (term !== termToFind) {
          console.log('Try again.');
          return;
        }
        endTestTimer();
        window.alert("You're a pro! Ready to try one more time?");
        nextTest();
      }}
    />
  </CardActions>
);

class AlphaList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startTestTimer();
  }

  render() {
    return (
      <div style={style.container}>
        <Card>
          <CardTitle title="Alphabetical" />
          {this.props.allTerms.map(term =>
            TermButton(term, this.props.termToFind, this.props.endTestTimer, this.props.nextTest)
          )}
        </Card>
      </div>
    );
  }
}

const sortedTermList = termCategories =>
  termCategories.reduce((allTerms, { terms }) => allTerms.concat(terms), []).sort();

const mapStateToProps = state => ({
  allTerms: sortedTermList(state.hicksDemo.demoTerms),
  termToFind: state.hicksDemo.termToFind
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startTestTimer,
      endTestTimer: _ => {
        return endTestTimer('Alphabetical');
      },
      nextTest: () => push('/category')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlphaList);
