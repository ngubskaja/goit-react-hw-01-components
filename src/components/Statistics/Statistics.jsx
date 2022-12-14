import PropTypes from "prop-types";
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

<ul className={css.stat_list}>
{stats.map(({id, label, percentage}) => {
    return(
        <li className={css.item} key={id} > 
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
    )
})
}
</ul>
</section>)
  };

  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        },
    )),
  };




//   <ul className="stat-list">
//   <li className="item">
//     <span className="label">.docx</span>
//     <span className="percentage">4%</span>
//   </li>
//   <li className="item">
//     <span className="label">.mp3</span>
//     <span className="percentage">14%</span>
//   </li>
//   <li className="item">
//     <span className="label">.pdf</span>
//     <span className="percentage">41%</span>
//   </li>
//   <li className="item">
//     <span className="label">.mp4</span>
//     <span className="percentage">12%</span>
//   </li>
// </ul>
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }