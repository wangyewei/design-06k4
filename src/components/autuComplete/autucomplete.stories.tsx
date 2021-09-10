import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { KAutuComplete, DataSourceType } from './KAutuComplete'


interface GitHubUserProps {
  login: string;
  url: string;
}

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/user?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
          console.log(items)
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
        })
    })
}



// const handleFetch = (query: string) => {
//   return filePlaersObjArr.filter(player => player.value.includes(query))
// }
const renderOption = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GitHubUserProps>
  return (
    <>
      <h2>Name: {itemWithGithub.login}</h2>
      <p>age: {itemWithGithub.url}</p>
    </>
  )
}
const SimpleComplete = () => {
  // const filmPlayers = ['joker', 'harley quinn', '邵庄']
  // const filePlaersObjArr = [
  //   { value: 'wangyewei', age: 21 },
  //   { value: 'kiko', age: 32 },
  //   { value: 'pengyunjin', age: 22 }
  // ]
  // const handleFetch = (query: string) => {
  //   return filmPlayers.filter(name => name.includes(query)).map(name => ({ value: name }))
  // }
  return (
    <KAutuComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
    // renderOption={renderOption}
    />
  )
}

const renderOptiopnComplete = () => {
  return (
    <KAutuComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      renderOption={renderOption} />
  )
}

storiesOf('自动填充的输入框 KAutoCompale', module)
  .add('默认的自动填充输入框', SimpleComplete)
  .add('自定义模板的自动填充输入框', renderOptiopnComplete)