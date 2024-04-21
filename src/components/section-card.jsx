import '../styles/utils.css'
import '../styles/styles.css'
export { SectionCard }

function SectionCard({from, to, location, header, subHeader, children}){
    return (
        <div className="section-card horizontal-left-flex">
            <div className="date-location-cont vertical-start-flex" style={{padding: '10px', 'margin-right': '20px'}}>
                <span>{`${from} - ${to}`}</span>
                <span>{location}</span>
            </div>
            <div className="content-cont text-align-l">
                <h3>{header}</h3>
                <span>{subHeader}</span>
                {children}
            </div>
        </div>
    )
}
