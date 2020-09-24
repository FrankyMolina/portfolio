import styles from './TechStack.module.scss';

export default function TechStack({ techs }) {
  return (
    <div className={styles.TechStack}>
      <ul>
        {techs.map((data) => {
            return(
            <li>{data}</li>
            )
        })}
      </ul>
    </div>
  );
}
