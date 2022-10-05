import { Request, Response } from 'express';
import {pool} from './../config/db.config';

export const getMenu = (req:Request, res:Response) => {
   pool.query("SELECT * FROM Udi.menu", (error,results) => {
    if(error) {
      throw new Error(error.message);
    }
      res.status(200).json(results);
    })
}






// const meals = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];