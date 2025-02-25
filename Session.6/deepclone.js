function deepCloneWithPaths(obj, prefix = '', result = {}) {
    // Se o objeto não for um objeto ou for null, retorna diretamente
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    // Cria um clone (array ou objeto)
    const clone = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}/${key}` : key;
  
        // Se for um objeto ou array -> recursão
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          clone[key] = deepCloneWithPaths(obj[key], newKey, result);
        } else {
          clone[key] = obj[key];
          result[newKey] = obj[key]; // Armazena o caminho
        }
      }
    }
  
    return clone;
  }
  

  const nested = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [4, 5]
  };
  
  const result = {};
  const clonedNested = deepCloneWithPaths(nested, '', result);
  
console.log(result)
console.log(clonedNested)


  for (const key in result) {
    console.log(`${key} -> ${result[key]}`);
  }