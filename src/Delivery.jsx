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
    marginBottom: 2,
    minHeight: 20,
    '&$expanded': {
      minHeight: 20,
    },
    textAline: 'center',
  },
  content: {
    '&$expanded': {
      margin: '5px 2',
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
          <Typography>
              <span style={{fontSize:"14px"}}>Shipping To 80301  </span>
              <span style={{fontSize:"12px", marginLeft:"5px", cursor:"pointer", color:"blue", textDecoration:"underline"}} >Change Zip</span>
              {/* color="blue" textDecoration="underline" */}

              <br />
              <span style={{fontSize:"14px"}}> Standard Shipping</span>
              <br />
              <span style={{fontSize:"14px"}}>Usually ships in 24 hours</span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Shipping Details</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontSize:"14px", marginLeft:"5px", cursor:"pointer", color:"blue", textDecoration:"underline"}}>
            Shipping policy
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Price Match Promise</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontSize:"14px", marginLeft:"5px", cursor:"pointer", color:"blue", textDecoration:"underline"}}>
              Price Match Promise
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}