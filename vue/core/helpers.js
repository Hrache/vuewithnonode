/**
 * Checks whether the 
 * */
function function_exists( name )
{
    return ( window.hasOwnProperty( name ) && typeof Object.getOwnPropertyDescriptor( window, name ).value !== 'function' );
}

/**
 * Appends new resource to the target
 * 
 * @param {string} id 
 * @param {dom-object} target 
 */
function newResource( id, target, rawHTML )
{
    if ( !document.querySelector( '#' + id ) )
    {
        target.innerHTML += rawHTML;
    }
}

/**
 * Gets the type of the property of the given parent object
 * */
function getPropertyType( parentObject, childObject )
{
    return typeof Object.getOwnPropertyDescriptor( parentObject, childObject.toString() ).value;
}