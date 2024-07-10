import {getLoggedUserId} from "../../services/users-ms/UserService";
import {CLIPCLASS_URL} from "../../Constants";


const loggedUserId = getLoggedUserId()
export const SidebarData = [
    {
        title: 'My section',
        subNav: [
            {
                title: 'My courses',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/courses`
            },
            {
                title: 'My subjects',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/subjects`
            },
            {
                title: 'My classes',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/classes`
            },
            {
                title: 'My votes',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/votes`
            },
        ]
    },
    {
        title: 'Groups',
        subNav: [
            {
                title: 'My groups',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/groups`
            },
            {
                title: 'Class Groups',
                path: `${CLIPCLASS_URL}/groups`
            }
        ]
    },
];