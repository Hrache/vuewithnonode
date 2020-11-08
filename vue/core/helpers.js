/**
 * Appends new resource to the target
 * 
 * @param {string} id 
 * @param {dom-object} target 
 */
function newResource( id, target, rawHTML )
{
    if ( !document.querySelector( '#' + id ) ) {
        target.innerHTML += rawHTML;
    }
}