import config from '../config';
import {get, post, delet, railGet, patch} from './util';


const DomainBlocks = {
    domain_blocks(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/domain_blocks`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}

const MDomainBlocks = {
    block(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/domain_blocks`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
    unblock(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            delet(`https://pnw.social/api/v1/domain_blocks`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },
}


export {DomainBlocks, MDomainBlocks}