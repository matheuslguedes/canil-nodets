import {Request, Response} from 'express'
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createReturnObject' 

export const search = (req: Request, res: Response) =>{
    let query: string = req.query.q as string;
    if(!query){
        res.redirect('/')
        return;
    }
    let list = Pet.filterFromName(query)
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}