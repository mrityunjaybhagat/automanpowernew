function importAll(r) {
    let icons = {};
    r.keys().forEach((item) => {
        icons[item.replace('./', '')] = r(item);
    });
    return icons;
  }
  
  const icons = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
  
  export default icons;
  