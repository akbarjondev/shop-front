import React from "react";
import StyledCurrency from "./Currency.style";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import { aCurrencyOpen, aSetCurrency } from "./../../store/common.actions";
import { getCurrencies } from "./../../graphql/queries";

class Currency extends React.Component {
  render() {
    const { data } = this.props;

    return (
      !data.loading && (
        <StyledCurrency
          onClick={() =>
            this.props.dispatchCurrencyOpen(!this.props.currency.isOpen)
          }
          isOpen={this.props.currency.isOpen}
        >
          <div className="currency__icon">
            {this.props.currency.currentCurrency.symbol}
          </div>
          <div className="currency__list">
            {data.currencies.map((currency) => (
              <div
                className="currency__item"
                onClick={() => this.props.dispatchCurrency(currency)}
                key={currency.label}
              >
                <span className="currency__symbol">{currency.symbol}</span>
                <span className="currency__label">{currency.label}</span>
              </div>
            ))}
          </div>
        </StyledCurrency>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrency: (data) => dispatch(aSetCurrency(data)),
  dispatchCurrencyOpen: (data) => dispatch(aCurrencyOpen(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(graphql(getCurrencies)(Currency));
