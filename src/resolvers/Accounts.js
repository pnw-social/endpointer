import config from '../config';
import {get, post} from './util';


export default {
    verify_credentials(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get('https://pnw.social/api/v1/accounts/verify_credentials', {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    }
}