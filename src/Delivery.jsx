import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    borderTop: '1px solid rgb(255, 255, 255)',
    borderBottom: '2px solid rgb(214, 214, 214)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 1,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgb(255, 255, 255)',
    //borderBottom: '2px solid rgb(255, 255, 255)',
    marginBottom: 5,
    minHeight: 60,
    '&$expanded': {
      minHeight: 60,
    },
    textAline: 'center',
  },
  content: {
    '&$expanded': {
      margin: '16px 2',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Delivery & Pickup</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontSize:"12px"}}>
              <span>Shipping To 80301  </span>
              <span style={{marginLeft:"25px", cursor:"pointer", color:"blue", textDecoration:"underline"}} >Change Zip</span>
              {/* color="blue" textDecoration="underline" */}
              <br />
              Standard Shipping
              <br />
              Usually ships in 24 hours
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Shipping Details</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Shipping policy
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Price Match Promise</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Price Match Promise
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}