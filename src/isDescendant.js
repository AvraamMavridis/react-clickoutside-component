export default isDescendant = ( el, target ) => target !== null ? el === target || isDescendant( el, target.parentNode ) : false;
