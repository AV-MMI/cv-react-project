import '../styles/utils.css'
import '../styles/styles.css'
export { SectionPreview }


function SectionPreview({title=' ', width, children}){
    return (
        <div className="section-preview" style={{ width: width }}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
