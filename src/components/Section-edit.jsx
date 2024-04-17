import '../styles/utils.css'
import { Button } from './Button'
export { SectionEdit }

function SectionEdit({title, children, width, manualPreview, open}){

    const toogleFoldDiv = (event) => {
        // open/close fold and remove class
        let sectionCont = event.target.parentElement;
        let foldCont = sectionCont.querySelector('.fold-cont');

        let openSections = document.querySelectorAll('.open-section') || [];
        if(openSections.length > 0){
            for(let i = 0; i < openSections.length; i++){
                if(!openSections[i].isEqualNode(sectionCont)){
                    let fold = openSections[i].querySelector('.fold-cont');
                    fold.classList.toggle('unfold-cont');
                    openSections[i].classList.toggle('open-section');
                }
            }
        }

        sectionCont.classList.toggle('open-section');
        foldCont.classList.toggle('unfold-cont');
    }

    return (
        <div className={`section-container ${(open) ? 'open-section' : ''}`} style={{ width: width + 'px' }}>     
            <Button title={title}
             style={{ width: width + 'px' }}
             onClick={toogleFoldDiv} />

            <div className={`fold-cont vertical-center-flex ${(open) ? 'unfold-cont' : ''}`}>
                {children}
            </div>
        </div>
    )
}