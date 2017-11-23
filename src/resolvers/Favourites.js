import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const Favourites = {
    favourites(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/favourites`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {Favourites}