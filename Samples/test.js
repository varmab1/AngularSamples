//Arrow Functions

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  var a=1
  console.log((a => materials[a])(1));

  var x={lis:[],lis1:[]}
  x.__proto__.boo= function (ele){
    this.lis1.push(ele)
  }


  x.far= function(ele){
    this.lis.push(ele);
  }

  x.far(10)
  x.boo(11)
  console.log(x.lis[0])
  

