import '../styles/styles.css'
export { Button }

function Button({title, disabled, onClick, style}){
    let disabledClass = (disabled) ? 'disabled' : 'no-disabled';
    return (
        <button
         className={`default-btn ${disabledClass}`}
         onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
          style={style}>
            {title}
        </button>
    )
}