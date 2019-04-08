import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Create from '@material-ui/icons/Create';
import Work from '@material-ui/icons/Work';
import Face from '@material-ui/icons/Face';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab icon={<Create />} label="Blog" />
          <Tab icon={<Work />} label="Portfolio" />
          <Tab icon={<Face />} label="About Me" />
        </Tabs>
      </div>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);