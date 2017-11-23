import config from '../config';
import {get, post, railGet, patch} from './util';


const Accounts = {
    account(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/${args.id}`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },

    verify_credentials(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get('https://pnw.social/api/v1/accounts/verify_credentials', {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },

    followers(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/${args.id}/followers`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },

    following(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/${args.id}/following`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },

    statuses(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/${args.id}/statuses`, args.filter, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });   
    },

    search(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/search`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        }); 
    },

    relationships(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            get(`https://pnw.social/api/v1/accounts/relationships`, args, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    }

}

const MAccounts = {
    update_credentials(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            patch(`https://pnw.social/api/v1/accounts/update_credentials`, args.update, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    follow(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/follow`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    unfollow(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/unfollow`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    block(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/block`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    unblock(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/unblock`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    mute(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/mute`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
    unmute(obj, args, context, info)
    {
        return new Promise((yay, boo) =>
        {
            post(`https://pnw.social/api/v1/accounts/${args.account}/unmute`, {}, context.ticket.access_token)
            .then((json) => {yay(json);})
            .catch((err) => {boo(err)});
        });
    },
}

export {Accounts, MAccounts}