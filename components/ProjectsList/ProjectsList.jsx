import Link from 'next/link';

import projectsInfo from '../../constants/projectsInfo.json';

import styles from './ProjectsList.module.scss';

export default function ProjectsList() {
  return (
    <div className={styles.ProjectsList}>
      {projectsInfo.map((data) => {
        return (
          <div key={data.id} className={styles.singleProject}>
            <img src={data.img} alt={data.img_alt} />
            <h3>{data.name}</h3>
            <p>
              {data.tech_used.map((tech) => {
                return `| ${tech} |`;
              })}
            </p>

            <div className={styles.projectButton}>
              <Link href={`/project/${data.id}`}>
                <a>Hmm lets see more</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
