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
                title: 'My groups',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/groups`
            },
            {
                title: 'My topics',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/topics`
            },
            {
                title: 'My votes',
                path: `${CLIPCLASS_URL}/users/${loggedUserId}/votes`
            },
        ]
    },
    {
        title: 'General section',
        subNav: [
            {
                title: 'Courses',
                path: `${CLIPCLASS_URL}/courses`
            },
            {
                title: 'Subjects',
                path: `${CLIPCLASS_URL}/subjects`
            },
            {
                title: 'Classes',
                path: `${CLIPCLASS_URL}/classes`
            },
            {
                title: 'Groups',
                path: `${CLIPCLASS_URL}/groups`
            },
            {
                title: 'Topics',
                path: `${CLIPCLASS_URL}/topics`
            }
        ]
    },
];