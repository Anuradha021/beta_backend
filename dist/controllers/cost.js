"use strict";
// export default class Cost {
//     constructor() {
Object.defineProperty(exports, "__esModule", { value: true });
//     }
//     getCostData = (req: any,res: any) => {
//         console.log('req', req.query);
//         res.send({name: 'manish', age: 25, salary: 10});
//     }
//     // calculateData = (req: any ,res:any)=>{
//     //    // console.log('calculated data =',area)
//     // }
// }
class Cost {
    constructor() {
        this.getCostData = (req, res) => {
            const { state, city, area } = req.query;
            const parsedArea = this.parseArea(area);
            if (!parsedArea) {
                res.status(400).send({ error: 'Invalid area format. Use numbers with "feet" or "meters".' });
                return;
            }
            const cementBags = Math.ceil(parsedArea / 10);
            const bricks = Math.ceil(parsedArea * 50);
            res.send({ state, city, area: parsedArea, cementBags, bricks });
        };
        this.parseArea = (area) => {
            if (!area)
                return null;
            const match = area.match(/^(\d+)(feet|meters)$/i);
            if (!match)
                return null;
            const value = parseFloat(match[1]);
            return match[2].toLowerCase() === 'feet' ? value * 0.092903 : value;
        };
    }
}
exports.default = Cost;
