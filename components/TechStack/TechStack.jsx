import techStackJson from '../../constants/techStack.json';

import styles from './TechStack.module.scss';

export default function TechStack() {
  return (
    <div className={styles.TechStack}>
      <ul>
        {techStackJson.map((data, index) => {
          return (
            <li key={index}>
              <a
                href={data.URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.listElement}
              >
                {data.techName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
