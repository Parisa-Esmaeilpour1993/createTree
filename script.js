let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  function createTree(data) {
    const ul = document.createElement('ul');
    for (let key in data) {
      const li = document.createElement('li');
      li.textContent = key;
      if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
        li.appendChild(createTree(data[key])); 
      }
      ul.appendChild(li);
    }
    return ul; 
  }
  
  const treeList = createTree(data);

  document.body.appendChild(treeList);
  