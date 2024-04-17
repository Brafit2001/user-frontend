

export const ClipclassData = {
    users: {
        title: "Users",
        headers: [
            "image","id", "username", "name", "surname", "email"
        ],
        editable: [
            "username", "name", "surname", "email", "image"
        ],
        create: [
            "username", "name", "surname", "email"
        ],
        filter: [
            "id", "username", "name", "surname", "email"
        ]
    },
    roles: {
        title: "Roles",
        headers: [
            "id","name"
        ],
        editable: [
            "name"
        ],
        create: [
            "name"
        ],
        filter: [
            "id", "name"
        ]
    },
    courses: {
        title: "Courses",
        headers: [
            "id","title","year"
        ],
        editable: [
            "title", "year"
        ],
        create: [
            "title", "year"
        ],
        filter: [
            "id","title","year"
        ]
    },
    classes: {
        title: "Classes",
        headers: [
            "id","subject", "title", "image"
        ],
        editable: [
            "subject", "title", "image"
        ],
        create: [
            "subject", "title", "image"
        ],
        filter: [
            "id","subject", "title"
        ]
    },
    groups: {
        title: "Groups",
        headers: [
            "id","name","description", "class"
        ],
        editable: [
            "name","description", "class"
        ],
        create: [
            "name","description", "class"
        ],
        filter: [
            "id","name","description", "class"
        ]
    },
    subjects: {
        title: "Subjects",
        headers: [
            "id","code","title", "course"
        ],
        editable: [
            "code","title", "course"
        ],
        create: [
            "code","title", "course"
        ],
        filter: [
            "id","code","title", "course"
        ]
    },
    topics: {
        title: "topics",
        headers: [
            "id","title","deadline", "unit"
        ],
        editable: [
            "title","deadline", "unit"
        ],
        create: [
            "title","deadline", "unit"
        ],
        filter: [
            "id","title","deadline", "unit"
        ]
    },
    votes: {
        title: "Votes",
        headers: [
            "id","user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        editable: [
            "user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        create: [
            "user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        filter: [
            "id","user","post", "topic", "content", "originality", "clarity", "mean"
        ]
    },
    posts: {
        title: "Posts",
        headers: [
            "id","user","topic", "title", "type", "content"
        ],
        editable: [
            "user","topic", "title", "type", "content"
        ],
        create: [
            "user","topic", "title", "type", "content"
        ],
        filter: [
            "id","user","topic", "title", "type", "content"
        ]
    },

}
