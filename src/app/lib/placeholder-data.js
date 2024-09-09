const posts = [
    {
      id: "a5e08164-b12b-4e72-9191-2f7daadb4e88",
      title: "Using Promise.allSettled",
      content:
        "This allows you to run all the promises concurrently like Promise.all, but instead of rejecting the entire batch when one promise fails, it returns the result of each promise (either fulfilled or rejected).",
      date: "2024-09-08",
      user: "TL",
    },
    {
      id: "6bd38af3-8a95-4a7a-add7-fd69c6b8f124",
      title: "Batch Insertion (If Supported by the Database)",
      content:
        "If your database supports batch insertion, you can reduce the overhead of multiple queries by inserting all posts in a single query. This is highly efficient if the database allows it.",
      date: "2024-09-08",
      user: "KS",
    },
    {
      id: "836b0611-e82e-4b5e-8ab9-8e9f98e43549",
      title: "Using an External Job Queue",
      content: "If your operation requires high reliability and scalability, consider offloading the inserts to a job queue. Each post can be added to a queue, and a worker can process the inserts in the background.",
      date: "2024-09-08",
      user: "JL",
    },
    {
      id: "b08212a4-fd01-4d39-892c-15d49b8a96a4",
      title: "How async/await Works with Promises",
      content:
        "async function: When a function is marked with the async keyword, it automatically returns a Promise, even if you don’t explicitly return a Promise in the function. The value returned from the function is wrapped in a resolved Promise. await: The await keyword is used to pause the execution of an async function until the Promise that it is waiting for is settled (either resolved or rejected). It essentially unwraps the value of a resolved Promise so that you can work with it as if it were synchronous.",
      date: "2024-09-08",
      user: "TL",
    },
    {
      id: "bd0f47c5-3cd0-48ee-9b52-104a914e2354",
      title: "Chunked Execution",
      content:
        "You can break your async operations into smaller groups (or chunks) and run them concurrently, controlling the number of simultaneous operations. This can be helpful if you don't want to overwhelm your database or API by sending too many requests at once.",
      date: "2024-09-08",
      user: "TL",
    },
    {
      id: "e7c26aa0-76f7-4037-b341-4a794c9c8f64",
      title: "Recursive async/await",
      content:
        "You can also use recursion to handle sequential execution without loops.",
      date: "2024-09-08",
      user: "TL",
    }
  ];
  
  module.exports = {
    posts,
  };
  