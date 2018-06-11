/**
 * Removes any hashes from a given string.
 *
 * @param {string} text to remove any existing hashes from.
 *
 * @return {string} either the previous string without the hash or the previous string.
 */
export function removeHash(text) {
  if(text && text != '') {
    return text.map(function(e) {
      return e.replace('#','');
    })
  }
}
