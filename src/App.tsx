import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface ILesson {
  id: string
  title: string
}

export function App() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={ lesson.id }>{ lesson.title }</li>
        })}
      </ul>
    </>
  )
}