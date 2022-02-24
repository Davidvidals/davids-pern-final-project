import check from '../assets/check.png'
import uncheck from '../assets/uncheck.png'
function Featured({featured}){
    return(
        <>
        <p><img src ={featured ? check:uncheck} alt={featured ? 'featured' : 'not featured'} height={90} width={20}/></p>
        </>
    )
}

export default Featured;