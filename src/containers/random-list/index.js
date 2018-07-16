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
        window.alert('Great! You found the otter! You otter try the next test now.');
        nextTest();
      }}
    />
  </CardActions>
);

class RandomList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startTestTimer();
  }

  render() {
    return (
      <div style={style.container}>
        <Card>
          <CardTitle title="Random" />
          {this.props.allTerms.map(term =>
            TermButton(term, this.props.termToFind, this.props.endTestTimer, this.props.nextTest)
          )}
        </Card>
      </div>
    );
  }
}

const shuffle = array => {
  let i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const randomTermList = termCategories =>
  shuffle(termCategories.reduce((allTerms, { terms }) => allTerms.concat(terms), []));

const mapStateToProps = state => ({
  allTerms: randomTermList(state.hicksDemo.demoTerms),
  termToFind: state.hicksDemo.termToFind
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startTestTimer,
      endTestTimer: _ => {
        return endTestTimer('Random');
      },
      nextTest: () => push('/alpha')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RandomList);
