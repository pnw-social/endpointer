import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const Search = {
    search(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/search`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {Search}