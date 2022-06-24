import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleFormSubscription(event: FormEvent) {
    event?.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <>
    <div className='min-h-screen bg-darkbg bg-cover bg-no-repeat bg-opacity-10
    flex flex-col items-center'
    >
      <div className='w-full max-w-[1100px] h-screen flex items-center
      justify-between mx-auto px-8'>
        <div className='max-w-[640px]'>
          <Logo />

          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Join this <strong className='text-green-400'>event</strong> and learn many things, <strong className='text-green-400'>or not</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur. 
            Necessitatibus sint assumenda maiores! Quasi dolore et quisquam repudiandae 
            nemo nulla aperiam natus non ipsum. Voluptatem, iste! Temporibus, aliquid enim?
          </p>
        </div>

        <div className='p-8 text-center bg-gray-700 border border-gray-500 
        rounded min-w-[350px]'>
          <strong className='text-2xl mb-6 block'>
            Subscribe, it's free
          </strong>

          <form
            onSubmit={ handleFormSubscription }
            className='flex flex-col gap-2 w-full'
          >
            <input
              onChange={ event => setName(event.target.value) }
              className='bg-gray-900 rounded px-5 h-14'
              placeholder='Your full name'
              type="text"
            />
            <input
              onChange={ event => setEmail(event.target.value) }
              className='bg-gray-900 rounded px-5 h-14'
              placeholder='Your email'
              type="email"
            />

            <button
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold
              text-sm hover:bg-green-700 transition-colors'
              type='submit'
            >
              Save my seat
            </button>
          </form>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}