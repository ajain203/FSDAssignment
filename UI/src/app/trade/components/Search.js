import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';

 const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

  
  function clear(){
    console.log("clear method");
  }

  function search(){
    console.log("search method");
  }

  function Search(props) {
    const { classes } = props;

    const commodityData = [
      {
          "commodityId": 1,
          "commodity": "AL",
      },
      {
          "commodityId": 2,
          "commodity": "ZN",
      },
      {
          "commodityId": 3,
          "commodity": "CU",
      },
      {
          "commodityId": 4,
          "commodity": "AU",
      },
      {
          "commodityId": 5,
          "commodity": "AG",
      }
    ]

    const locationData = [
        {
            "locationId": 10,
            "location": "SG"
        },
        {
            "locationId": 20,
            "location": "LN"
        },
        {
            "locationId": 30,
            "location": "NY"
        },
        {
            "locationId": 40,
            "location": "DN"
        }
    ]

    const counterPartyData = [
      {
          "counterPartyId": 101,
          "counterParty": "Lorem"
      },
      {
          "counterPartyId": 102,
          "counterParty": "Dolor"
      },
      {
          "counterPartyId": 103,
          "counterParty": "Ipsum"
      },
      {
          "counterPartyId": 104,
          "counterParty": "Amet",
      }
    ]

    const priceData  = [
      {
          "commodityId": 1,
          "locationId": 10,
          "price": 1234.45
      },
      {
          "commodityId": 2,
          "locationId": 10,
          "price": 4321.45
      },
      {
          "commodityId": 3,
          "locationId": 10,
          "price": 5678.45
      },
      {
          "commodityId": 4,
          "locationId": 10,
          "price": 8755.45
      },
      {
          "commodityId": 5,
          "locationId": 10,
          "price": 5863.45
      }
    ]


    const state = {
        "priceData": priceData,
        "counterPartyData": counterPartyData,
        "locationData": locationData,
        "commodityData": commodityData,
        "side": "Buy"
      };
  
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="tradeDateSearch"
          label="Trade Date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        /> 
        to
        <TextField
          id="toTradeDateSearch"
          label="To Trade Date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        &emsp;
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="commoditySearch">Commodity</InputLabel>
          <Select native defaultValue={0} input={<Input id="commoditySearch" />}>
            <option value="0" />
            {
                state.commodityData.map( n => {
                    return (
                        <option value={n.commodityId}>{n.commodity}</option>
                    );
                })
            }
          </Select>
        </FormControl>
        &emsp;
        <FormGroup row>
        {/* <InputLabel htmlFor="sideSearch">Side</InputLabel> */}
        <FormControlLabel
          control={
            <Checkbox
              checked={state.side === 'Buy'}
              onChange={() => state.side='Buy'}
              value="Buy"
            />
          }
          label="Buy"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.side === 'Sell'}
              onChange={() => state.side='Sell'}
              value="Sell"
            />
          }
          label="Sell"
        />
        </FormGroup>
        &emsp;
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="counterpartySearch">Counterparty</InputLabel>
          <Select native defaultValue={0} input={<Input id="counterpartySearch" />}>
          <option value="0" />
          {
              state.counterPartyData.map( n => {
                  return (
                      <option value={n.counterPartyId}>{n.counterParty}</option>
                  );
              })
          }
          </Select>
          {/* <FormHelperText>Uncontrolled</FormHelperText> */}
        </FormControl>
        &emsp;
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="locationSearch">Location</InputLabel>
          <Select native defaultValue={0} input={<Input id="locationSearch" />}>
          <option value="0" />
          {
              state.locationData.map( n => {
                  return (
                      <option value={n.locationId}>{n.location}</option>
                  );
              })
          }
          </Select>
        </FormControl>
        <Button className={classes.button} onClick={clear}>clear</Button>
        <Button className={classes.button} onClick={search}>Search</Button>
      </form>
    );
  }
    
  Search.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Search);