import '../styles/utils.css'
import '../styles/styles.css'
export { SectionPreview }


function SectionPreview({title, width, children}){
    return (
        <div className="section-preview" style={{ width: width + 'px' }}>
            <div className="section-heading" style={{ width: width + 'px' }}>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}
