import PropTypes from "prop-types";
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) =>{
return(
    <table className={css.transaction_history}>
  <thead>
    <tr className={css.title_list}>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) =>
      <tr key={id}>
      <td className={css.lis}>{type}</td>
      <td className={css.lis}>{amount}</td>
      <td className={css.lis}>{currency}</td>
    </tr>)} 
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }))
}