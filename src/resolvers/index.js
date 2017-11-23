import {Accounts, MAccounts} from './Accounts';
import {Blocks} from './Blocks';
import {DomainBlocks, MDomainBlocks} from './DomainBlocks';
import {Favourites} from './Favourites';
import {FollowRequests, MFollowRequests} from './FollowRequests';
import {MFollows} from './Follows';
import {Instances} from './Instances';
import {Mutes} from './Mutes';
import {Notifications, MNotifications} from './Notifications';
import {Reports, MReports} from './Reports';
import {Search} from './Search';
import {Statuses, MStatuses} from './Statuses';
import {Timelines} from './Timelines';

export default {
    RootQuery: {
        Accounts: () => ({}),
        Blocks: () => ({}),
        DomainBlocks: () => ({}),
        Favourites: () => ({}),
        FollowRequests: () => ({}),
        Instances: () => ({}),
        Favourites: () => ({}),
        Mutes: () => ({}),
        Notifications: () => ({}),
        Reports: () => ({}),
        Search: () => ({}),
        Statuses: () => ({}),
        Timelines: () => ({}),
    },
    RootMutation: {
        Accounts: () => ({}),
        DomainBlocks: () => ({}),
        FollowRequests: () => ({}),
        Follows: () => ({}),
        Notifications: () => ({}),
        Reports: () => ({}),
        Statuses: () => ({}),
    },

    Accounts,
    MAccounts,
    Blocks,
    DomainBlocks,
    MDomainBlocks,
    Favourites,
    FollowRequests,
    MFollowRequests,
    MFollows,
    Instances,
    Favourites,
    Mutes,
    Notifications,
    MNotifications,
    Reports,
    MReports,
    Search,
    Statuses,
    MStatuses,
    Timelines
}
