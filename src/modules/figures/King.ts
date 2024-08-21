import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/black-king.png'
import whitelogo from '../../assets/white-king.png'

export class King extends Figure {
  
    isEmptyMovementStraightKing(target: Cell): boolean {
        if(this.cell.x !== target.x && this.cell.y !== target.y) {
            return false
        }
    
        const miny = Math.min(this.cell.y, target.y)
        const maxy = Math.max(this.cell.y, target.y)
        
        const min = Math.min(this.cell.x, target.x)
        const max = Math.max(this.cell.x, target.x)

        if(Math.abs(this.cell.y - target.y) > 1 || Math.abs(this.cell.x - target.x) > 1 ){
            return false
        }
    
        for (let y = miny + 1; y < maxy; y++) {
           if(!this.cell.board.getCell(this.cell.x, y).isEmpty()){
            console.log(maxy)
            return false
            
           }
            
        }
        for (let x = min + 1; x < max; x++) {
            if(!this.cell.board.getCell(x, this.cell.y).isEmpty()){
             return false
            }
          
             
         }
        return true
    }

    isEmptyDiagonalKing(target: Cell): boolean {
        const absX = Math.abs(target.x - this.cell.x)
        const absY = Math.abs(target.y - this.cell.y)
        if(absY !== absX){
            return false
        }
        for (let i = 1; i < absY; i++) {
            if(!this.cell.board.getCell(this.cell.x  , this.cell.y  ).isEmpty()){
                return false
            }
            
        }
        return true
    }
 
    
    constructor( color: Colors, cell: Cell) {
       
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
           return false
        }
        if(this.isEmptyMovementStraightKing(target)){
            return true
        }
        if(this.isEmptyDiagonalKing(target)){
            return true
        }
        
   
    return false
    }
}