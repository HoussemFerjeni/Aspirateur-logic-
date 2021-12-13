const readline: any = require("readline");
let instuctions : string = '';
let dimentions = {lengthX: 0, lengthY: 0 };
let orientationArray :string[] =['N', 'E','S','W'];
type pos = {
    xi: number,
    yi : number,
    oi : string
}
let obj:pos={
    xi :0,
    yi :0,
    oi : ''
};

// const regex = new RegExp('^[ADG]+$');
const execution = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    execution.question("Donner la dimention horizontale de la grille (minimum 3) : ", function saveInput(x) {
        dimentions.lengthX = x;
        execution.question("Donner la dimention verticale de la grille (minimum 3) : ", function saveInput(y) {
            dimentions.lengthY = y;
            execution.question("Donner la position initiale x de l'aspirateur : ", function saveInput(xi) {
                obj.xi = xi;
                execution.question("Donner la position initiale y de l'aspirateur : ", function saveInput(yi) {
                    obj.yi = yi;
                    execution.question("Donner l'orientation initiale de l'aspirateur ['N', 'E', 'W', 'S'] : ", function saveInput(oi) {
                        obj.oi = oi;
                        execution.question("Donner la liste d'instructions pour l'aspirateur ['D', 'G', 'A'] \n exemple: DADADADAA \n minimum 3 instructions : ", function saveInput(text) {
                            instuctions = text;
                            executeCode();
                            execution.close();
                        });
                    });
                });
            });
        });
    });

//   while(dimentions.lengthY <= 2)
//   {
    
//   }
//   while(obj.xi < 0 || obj.xi > dimentions.lengthX - 1)
//   {
    
//   }
//   while(obj.yi < 0 || obj.yi > dimentions.lengthY - 1)
//   {
   
//   }
//   while(obj.oi !== 'N' && obj.oi !== 'W' && obj.oi !== 'S' && obj.oi !== 'E')
//   {
    
//   }
//     while(instuctions.length < 2 && regex.test(instuctions))
//   {
    
//   }
const executeCode = () => {
    for (let i = 0; i < instuctions.length; i++) {
        let val = orientationArray.indexOf(obj.oi);
        
    switch (instuctions[i]){
        case 'D': 
            if (val === orientationArray.length-1) {
                obj.oi = orientationArray[0];
            } else {
                obj.oi = orientationArray[val+1];
            }
        break;
        case 'G':
            if (val === 0) {
                obj.oi = orientationArray[orientationArray.length - 1];
            } else {
                obj.oi = orientationArray[val-1]; 
            }
            break;
        case 'A':
           if ( obj.oi == 'N' ) {
               if(obj.yi === dimentions.lengthY - 1) {
                   // obj.yi = 0;
                   console.log('Limite de la chambre');
               } else {
                   obj.yi ++;
               }
           } else if ( obj.oi == 'S') {
                if(obj.yi === 0) {
                    // obj.yi = dimentions.lengthY - 1;
                    console.log('Limite de la chambre');
                } else {
                    obj.yi --;
                }
           } else if ( obj.oi == 'E') {
                if(obj.yi === dimentions.lengthX - 1) {
                    //obj.xi = 0;
                    console.log('Limite de la chambre');
                } else {
                    obj.xi ++;
                }
           } else if ( obj.oi == 'W') {
                if(obj.yi === 0) {
                    // obj.xi = dimentions.lengthX - 1;
                    console.log('Limite de la chambre');
                } else {
                    obj.xi --;
                }
           }
           break;
    }    
    }
    console.log(obj);
}





