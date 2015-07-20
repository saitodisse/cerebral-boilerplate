class RegexHelper {

  static removeLine(text, from, to) {
    var first_part = text.substring(0, from);
    if (to !== text.length) {
      return first_part + text.substring(to + 1, text.length);
    } else {
      return first_part.substring(0, first_part.length - 1);
    }
  }

  static removeAllLinesByRegex(text, regex) {
    var matches = RegexHelper.matchAllRegex(text, regex);
    return RegexHelper.removeAllLines(text, matches);
  }

  static removeAllLines(text, matches) {
    for (var i = matches.length - 1; i >= 0; i--) {
      var match = matches[i];
      var from_i = match.index;
      var to_i = from_i + match[0].length;
      text = RegexHelper.removeLine(text, from_i, to_i);
    }
    return text;
  }

  /**
   * get first regex and return
   * @param  {string} str content
   * @param  {regex}  re  regexobj
   * @return {match}      match object
   */
  static matchFirstRegex(str, re) {
    var m;
    while ((m = re.exec(str)) !== null) {
      if (m.index === re.lastIndex) {
        re.lastIndex++;
      }
      return m;
    }
  }

  /**
   * get the result string from group index
   * @param  {string} str
   * @param  {regex}  re
   * @param  {number} groupIndex
   * @return {string}
   */
  static groupFromRegex(str, re, groupIndex) {
    var match = RegexHelper.matchFirstRegex(str, re);
    return match[groupIndex];
  }

  /**
   * return all maches from regex exec
   * @param  {string} str
   * @param  {regex}  re
   * @return {array}
   */
  static matchAllRegex(str, re) {
    var m;
    var all_matches = [];
    while ((m = re.exec(str)) !== null) {
      if (m.index === re.lastIndex) {
        re.lastIndex++;
      }
      all_matches.push(m);
    }
    return all_matches;
  }

  static trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  static ltrim(str) {
    return str.replace(/^\s+/, '');
  }

  static rtrim(str) {
    return str.replace(/\s+$/, '');
  }

  static fulltrim(str) {
    return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
  }

  static trimEmptyBorderLines(str) {
    return str.replace(/^$\n/g, '');
  }

}

export default RegexHelper;
