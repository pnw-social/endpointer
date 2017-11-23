import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const FollowRequests = {
    follow_requests(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/follow_requests`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

const MFollowRequests = {
    authorize(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/follow_requests/${args.id}/authorize`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
    reject(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/follow_requests/${args.id}/reject`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {FollowRequests, MFollowRequests}