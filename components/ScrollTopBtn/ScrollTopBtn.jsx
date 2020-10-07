import styles from './ScrollTopBtn.module.scss';

export default function ScrollTopBtn({ DOMElemt }) {
  return (
    <button
      className={styles.scrollTopBtnContainer}
      onClick={() =>
        DOMElemt.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    >
      ↑
    </button>
  );
}
