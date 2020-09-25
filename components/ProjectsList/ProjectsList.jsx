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
            <p>{data.name}</p>
            <p>
              {data.tech_used.map((tech) => {
                return `| ${tech} |`;
              })}
            </p>
            <Link href={`/project/${data.id}`}> Hmm lets see more</Link>
          </div>
        );
      })}
    </div>
  );
}
