import config from '../config';
import {get, post, railGet, patch} from './util';


const Blocks = {
    blocks(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/blocks`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}


export {Blocks}