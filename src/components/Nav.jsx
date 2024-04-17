export { Nav }
import '../styles/utils.css'
import '../styles/styles.css'
import gitIcon from '../assets/github-mark-white.png'

function Nav({header, gitUser, gitUrl}){
    return (
        <nav className="nav horizontal-space-ar-flex">
            <h1>{header}</h1>
            <div className="github-cont horizontal-space-ar-flex">
                <img src={gitIcon} alt="github-logo" width={30} height={30}/>
                <a
                 href={gitUrl}
                 target="_blank">{gitUser}</a>
            </div>
        </nav>
    )
}