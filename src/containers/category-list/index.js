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

const TermButton = (term, termToFind, endTestTimer, checkResults) => (
  <CardActions key={term}>
    <RaisedButton
      label={term}
      primary={true}
      style={style.button}
      onClick={_ => {
        console.log('termToFind', JSON.stringify(termToFind, null, 2));
        if (term !== termToFind) {
          console.log('Try again.');
          return;
        }
        endTestTimer();
        window.alert("All set! Let's check the results.");
        checkResults();
      }}
    />
  </CardActions>
);

const CategoryCard = ({ category, terms }, props) => (
  <Card style={style.container} key={category}>
    <CardTitle title={category} />
    {terms.map(term => TermButton(term, props.termToFind, props.endTestTimer, props.checkResults))}
  </Card>
);

class CategoryList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startTestTimer();
  }

  render() {
    return <div>{this.props.categories.map(category => CategoryCard(category, this.props))}</div>;
  }
}

const mapStateToProps = state => ({
  categories: state.hicksDemo.demoTerms,
  termToFind: state.hicksDemo.termToFind
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startTestTimer,
      endTestTimer: _ => {
        return endTestTimer('Categories');
      },
      checkResults: () => push('/results')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
