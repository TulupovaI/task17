
let arr = [1, 2, 3, [3, 5, 1, 8], 7];
let generateList = function(items) {
  return items.reduce((ul, item) => {
    let li = document.createElement('li');

    if (!Array.isArray(item)) {
      li.innerText = item;
    } else {
      var new_ul = generateList(item);
      li.appendChild(new_ul);
    }

    ul.appendChild(li);
    return ul;
  }, document.createElement('ul'));
}
document.body.appendChild(generateList(arr));