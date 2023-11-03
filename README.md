# Turing News API Mock Take Home Assessment

## UI

![category-ui](https://github.com/JoshBennett793/news-turing-take-home/assets/100454651/b0dc7ff5-1bef-46fa-a401-2ea45445a5bd)
<br />

---
<br />

![single-ui](https://github.com/JoshBennett793/news-turing-take-home/assets/100454651/70289951-0f9a-471f-84a4-690ab88dfcc1)

## Setup Instructions

#### Clone this repo to your local machine by running:
`git@github.com:JoshBennett793/rancid-tomatillos.git`

#### Cd into the root directory 
`cd rancid-tomatillos`

#### Install dependencies 
`npm install`

#### Run the start script
`npm run dev`

#### You will see some output in your terminal. Some of that output should look something like this:
```bash
VITE v4.4.9  ready in 300 ms
  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

#### Go to http://127.0.0.1:5173/ in your browser to view the code running in the browser

## Snippets

#### Clean up function
```javascript
export function cleanData(data) {
  return data
    .filter(article => article.title !== '[Removed]')
    .map(article => {
      return {
        id: article.id,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: convertDate(article.publishedAt),
        content: article.content,
        source: article.source.name
      }
    })
}
```

#### Throwback
```javascript
const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  return (
    <nav className='sidebar-nav'>
      <ul className='nav'>
        {categories.map(category => (
          <button
            className='nav-item'
            key={category}
            onClick={() => navigate(`/${category}`)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </ul>
    </nav>
  )
```

## Planning

[Miro Board](https://miro.com/app/board/uXjVNU-w4g8=/)

- Using Miro to build out a well-thought out wireframe of the application was really helpful when it came time to code
- I wanted to emphasize the top headlines by choosing a slightly different layout and card size
- I provided the user category options as news subjects to select from, with the ability to search and filter by relevancy, popularity, and date published coming in future iterations


## Challenges

- Router tends to be a tricky one to implement without at least a little bit of trouble. I'm more comfortable now than ever before using different params in the url and making dynamic network requests based on params.

- Mitigating side-effects in React is consistently a challenge because the configuration is slightly different each time and debugging can be time-consuming

## Wins

- Spending the time on a nice wireframe was really helpful in having a reference to something when determining how to build out my components

- I'm getting more accustomed to the reactive nature of react. I'm more strategic in where I position my components and how I make them communicate. 
