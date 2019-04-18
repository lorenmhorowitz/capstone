import { withStyles } from "@material-ui/core/styles";
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

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
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
              {productListRows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.unitPrice}</TableCell>
                  <TableCell align="right">{row.lineTotal}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(200.21)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(8).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(10.99)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(200.43)}</TableCell>
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
