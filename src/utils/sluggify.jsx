/**
 * @param {string} title
 */

export default function sluggify(title) {
  const v = title.toLowerCase();
  return v.replace(" ", "-");
}
