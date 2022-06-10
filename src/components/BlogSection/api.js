const posts = [
  {
    id: "1",
    title: "Preventing transitions with React Router",
    date: '14/04/2020',
    coverImg:'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    content:
      "Respecting your user’s input is not only a solid business decision, but it also shows you care about little UX details. One of the most frustrating experiences a user can have is when they spend time inputting data into your app, accidentally hit a hotkey to navigate away from the current route, then have to restart the form all over. There are a few different approaches to fixing this bad UX but in this post, we’ll focus on how React Router v5 can help by warning before a route transition.",
    Author:'Areful'
  },
  {
    id: "2",
    title: "Programmatically navigate with React Router",
    date: '16/04/2020',
    coverImg:'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content:
      "What I love about React Router is its dedication to declarative, “React like” code. The whole goal of the redesign to React Router v3 to v4 was to align React Router’s vision with React’s. Fundamentally, what this means is that the same mental model that applies to React should also apply to React Router.",
      Author:'Areful'
  },
  {
    id: "3",
    title: "Query Strings with React Router",
    date: '15/04/2020',
    coverImg:'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content:
      "When you’re building for the web, sometimes you need to pass information via the URL. To do this, you can use a query string. You’ve probably seen them before IRL. Here’s an example from Twitter’s analytics page.",
      Author:'Areful'
  }
];

export function getPost(postId) {
  return posts.find(({ id }) => postId === id);
}

export function getPosts() {
  return posts.map(({Author, date, id, title }) => ({ Author, date, id, title }));
}
