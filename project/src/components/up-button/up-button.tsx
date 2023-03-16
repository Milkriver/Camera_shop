import './up-button.css';

function UpButton(): JSX.Element {
  const handleСlick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="up-btn" onClick={handleСlick}>
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </div>
  );
}

export default UpButton;
