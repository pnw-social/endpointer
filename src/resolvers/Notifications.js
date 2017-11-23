import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const Notifications = {
    notifications(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/notifications`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
    notification(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/notifications/${args.id}`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

const MNotifications = {
    clear(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/notifications/clear`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
    dismiss(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/notifications/clear`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

export {Notifications, MNotifications}