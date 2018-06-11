/**
 * Given a text extracts potential tags in the form of #tagname from and returns
 * them in an array otherwise null.
 *
 * @param {string} text Given a text to extract potential tags from.
 *
 * @return {array|null} returns an array of strings containing the found tags from or null if none has been found.
 */
function getTags(text) {

  if (text && text != '') {

    let reg = /#[a-zA-Z]+/gm;

    return text.match(reg);
  }
}

export {getTags};

