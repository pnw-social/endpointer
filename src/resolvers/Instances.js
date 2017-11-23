import config from '../config';
import {get, post, railGet, patch} from './util';


const Instances = {
    instance(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/instance`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}


export {Instances}