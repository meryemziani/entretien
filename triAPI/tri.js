function trierObjets(tableau, propriete, ordre) {
    if (ordre !== 'asc' && ordre !== 'desc') {
      console.error("L'ordre de tri doit être 'asc' (croissant) ou 'desc' (décroissant).");
      return tableau;
    }
  
    return tableau.sort(function(a, b) {
      let valeurA = a[propriete];
      let valeurB = b[propriete];
  
      if (typeof valeurA === 'string') {
        valeurA = valeurA.toUpperCase();
      }
  
      if (typeof valeurB === 'string') {
        valeurB = valeurB.toUpperCase();
      }
  
      if (ordre === 'asc') {
        return (valeurA < valeurB) ? -1 : (valeurA > valeurB) ? 1 : 0;
      } else {
        return (valeurA > valeurB) ? -1 : (valeurA < valeurB) ? 1 : 0;
      }
    });
  }
  
  // Exemple d'utilisation :
  const donneesAPI = [
    { id: 1, name: 'Meryem', age: 21},
    { id: 2, name: 'John', age: 30 },
    { id: 3, name: 'Alice', age: 25 },
    { id: 4, name: 'Bob', age: 35 }
  ];
  
  const resultatCroissant = trierObjets([...donneesAPI], 'age', 'asc');
  console.log('Tri croissant:', resultatCroissant);
  
  const resultatDecroissant = trierObjets([...donneesAPI], 'name', 'desc');
  console.log('Tri décroissant:', resultatDecroissant);

  const resultatCroissantName = trierObjets([...donneesAPI], 'name', 'asc');
  console.log('Tri croissant:', resultatCroissantName);
  