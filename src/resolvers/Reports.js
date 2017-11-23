import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const Reports = {
    reports(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/reports`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

const MReports = {
    report(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/reports`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {Reports, MReports}