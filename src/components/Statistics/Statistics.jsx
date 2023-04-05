import StatsItem from "./StatsItem/StatsItem";

const Statistics = ({title, stats}) => {
    return (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
      
        <ul className="stat-list">
            {stats.map((item) => {
                return <StatsItem key={item.id} {...item}/>
            })}
        </ul>
      </section>
    )
}

export default Statistics; 