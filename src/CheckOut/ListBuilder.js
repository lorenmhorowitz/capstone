import { withStyles } from "@material-ui/core/styles";
import formatter from "../utils/formatter";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(quantity, description, unitPrice, lineTotal) {
  id += 1;
  return { id, quantity, description, unitPrice, lineTotal };
}

class ListBuilder extends Component {
  render() {
    const { classes } = this.props;

    const productListRows = [];
    this.props.products.map(product => {
      productListRows.push(
        createData(
          product.quantity,
          product.description,
          product.unitPrice,
          product.lineTotal
        )
      );
    });

    let subtotal = 0;
    let taxRate = 8.4;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Line Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productListRows.map(row => {
                subtotal += row.lineTotal;
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.description}
                    </TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{`$${formatter.money(
                      row.unitPrice
                    )}`}</TableCell>
                    <TableCell align="right">{`$${formatter.money(
                      row.lineTotal
                    )}`}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{`$${formatter.money(
                  subtotal
                )}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${taxRate.toFixed(2)} %`}</TableCell>
                <TableCell align="right">{`$${formatter.money(
                  subtotal * (taxRate / 100)
                )}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{`$${formatter.money(
                  subtotal * (1 + taxRate / 100)
                )}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

ListBuilder.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default withStyles(styles)(ListBuilder);
