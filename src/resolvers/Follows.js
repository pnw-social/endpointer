import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const MFollows = {
    follow(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/follows`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {MFollows}