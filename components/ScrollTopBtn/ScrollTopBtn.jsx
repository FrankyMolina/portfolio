import styles from './ScrollTopBtn.module.scss';

export default function ScrollTopBtn({ DOMElemt, resetScroll }) {
  function handleOnClick() {
    DOMElemt.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    resetScroll();
  }

  return (
    <button className={styles.scrollTopBtnContainer} onClick={handleOnClick}>
      ↑
    </button>
  );
}
